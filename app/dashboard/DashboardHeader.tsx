
'use client';

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/eaf7cb2643f5e7cb5d1f626f5ba59c2d/4e592efc8ed1dc148a89138cab4fa6f2.png" 
                alt="FlyDel Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FlyDel Drone Logistics</h1>
              <p className="text-sm text-gray-500">Sorting Captain Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-700">Station Active</span>
            </div>
            
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Captain Sarah Shah</p>
              <p className="text-xs text-gray-500">Station ID: ST-B07</p>
            </div>
            
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <i className="ri-user-line text-gray-600 text-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
