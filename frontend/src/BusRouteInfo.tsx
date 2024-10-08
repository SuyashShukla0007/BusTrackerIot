import { Card, CardContent, CardHeader, CardTitle } from "../@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../@/components/ui/accordion";
import { Bus, Clock, CheckCircle2, MapPin } from 'lucide-react';

interface BusStop {
  busStandName: string;
  usualArrivalTime: string;
  arrivalTime: string;
  departureTime: string;
  usualDepartureTime: string;
}

interface Bus {
  _id: string;
  busName: string;
  busNumber: string;
  driver: string;
  driverNumber: string;
  busStops: BusStop[];
  currentStopIndex: number;
}

interface BusRouteInfoProps {
  buses: Bus[];
}

export default function BusRouteInfo({ buses }: BusRouteInfoProps) {
  const formatTime = (dateString: string,check:string) => {

    if (dateString == null) {
     
    if(check=="arrived"){
      return "Yet to arrive";
  }

  else if(check=="departed"){
    return "Yet to depart";
  }

}


    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Buses</h1>
      {buses.map((bus) => (
        <Card key={bus._id} className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bus className="mr-2" />
              {bus.busName} - {bus.busNumber}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">Driver: {bus.driver} | Contact: {bus.driverNumber}</p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="stops">
                <AccordionTrigger>View Bus Stops</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/3">
                      <h3 className="text-lg font-semibold mb-2">Route</h3>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <ul className="space-y-2">
                          {bus.busStops.map((stop, index) => (
                            <li key={index} className="flex items-center">
                              <div className="relative">
                                {stop.arrivalTime ? (
                                  <CheckCircle2 className={`size={24} ${stop.departureTime ? 'text-green-500' : 'text-red-700'}`} />
                                ) : (
                                  <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                                )}
                                {index < bus.busStops.length - 1 && (
                                  <div className="absolute top-6 left-3 w-0.5 h-6 bg-gray-300"></div>
                                )}
                              </div>
                              <div className="ml-2">
                                <span className={`font-medium ${index <= bus.currentStopIndex ? "text-green-500" : ""}`}>
                                  {stop.busStandName}
                                </span>
                                <div className="text-xs text-gray-500">
                                  {formatTime(stop.arrivalTime,"arrived")} - {formatTime(stop.departureTime,"departed")}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <Table>
                      <TableHeader>
                        <TableRow>
                        <TableHead>Bus Stand</TableHead>
                        <TableHead>Usual Arrival Time</TableHead>
                        <TableHead>Usual Departure Time</TableHead>
                        <TableHead>Arrival Time</TableHead>
                        <TableHead>Departure Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bus.busStops.map((stop, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                          <div className="flex items-center">
                            <MapPin className="mr-2" size={16} />
                            {stop.busStandName}
                          </div>
                          </TableCell>
                          <TableCell>
                          <Clock className="inline mr-1" size={16} />
                          {formatTime(stop.usualArrivalTime,"")}
                          </TableCell>
                          <TableCell>
                          <Clock className="inline mr-1" size={16} />
                          {formatTime(stop.usualDepartureTime,"")}
                          </TableCell>
                          <TableCell>
                          <Clock className="inline mr-1" size={16} />
                          {formatTime(stop.arrivalTime,"arrived")}
                          </TableCell>
                          <TableCell>
                          <Clock className="inline mr-1" size={16} />
                          {formatTime(stop.departureTime,"departed")}
                          </TableCell>
                        </TableRow>
                        ))}
                      </TableBody>
                      </Table>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
