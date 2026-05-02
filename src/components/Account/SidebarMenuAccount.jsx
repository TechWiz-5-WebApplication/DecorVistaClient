const SidebarMenuAccount = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Account Menu</h3>
      <nav className="space-y-2">
        <a href="#" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">Profile</a>
        <a href="#" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">Orders</a>
        <a href="#" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">Settings</a>
        <a href="#" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">Logout</a>
      </nav>
    </div>
  );
};

export default SidebarMenuAccount;
