const BathSale = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Transform Your Bathroom
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover luxury bathroom fixtures and accessories. From modern vanities to elegant faucets.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Shop Bathroom Collection
            </button>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Bathroom Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BathSale;
