
'use client';

const mockErrorParcels = [
  { id: 'ORD-E1R2T3', error: 'Overweight (2.5kg)', timestamp: '14:30', severity: 'high' },
  { id: 'ORD-Y4U5I6', error: 'Duplicate QR Code', timestamp: '14:15', severity: 'medium' },
  { id: 'ORD-O7P8A9', error: 'Invalid destination', timestamp: '13:45', severity: 'high' },
  { id: 'ORD-S0D1F2', error: 'Damaged packaging', timestamp: '13:22', severity: 'low' }
];

export default function ErrorParcels() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Error Parcels</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">{mockErrorParcels.length} errors today</span>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer">
            Clear Resolved
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {mockErrorParcels.map((parcel) => (
          <div key={parcel.id} className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className={`w-3 h-3 rounded-full mt-1 ${
                  parcel.severity === 'high' ? 'bg-red-500' :
                  parcel.severity === 'medium' ? 'bg-yellow-500' : 'bg-orange-500'
                }`}></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-mono text-sm font-medium">{parcel.id}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      parcel.severity === 'high' ? 'bg-red-100 text-red-800' :
                      parcel.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {parcel.severity}
                    </span>
                  </div>
                  <p className="text-sm text-red-700 font-medium mb-1">{parcel.error}</p>
                  <p className="text-xs text-red-600">Occurred at {parcel.timestamp}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-100 rounded cursor-pointer">
                  <i className="ri-edit-line"></i>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-100 rounded cursor-pointer">
                  <i className="ri-check-line"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <i className="ri-lightbulb-line text-yellow-600 text-lg"></i>
          <div>
            <h3 className="text-sm font-medium text-yellow-800">Quick Actions</h3>
            <p className="text-xs text-yellow-700 mt-1">
              Contact supervisor for overweight parcels • Rescan duplicate codes • Verify destination codes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
