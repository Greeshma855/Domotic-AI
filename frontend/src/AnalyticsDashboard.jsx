import React from 'react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  ArrowUp, 
  ArrowDown, 
  Users, 
  Activity, 
  Clock, 
  Battery
} from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const AnalyticsDashboard = () => {
  // Sample data for charts
  const monthlyData = [
    { name: 'Jan', usage: 2400, efficiency: 1400, cost: 2400 },
    { name: 'Feb', usage: 1398, efficiency: 2210, cost: 2210 },
    { name: 'Mar', usage: 9800, efficiency: 2290, cost: 2290 },
    { name: 'Apr', usage: 3908, efficiency: 2000, cost: 2000 },
    { name: 'May', usage: 4800, efficiency: 2181, cost: 2181 },
    { name: 'Jun', usage: 3800, efficiency: 2500, cost: 2500 },
    { name: 'Jul', usage: 4300, efficiency: 2100, cost: 2100 },
  ];

  const hourlyUsage = [
    { time: '00:00', value: 30 },
    { time: '04:00', value: 25 },
    { time: '08:00', value: 55 },
    { time: '12:00', value: 85 },
    { time: '16:00', value: 75 },
    { time: '20:00', value: 45 },
    { time: '23:59', value: 35 },
  ];

  const deviceStats = [
    {
      title: 'Active Users',
      value: '2,345',
      change: '+14%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'System Uptime',
      value: '99.9%',
      change: '+0.5%',
      trend: 'up',
      icon: Activity
    },
    {
      title: 'Avg Response',
      value: '1.2s',
      change: '-0.3s',
      trend: 'down',
      icon: Clock
    },
    {
      title: 'Energy Usage',
      value: '84%',
      change: '-2%',
      trend: 'down',
      icon: Battery
    }
  ];

  const roomEfficiency = [
    { room: 'Living Room', efficiency: 85 },
    { room: 'Kitchen', efficiency: 75 },
    { room: 'Bedroom', efficiency: 90 },
    { room: 'Office', efficiency: 70 },
    { room: 'Bathroom', efficiency: 95 },
  ];

  return (
    <div className="p-6 bg-blue-50/30 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
        <p className="text-gray-600">Monitor your smart home performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {deviceStats.map((stat) => (
          <Card key={stat.title}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                  <div className={`flex items-center ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                    <span className="text-sm ml-1">{stat.change}</span>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-900" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Monthly Usage Trends */}
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-4">Monthly Usage Trends</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="#1e3a8a" 
                    fill="#dbeafe" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Daily Energy Distribution */}
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-4">Daily Energy Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyUsage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1e3a8a" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Room Efficiency */}
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-4">Room Efficiency</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={roomEfficiency}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="room" />
                  <YAxis />
                  <Tooltip />
                  <Bar 
                    dataKey="efficiency" 
                    fill="#1e3a8a" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Efficiency Metrics */}
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-4">Efficiency Metrics</h3>
            <div className="space-y-4">
              {roomEfficiency.map((room) => (
                <div key={room.room} className="flex items-center">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{room.room}</span>
                      <span className="text-sm font-medium text-gray-700">{room.efficiency}%</span>
            `````        </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-900 rounded-full h-2" 
                        style={{ width: `${room.efficiency}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;