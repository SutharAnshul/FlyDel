
'use client';

const tabs = [
  { id: 'incoming', label: 'Incoming Parcels', icon: 'ri-inbox-line' },
  { id: 'sorted', label: 'Sorted', icon: 'ri-check-line' },
  { id: 'status', label: 'Order Status', icon: 'ri-truck-line' }
];

export default function NavigationTabs({ activeTab, onTabChange }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <nav className="flex space-x-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium text-sm transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <i className={`${tab.icon} text-lg`}></i>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
