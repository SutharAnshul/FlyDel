
'use client';

import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import ParcelInfo from './ParcelInfo';
import StatusNotifications from './StatusNotifications';
import NavigationTabs from './NavigationTabs';
import IncomingParcels from './IncomingParcels';
import SortedParcels from './SortedParcels';
import OrderStatus from './OrderStatus';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('incoming');
  const [currentParcel, setCurrentParcel] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const handleQRScan = (qrData) => {
    const indianNames = ['Rajesh Kumar', 'Priya Sharma', 'Amit Patel', 'Sneha Gupta', 'Arjun Singh', 'Kavya Nair', 'Rohit Mehta', 'Anita Rao'];
    const indianAddresses = [
      '12/A, MG Road, Bangalore 560001',
      'Flat 3B, Shanti Apartments, Pune 411001',
      '45, Gandhi Nagar, Delhi 110031',
      'Villa 7, Palm Heights, Mumbai 400050',
      '23, Anna Salai, Chennai 600002',
      '8/C, Park Street, Kolkata 700016'
    ];

    const mockParcel = {
      orderId: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      weight: (Math.random() * 2 + 0.5).toFixed(2),
      source: 'Central Kitchen',
      destination: `Station ${Math.floor(Math.random() * 20) + 1}`,
      customerName: indianNames[Math.floor(Math.random() * indianNames.length)],
      address: indianAddresses[Math.floor(Math.random() * indianAddresses.length)],
      timestamp: new Date().toLocaleTimeString(),
      weightScanned: false
    };

    setCurrentParcel(mockParcel);
    addNotification('Parcel scanned successfully', 'success');
  };

  const handleWeightScan = () => {
    if (currentParcel) {
      const updatedParcel = {
        ...currentParcel,
        weightScanned: true
      };
      setCurrentParcel(updatedParcel);
      addNotification(`Weight scanned: ${currentParcel.weight} kg`, 'success');
    }
  };

  const addNotification = (message, type) => {
    const notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toLocaleTimeString()
    };
    setNotifications(prev => [notification, ...prev.slice(0, 4)]);
  };

  const handleConfirmSort = () => {
    if (currentParcel && currentParcel.weightScanned) {
      addNotification(`Parcel ${currentParcel.orderId} sorted to ${currentParcel.destination}`, 'success');
      setCurrentParcel(null);
    }
  };

  const isWaiting = currentParcel && !currentParcel.weightScanned;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto p-6">
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'incoming' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6 h-[calc(100vh-180px)]">
            <div className="lg:col-span-1">
              <IncomingParcels />
            </div>
            <div className="lg:col-span-2">
              <ParcelInfo 
                parcel={currentParcel} 
                onConfirm={handleConfirmSort} 
                onWeightScan={handleWeightScan}
                onScan={handleQRScan}
                isWaiting={isWaiting}
              />
            </div>
            <div className="lg:col-span-1 space-y-6">
              <StatusNotifications notifications={notifications} />
            </div>
          </div>
        )}

        {activeTab === 'sorted' && <SortedParcels />}
        {activeTab === 'status' && <OrderStatus />}
      </div>
    </div>
  );
}
