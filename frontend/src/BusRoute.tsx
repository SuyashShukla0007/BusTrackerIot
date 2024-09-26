import React, { useState } from 'react'
import { Button } from "../@/components/ui/button"
import { Card, CardContent } from "../@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../@/components/ui/table"
import { Input } from "../@/components/ui/input"
import { Bus, Home, Phone, MapPin, Menu, X, Search, CheckCircle2 } from 'lucide-react'

const stops = [
  { name: 'Central Station', distance: 'Start', arrival: '10:00', departure: '10:05', delay: '0 min', passed: true },
  { name: 'Downtown', distance: '5 km', arrival: '10:15', departure: '10:17', delay: '2 min', passed: true },
  { name: 'University', distance: '8 km', arrival: '10:30', departure: '10:32', delay: '5 min', passed: true },
  { name: 'Shopping Mall', distance: '12 km', arrival: '10:45', departure: '10:47', delay: '3 min', passed: false },
  { name: 'Airport', distance: '20 km', arrival: '11:05', departure: '11:10', delay: '0 min', passed: false },
]

export default function BusRoute() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchValue)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bus className="h-6 w-6" />
            <span className="text-xl font-bold">CityBus Tracker</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-primary-foreground/80">Home</a>
            <a href="#" className="hover:text-primary-foreground/80">Routes</a>
            <a href="#" className="hover:text-primary-foreground/80">Schedule</a>
            <a href="#" className="hover:text-primary-foreground/80">Contact</a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-primary/90 text-primary-foreground">
          <a href="#" className="block py-2 px-4 hover:bg-primary/80">Home</a>
          <a href="#" className="block py-2 px-4 hover:bg-primary/80">Routes</a>
          <a href="#" className="block py-2 px-4 hover:bg-primary/80">Schedule</a>
          <a href="#" className="block py-2 px-4 hover:bg-primary/80">Contact</a>
        </div>
      )}

      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter bus number or name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="bg-orange-500 flex w-[6vw] hover:bg-orange-600">
              <Search className="h-4 w-4 mr-2" />
              <p>Search</p>
            </Button>
          </form>
        </div>
      </div>

      <main className="flex-grow container mx-auto p-4">
        <Card className="mb-6 bg-primary text-primary-foreground">
          <CardContent className="p-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg mb-2 md:mb-0">Check bus running status & share your live location</p>
            <Button className="bg-orange-500 hover:bg-orange-600">DOWNLOAD APP</Button>
          </CardContent>
        </Card>

        <h1 className="text-2xl font-bold mb-2">Route 101 Express Bus Running Status</h1>
        <p className="mb-4 text-sm">
          Get Route 101 Express Bus live running status. This bus runs from{' '}
          <span className="text-orange-500 font-semibold">CENTRAL STATION TO AIRPORT</span> daily.
          The bus covers 5 major stops. The departure time from Central Station is 10:00 AM.
          The arrival time at the Airport is 11:10 AM. Check real-time{' '}
          <span className="text-orange-500 font-semibold">BUS RUNNING STATUS</span> below.
        </p>

        <div className="flex flex-wrap mb-4 space-x-2">
          <Button variant="outline" className="mb-2">Yesterday</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 mb-2">Today</Button>
          <Button variant="outline" className="mb-2">Tomorrow</Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p className="text-green-600 font-semibold">On Time</p>
                <p>Last Stop: Downtown</p>
              </div>
              <Button variant="outline" className="text-orange-500 mt-2 md:mt-0 flex w-[8vw]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                <p>Refresh</p>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Updated 2 min ago</p>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="md:w-1/3">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Route Map</h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-1 bg-orange-500"></div>
                  {stops.map((stop, index) => (
                    <div key={index} className="flex items-center mb-8 relative">
                      <div className={`w-8 h-8 rounded-full border-4 ${stop.passed ? 'bg-orange-500 border-white' : 'bg-white border-orange-500'} z-10 flex items-center justify-center`}>
                        {stop.passed && <CheckCircle2 className="w-5 h-5 text-white" />}
                      </div>
                      <div className="ml-4">
                        <p className={`font-semibold ${stop.passed ? 'text-orange-500' : 'text-foreground'}`}>{stop.name}</p>
                        <p className="text-sm text-muted-foreground">{stop.distance}</p>
                      </div>
                      {index < stops.length - 1 && (
                        <div className="absolute left-4 top-8 bottom-0 w-1 bg-orange-500 opacity-25"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-2/3">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Stop Details</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Stop</TableHead>
                        <TableHead>Arrival</TableHead>
                        <TableHead>Departure</TableHead>
                        <TableHead>Delay</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stops.map((stop, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div className="font-medium text-orange-500">{stop.name}</div>
                            <div className="text-sm text-muted-foreground">{stop.distance}</div>
                          </TableCell>
                          <TableCell>{stop.arrival}</TableCell>
                          <TableCell>{stop.departure}</TableCell>
                          <TableCell className={stop.delay === '0 min' ? 'text-green-600' : 'text-red-600'}>{stop.delay}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">CityBus Tracker</h2>
            <p className="text-sm">Providing real-time bus tracking services</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <a href="#" className="flex items-center mb-2 md:mb-0"><Home className="mr-2 h-4 w-4" /> Home</a>
            <a href="#" className="flex items-center mb-2 md:mb-0"><MapPin className="mr-2 h-4 w-4" /> Routes</a>
            <a href="#" className="flex items-center"><Phone className="mr-2 h-4 w-4" /> Contact</a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm">
          © 2024 CityBus Tracker. All rights reserved.
        </div>
      </footer>
    </div>
  )
}