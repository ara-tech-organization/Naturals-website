
import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Map = () => {
  const branches = [
    {
      id: 1,
      name: "Main Branch",
      address: "123 Big Street, Thanjavur - 613001",
      phone: "+91 90870 00049",
      hours: "9:00 AM - 8:00 PM",
      position: { top: '40%', left: '45%' }
    },
    {
      id: 2,
      name: "Anna Nagar Branch",
      address: "45 Anna Nagar Main Road, Thanjavur - 613007",
      phone: "+91 87654 32109",
      hours: "9:30 AM - 7:30 PM",
      position: { top: '25%', left: '35%' }
    },
    {
      id: 3,
      name: "Gandhiji Road Branch",
      address: "78 Gandhiji Road, Thanjavur - 613009",
      phone: "+91 76543 21098",
      hours: "10:00 AM - 7:00 PM",
      position: { top: '55%', left: '55%' }
    },
    {
      id: 4,
      name: "Medical College Road",
      address: "156 Medical College Road, Thanjavur - 613004",
      phone: "+91 90870 00049",
      hours: "9:00 AM - 8:00 PM",
      position: { top: '35%', left: '25%' }
    },
    {
      id: 5,
      name: "East Main Street",
      address: "234 East Main Street, Thanjavur - 613005",
      phone: "+91 90870 00049",
      hours: "8:30 AM - 7:30 PM",
      position: { top: '50%', left: '65%' }
    }
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-lg overflow-hidden">
      {/* Map Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      
      {/* Map Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="text-primary">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Thanjavur Label */}
      <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-lg">
        <h3 className="font-bold text-primary flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          Thanjavur City
        </h3>
      </div>

      {/* Branch Markers */}
      {branches.map((branch) => (
        <div
          key={branch.id}
          className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: branch.position.top, left: branch.position.left }}
        >
          {/* Marker Pin */}
          <div className="relative">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="absolute top-8 w-1 h-4 bg-primary left-1/2 transform -translate-x-1/2"></div>
          </div>

          {/* Hover Card */}
          <Card className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-64 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-xl">
            <h4 className="font-bold text-gray-900 mb-2">{branch.name}</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{branch.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>{branch.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{branch.hours}</span>
              </div>
            </div>
            <Button size="sm" className="w-full mt-3 gradient-bg text-white hover:opacity-90">
              Get Directions
            </Button>
          </Card>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-gray-700">Naturals Branch</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Hover over markers for details</p>
      </div>
    </div>
  );
};

export default Map;
