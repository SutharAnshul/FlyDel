
'use client';

import { useState } from 'react';

export default function ParcelInfo({ parcel, onConfirm, onWeightScan, onScan, isWaiting }) {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      onScan('QR_CODE_DATA');
    }, 2000);
  };

  if (!parcel) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Scan Parcel</h2>
          <div className="flex items-center space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span className="text-xs font-medium text-green-600">Ready</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              {isScanning ? (
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <i className="ri-qr-scan-2-line text-3xl text-gray-400"></i>
              )}
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {isScanning ? 'Scanning...' : 'Scan QR Code'}
            </h3>

            <p className="text-sm text-gray-500 mb-6">
              {isScanning ? 'Processing parcel information...' : 'Position QR code to scan parcel'}
            </p>

            <button
              onClick={handleScan}
              disabled={isScanning}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
            >
              {isScanning ? 'Scanning...' : 'Start Scan'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isWeightScanned = parcel.weightScanned;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Parcel Information</h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-700">Scanned</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className={`w-1.5 h-1.5 rounded-full ${isWaiting ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
            <span className={`text-xs font-medium ${isWaiting ? 'text-yellow-600' : 'text-green-600'}`}>
              {isWaiting ? 'Waiting' : 'Ready'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Order ID</label>
            <div className="bg-gray-50 px-3 py-2 rounded-lg">
              <span className="font-mono text-sm">{parcel.orderId}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
            <div className="bg-gray-50 px-3 py-2 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <i className="ri-scales-3-line text-gray-400 mr-2"></i>
                <span className="font-semibold">
                  {isWeightScanned ? `${parcel.weight} kg` : '--'}
                </span>
              </div>
              {!isWeightScanned && (
                <button
                  onClick={onWeightScan}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Scan Weight
                </button>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
            <div className="bg-gray-50 px-3 py-2 rounded-lg">
              <span className="text-sm">{parcel.source}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
            <div className="bg-blue-50 px-3 py-2 rounded-lg">
              <span className="text-sm font-semibold text-blue-700">{parcel.destination}</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium text-gray-900 mb-3">Delivery Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Customer:</span>
              <span className="text-sm font-medium">{parcel.customerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Address:</span>
              <span className="text-sm font-medium">{parcel.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Scanned at:</span>
              <span className="text-sm font-medium">{parcel.timestamp}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t">
        <button
          onClick={onConfirm}
          disabled={!isWeightScanned}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2 ${
            isWeightScanned
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <i className="ri-check-line text-lg"></i>
          <span>Confirm & Sort</span>
        </button>
      </div>
    </div>
  );
}
