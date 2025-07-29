
'use client';

import { useState } from 'react';

const mockOrders = [
  { id: 'ORD-A1B2C3', status: 'in-transit', customer: 'Rajesh Kumar', eta: '15 mins', route: 'Station 5 → Station 12 → Customer', onTime: true },
  { id: 'ORD-D4E5F6', status: 'delivered', customer: 'Priya Sharma', eta: 'Completed', route: 'Station 3 → Customer', onTime: true },
  { id: 'ORD-G7H8I9', status: 'sorting', customer: 'Amit Patel', eta: '25 mins', route: 'Station 8 → Station 15 → Customer', onTime: false },
  { id: 'ORD-J0K1L2', status: 'pending', customer: 'Sneha Gupta', eta: '35 mins', route: 'Station 1 → Station 9 → Customer', onTime: true },
  { id: 'ORD-M3N4O5', status: 'in-transit', customer: 'Arjun Singh', eta: '18 mins', route: 'Station 7 → Station 14 → Customer', onTime: false }
];

export default function OrderStatus() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'in-transit':
        return 'bg-blue-100 text-blue-800';
      case 'sorting':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Order Status Tracking</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
          >
            <option value="all">All Status</option>
            <option value="delivered">Delivered</option>
            <option value="in-transit">In Transit</option>
            <option value="sorting">Sorting</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-sm font-medium">{order.id}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status.replace('-', ' ')}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">ETA: {order.eta}</div>
                {order.status !== 'delivered' && (
                  <div className="mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.onTime ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {order.onTime ? 'On time' : 'Running late'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Customer</p>
                <p className="text-sm font-medium">{order.customer}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Route</p>
                <p className="text-sm text-gray-700">{order.route}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <i className="ri-map-pin-line text-gray-400"></i>
                <span className="text-xs text-gray-500">Real-time tracking active</span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                Track Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <i className="ri-search-line text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">No orders found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
