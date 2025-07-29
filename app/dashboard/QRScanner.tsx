
'use client';

import { useState } from 'react';

export default function QRScanner({ onScan, isWaiting }) {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      onScan('QR_CODE_DATA');
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-gray-900">QR Scanner</h2>
        <div className="flex items-center space-x-1">
          <div className={`w-1.5 h-1.5 rounded-full ${isWaiting ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
          <span className={`text-xs font-medium ${isWaiting ? 'text-yellow-600' : 'text-green-600'}`}>
            {isWaiting ? 'Waiting' : 'Ready'}
          </span>
        </div>
      </div>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
        <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
          {isScanning ? (
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <i className="ri-qr-scan-2-line text-2xl text-gray-400"></i>
          )}
        </div>
        
        <h3 className="text-sm font-medium text-gray-900 mb-1">
          {isScanning ? 'Scanning...' : 'Scan QR Code'}
        </h3>
        
        <p className="text-xs text-gray-500 mb-4">
          {isScanning ? 'Processing...' : 'Position QR code here'}
        </p>
        
        <button
          onClick={handleScan}
          disabled={isScanning}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
        >
          {isScanning ? 'Scanning...' : 'Start Scan'}
        </button>
      </div>
    </div>
  );
}
