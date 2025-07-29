'use client';

const mockIncomingParcels = [
  { id: 'ORD-A1B2C3', customer: 'Rajesh Kumar', weight: '1.2kg', eta: '2 mins', priority: 'high' },
  { id: 'ORD-D4E5F6', customer: 'Priya Sharma', weight: '0.8kg', eta: '5 mins', priority: 'normal' },
  { id: 'ORD-G7H8I9', customer: 'Amit Patel', weight: '1.5kg', eta: '7 mins', priority: 'high' },
  { id: 'ORD-J0K1L2', customer: 'Sneha Gupta', weight: '0.9kg', eta: '12 mins', priority: 'normal' },
  { id: 'ORD-M3N4O5', customer: 'Arjun Singh', weight: '1.8kg', eta: '15 mins', priority: 'low' }
];

export default function IncomingParcels() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Incoming Parcels</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {mockIncomingParcels.length} pending
        </span>
      </div>

      <div className="max-h-[calc(100vh-350px)] overflow-y-auto space-y-3 mb-4 flex-1">
        {mockIncomingParcels.map((parcel) => (
          <div key={parcel.id} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-medium text-gray-900">{parcel.id}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                parcel.priority === 'high' ? 'bg-red-100 text-red-800' :
                parcel.priority === 'normal' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {parcel.priority}
              </span>
            </div>

            <p className="text-sm font-medium text-gray-900 mb-1">{parcel.customer}</p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{parcel.weight}</span>
              <span>ETA: {parcel.eta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-gray-500">Next scan in queue:</span>
          <span className="font-medium text-gray-900">2 minutes</span>
        </div>

        <button className="w-full py-2 text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer whitespace-nowrap">
          View all parcels
        </button>
      </div>
    </div>
  );
}
