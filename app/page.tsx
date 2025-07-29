
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-lg flex items-center justify-center">
          <i className="ri-flight-takeoff-line text-white text-2xl"></i>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Drone Logistics</h1>
        <p className="text-gray-600 mb-8">Professional dashboard for sorting captains managing drone food delivery operations</p>
        
        <Link href="/dashboard">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            Access Dashboard
          </button>
        </Link>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Streamlined interface for QR scanning, parcel sorting, and delivery tracking
          </p>
        </div>
      </div>
    </div>
  );
}
