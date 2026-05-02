const SummerLivingIdeas = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Summer Living Ideas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Brighten your home with fresh summer decorating ideas and light, airy designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🌞</div>
            <h3 className="text-lg font-semibold mb-2">Bright Colors</h3>
            <p className="text-gray-600">Add pops of yellow and orange</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-lg font-semibold mb-2">Indoor Plants</h3>
            <p className="text-gray-600">Bring nature inside your home</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🪟</div>
            <h3 className="text-lg font-semibold mb-2">Light Fabrics</h3>
            <p className="text-gray-600">Linen and cotton for summer feel</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">❄️</div>
            <h3 className="text-lg font-semibold mb-2">Cool Spaces</h3>
            <p className="text-gray-600">Create refreshing environments</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
            Explore Summer Decor
          </button>
        </div>
      </div>
    </section>
  );
};

export default SummerLivingIdeas;
