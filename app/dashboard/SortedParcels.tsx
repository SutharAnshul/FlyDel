
'use client';

const mockSortedParcels = [
  { id: 'ORD-X1Y2Z3', customer: 'Kavya Nair', destination: 'Station 12', weight: '1.4kg', sortedAt: '14:25', operator: 'Ravi Kumar' },
  { id: 'ORD-A4B5C6', customer: 'Rohit Mehta', destination: 'Station 8', weight: '0.7kg', sortedAt: '14:20', operator: 'Sunita Singh' },
  { id: 'ORD-D7E8F9', customer: 'Anita Rao', destination: 'Station 15', weight: '1.9kg', sortedAt: '14:18', operator: 'Ravi Kumar' },
  { id: 'ORD-G0H1I2', customer: 'Vikram Shah', destination: 'Station 3', weight: '1.1kg', sortedAt: '14:15', operator: 'Meera Joshi' },
  { id: 'ORD-J3K4L5', customer: 'Deepika Reddy', destination: 'Station 7', weight: '0.9kg', sortedAt: '14:12', operator: 'Sunita Singh' }
];

export default function SortedParcels() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Sorted Parcels</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">{mockSortedParcels.length} parcels today</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            Export Data
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Destination
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Weight
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sorted At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Operator
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockSortedParcels.map((parcel) => (
              <tr key={parcel.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-mono text-sm font-medium text-gray-900">{parcel.id}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">{parcel.customer}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {parcel.destination}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {parcel.weight}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {parcel.sortedAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {parcel.operator}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded cursor-pointer">
                      <i className="ri-eye-line"></i>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded cursor-pointer">
                      <i className="ri-download-line"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing 1 to {mockSortedParcels.length} of {mockSortedParcels.length} results
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Previous</button>
          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 cursor-pointer">1</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Next</button>
        </div>
      </div>
    </div>
  );
}
