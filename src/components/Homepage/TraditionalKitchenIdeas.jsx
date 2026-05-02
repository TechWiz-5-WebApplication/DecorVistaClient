const TraditionalKitchenIdeas = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Traditional Kitchen Showcase</span>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Traditional Kitchen Ideas</h2>
            <p className="text-gray-600 mb-6">
              Embrace timeless design with classic kitchen elements that never go out of style.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h3 className="font-semibold text-lg">Raised Panel Cabinets</h3>
                  <p className="text-gray-600">Classic door styles in rich wood tones</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🌟</span>
                <div>
                  <h3 className="font-semibold text-lg">Crown Molding</h3>
                  <p className="text-gray-600">Elegant finishing touches</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🏺</span>
                <div>
                  <h3 className="font-semibold text-lg">Natural Materials</h3>
                  <p className="text-gray-600">Granite countertops and hardwood floors</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">💎</span>
                <div>
                  <h3 className="font-semibold text-lg">Classic Hardware</h3>
                  <p className="text-gray-600">Brushed brass and oil-rubbed bronze</p>
                </div>
              </div>
            </div>
            
            <button className="mt-6 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
              View Traditional Kitchens
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalKitchenIdeas;
