
'use client';

export default function StatusNotifications({ notifications }) {
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return 'ri-check-line text-green-600';
      case 'error':
        return 'ri-error-warning-line text-red-600';
      case 'warning':
        return 'ri-alert-line text-yellow-600';
      default:
        return 'ri-information-line text-blue-600';
    }
  };

  const getNotificationBg = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Status Notifications</h2>
      
      <div className="max-h-[calc(100vh-350px)] overflow-y-auto space-y-3 mb-4 flex-1">
        {notifications.length === 0 ? (
          <div className="text-center py-8">
            <i className="ri-notification-off-line text-3xl text-gray-300 mb-2"></i>
            <p className="text-gray-500 text-sm">No notifications</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border ${getNotificationBg(notification.type)}`}
            >
              <div className="flex items-start space-x-3">
                <i className={`${getNotificationIcon(notification.type)} text-lg mt-0.5`}></i>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {notifications.length > 0 && (
        <button className="w-full py-2 text-sm text-blue-600 hover:text-blue-800 font-medium border-t border-gray-100 pt-3 cursor-pointer whitespace-nowrap">
          Show all notifications
        </button>
      )}
    </div>
  );
}
