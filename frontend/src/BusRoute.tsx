import React, { useEffect, useState } from 'react'
import img from './assets/exchange.png'
import { Button } from "../@/components/ui/button"
import axios from 'axios'
import { Combobox } from '@headlessui/react'
import { Bus, Menu, X, Search } from 'lucide-react'
import BusRouteInfo from './BusRouteInfo'
import LoadingDots from './Loading'

interface Source {
  name: string;
}

interface BusStand {
  name: string;
}

export default function BusRoute() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [sourceValue, setSourceValue] = useState<Source>({ name: '' })
  const [destinationValue, setDestinationValue] = useState<Source>({ name: '' })
  const [busStands, setBusStands] = useState<BusStand[]>([])
  const [filteredSourceStands, setFilteredSourceStands] = useState<BusStand[]>([])
  const [filteredDestinationStands, setFilteredDestinationStands] = useState<BusStand[]>([])
  const [availableBuses, setAvailableBuses] = useState([])
  const [Loading, setLoading] = useState(false)
  const [correct, setCorrect] = useState(true)
  // Fetch bus stands once on component mount
  useEffect(() => {
    const fetchBusStands = async () => {
      try {
        const res = await axios.get('https://bus-tracker-murex.vercel.app/api/busStand/all')
        setBusStands(res.data)
      } catch (error) {
        console.error('Error fetching bus stands:', error)
      }
    }
    fetchBusStands()
  }, [])

  // Function to fetch buses by route
  const fetchbuses = async (route: string) => {
    try {
      const res = await axios.get(`https://bus-tracker-murex.vercel.app/api/bus/getBusByRoute/${route}`)
      setAvailableBuses(res.data)
      
      setLoading(false)
    } catch (error) {
      console.error('Error fetching buses:', error)
    }
  }

  // Fetch route ID and then fetch buses based on route ID
  const fetchRoutes = async () => {
    try {
      if (!sourceValue.name || !destinationValue.name) {
      setLoading(false)
      setCorrect(false)
        console.error('Source and destination must be selected');
        return;
      }
      const body = { source: sourceValue.name, destination: destinationValue.name };
      const res = await axios.post('https://bus-tracker-murex.vercel.app/api/busRoute/getRouteId', body);
      fetchbuses(res.data.busRouteId);
     
    } catch (error) {
      setCorrect(false)
      setAvailableBuses([])
      setLoading(false)
      console.error('Error fetching buses:', error);
    }
  }

  // Fetch bus routes and buses every 10 seconds based on currently selected source and destination
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sourceValue.name && destinationValue.name) {
        console.log('Fetching buses...', sourceValue.name, destinationValue.name);
        fetchRoutes();
      }
      else {
        setAvailableBuses([])
      }
    }, 10000);
  


    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [sourceValue, destinationValue]);

  useEffect(() => {
    setFilteredSourceStands(
      busStands.filter((stand) =>
        stand.name.toLowerCase().includes(sourceValue?.name.toLowerCase())
      )
    )
  }, [sourceValue, busStands])

  useEffect(() => {
    setFilteredDestinationStands(
      busStands.filter((stand) =>
        stand.name.toLowerCase().includes(destinationValue?.name.toLowerCase())
      )
    )
  }, [destinationValue, busStands])

  // Manual search triggered by form submission
  const handleSearch = (event: React.FormEvent) => {
   
    setLoading(true)
    event.preventDefault();
    fetchRoutes();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bus className="h-6 w-6" />
            <span className="text-xl font-bold">CityBus Tracker</span>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="flex flex-col justify-center md:flex-row gap-2 md:gap-4 items-center">
            <Combobox value={sourceValue} onChange={(value: Source) => setSourceValue(value)}>
              <div className="relative flex-grow">
                <Combobox.Input
                  className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter source station"
                  value={sourceValue?.name}
                  onChange={(event) => setSourceValue({ name: event.target.value })}
                />
                <Combobox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {filteredSourceStands.map((stand) => (
                    <Combobox.Option
                      key={stand.name}
                      value={stand}
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-white bg-blue-600' : 'text-gray-900'}`
                      }
                    >
                      {stand.name}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Combobox>

            <button
              type="button"
              className="bg-green-300 py-2 text-gray-800 font-bold px-4 rounded inline-flex items-center"
              onClick={() => {
                const temp = sourceValue;
                setSourceValue(destinationValue);
                setDestinationValue(temp);
                
              }}
            >
              <img src={img} alt="" className='h-4' />
            </button>

            <Combobox value={destinationValue} onChange={(value: Source) => setDestinationValue(value)}>
              <div className="relative flex-grow">
                <Combobox.Input
                  className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter destination station"
                  value={destinationValue?.name}
                  onChange={(event) => setDestinationValue({ name: event.target.value })}
                />
                <Combobox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {filteredDestinationStands.map((stand) => (
                    <Combobox.Option
                      key={stand.name}
                      value={stand}
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-white bg-blue-600' : 'text-gray-900'}`
                      }
                    >
                      {stand.name}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Combobox>

            <Button type="submit" className="bg-orange-500 flex justify-center w-[120px] hover:bg-orange-600 px-4 md:w-auto">
              <Search className="w-4 items-center hidden lg:block justify-center text-center mr-4" />
              Search Buses
            </Button>
          </form>
        </div>
      </div>

      <main className="flex-grow container my-0 mx-auto p-4">
        {availableBuses.length > 0 ? (
          Loading ? (
            <LoadingDots />
          ) : (
          <BusRouteInfo buses={availableBuses} />)
        ) : (
          Loading ? (
            <LoadingDots />
          ) : (
           correct? (<p className='text-2xl '>Add route to get bus</p>):(<p className="text-center text-red-500">No buses found for the selected route</p>)
          )
         
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
        <div className="container mx-auto text-center text-sm">
          © 2024 CityBus Tracker. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
