const ShopByDepartment = () => {
  const departments = [
    { name: "Furniture", icon: "🛋️", description: "Sofas, chairs, tables & more" },
    { name: "Lighting", icon: "💡", description: "Chandeliers, lamps & fixtures" },
    { name: "Decor", icon: "🎨", description: "Art, mirrors & accessories" },
    { name: "Bedding", icon: "🛏️", description: "Sheets, pillows & comforters" },
    { name: "Kitchen", icon: "🍳", description: "Appliances & cookware" },
    { name: "Bath", icon: "🛁", description: "Towels, rugs & accessories" },
    { name: "Storage", icon: "📦", description: "Organizers & shelving" },
    { name: "Outdoor", icon: "🌳", description: "Patio & garden furniture" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Department</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find everything you need to transform your home, organized by category for easy shopping.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {dept.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
              <p className="text-sm text-gray-600">{dept.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Shop All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopByDepartment;
