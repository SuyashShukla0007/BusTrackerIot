// import { Button } from "../@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "../@/components/ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../@/components/ui/table"

// const stations = [
//   { name: 'Lokmanyatilak T', distance: 'Source', arrival: '00:35', departure: '03:06', delay: '2hr 31min', platform: '2' },
//   { name: 'Thane', distance: '18 km', arrival: '00:57', departure: '03:43', delay: '2hr 43min', platform: '7' },
//   { name: 'Kalyan Jn', distance: '38 km', arrival: '01:17', departure: '04:12', delay: '2hr 52min', platform: '4' },
//   { name: 'Nashik Road', distance: '172 km', arrival: '03:55', departure: '06:36', delay: '2hr 36min', platform: '2' },
// ]

// export default function BusRoute() {
//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <Card className="mb-6 bg-purple-800 text-white">
//         <CardContent className="p-4 flex justify-between items-center">
//           <p className="text-lg">Check train running status & share your live location from the ixigo app</p>
//           <Button className="bg-orange-500 hover:bg-orange-600">DOWNLOAD</Button>
//         </CardContent>
//       </Card>

//       <h1 className="text-2xl font-bold mb-2">22538 Kushinagar Exp Running Status</h1>
//       <p className="mb-4 text-sm">
//         Get 22538 Kushinagar Exp train live running status. 22538 Kushinagar Exp train runs from{' '}
//         <span className="text-orange-500 font-semibold">LOKMANYATILAK T (LTT) TO GORAKHPUR JN (GKP)</span> on
//         Mon, Tue, Wed, Thu, Fri, Sat, Sun. 22538 train covers 43 stations. The departure time for 22538 Kushinagar Exp from Lokmanyatilak T is 03:06. The
//         arrival time to Gorakhpur Jn is 11:06. The total distance covered by Kushinagar Exp is 1695 Km on its route. Check real-time{' '}
//         <span className="text-orange-500 font-semibold">TRAIN RUNNING STATUS</span> of other trains from Lokmanyatilak T to Gorakhpur Jn. Get free cancellation on{' '}
//         <span className="text-orange-500 font-semibold">TRAIN TICKET BOOKING</span> of{' '}
//         <span className="text-orange-500 font-semibold">KUSHINAGAR EXP - 22538</span>.
//       </p>

//       <div className="flex mb-4 space-x-2">
//         <Button variant="outline">Tuesday<br/>24-09-2024</Button>
//         <Button variant="outline">Yesterday<br/>25-09-2024</Button>
//         <Button className="bg-orange-500 hover:bg-orange-600">Today<br/>26-09-2024</Button>
//         <Button variant="outline">Tomorrow<br/>27-09-2024</Button>
//       </div>

//       <Card className="mb-6">
//         <CardContent className="p-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-red-600 font-semibold">Overall delay: 2hr 25min</p>
//               <p>Crossed Chalisgaon Jn at 08:32</p>
//             </div>
//             <Button variant="outline" className="text-orange-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
//               </svg>
//               Refresh
//             </Button>
//           </div>
//           <p className="text-sm text-gray-500 mt-2">Updated 42min ago</p>
//         </CardContent>
//       </Card>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Station</TableHead>
//             <TableHead>Arrival Status</TableHead>
//             <TableHead>Departure Status</TableHead>
//             <TableHead>Delay</TableHead>
//             <TableHead>PF/Halt</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {stations.map((station, index) => (
//             <TableRow key={index}>
//               <TableCell>
//                 <div className="font-medium text-orange-500">{station.name}</div>
//                 <div className="text-sm text-gray-500">{station.distance}</div>
//               </TableCell>
//               <TableCell>
//                 <div>{station.arrival}</div>
//                 <div className="text-sm text-gray-500">Actual/Scheduled</div>
//               </TableCell>
//               <TableCell>
//                 <div>{station.departure}</div>
//                 <div className="text-sm text-gray-500">Actual/Scheduled</div>
//               </TableCell>
//               <TableCell className="text-red-600">{station.delay}</TableCell>
//               <TableCell>{station.platform}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   )
// }



import React from 'react'
import { Button } from "../@/components/ui/button"
import { Card, CardContent } from "../@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../@/components/ui/table"
import { Bus, Home, Phone, MapPin, Menu, X } from 'lucide-react'

const stops = [
  { name: 'Central Station', distance: 'Start', arrival: '10:00', departure: '10:05', delay: '0 min' },
  { name: 'Downtown', distance: '5 km', arrival: '10:15', departure: '10:17', delay: '2 min' },
  { name: 'University', distance: '8 km', arrival: '10:30', departure: '10:32', delay: '5 min' },
  { name: 'Shopping Mall', distance: '12 km', arrival: '10:45', departure: '10:47', delay: '3 min' },
  { name: 'Airport', distance: '20 km', arrival: '11:05', departure: '11:10', delay: '0 min' },
]

export default function BusRoute() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bus className="h-6 w-6" />
            <span className="text-xl font-bold">CityBus Tracker</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-blue-200">Home</a>
            <a href="#" className="hover:text-blue-200">Routes</a>
            <a href="#" className="hover:text-blue-200">Schedule</a>
            <a href="#" className="hover:text-blue-200">Contact</a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 text-white">
          <a href="#" className="block py-2 px-4 hover:bg-blue-600">Home</a>
          <a href="#" className="block py-2 px-4 hover:bg-blue-600">Routes</a>
          <a href="#" className="block py-2 px-4 hover:bg-blue-600">Schedule</a>
          <a href="#" className="block py-2 px-4 hover:bg-blue-600">Contact</a>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <Card className="mb-6 bg-blue-600 text-white">
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
              <Button variant="outline" className="text-orange-500 mt-2 md:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Refresh
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">Updated 2 min ago</p>
          </CardContent>
        </Card>

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
                    <div className="text-sm text-gray-500">{stop.distance}</div>
                  </TableCell>
                  <TableCell>{stop.arrival}</TableCell>
                  <TableCell>{stop.departure}</TableCell>
                  <TableCell className={stop.delay === '0 min' ? 'text-green-600' : 'text-red-600'}>{stop.delay}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
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