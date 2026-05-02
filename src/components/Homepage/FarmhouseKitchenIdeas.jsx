const FarmhouseKitchenIdeas = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Farmhouse Kitchen Ideas</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-lg">Rustic Charm</h3>
                  <p className="text-gray-600">Natural wood and vintage accessories</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🤍</span>
                <div>
                  <h3 className="font-semibold text-lg">Neutral Palette</h3>
                  <p className="text-gray-600">Whites, creams, and warm grays</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🚿</span>
                <div>
                  <h3 className="font-semibold text-lg">Farmhouse Sink</h3>
                  <p className="text-gray-600">Classic apron-front design</p>
                </div>
              </div>
            </div>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Explore Kitchen Designs
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Farmhouse Kitchen Gallery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmhouseKitchenIdeas;
