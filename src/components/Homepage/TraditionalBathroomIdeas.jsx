const TraditionalBathroomIdeas = () => {
  const features = [
    {
      title: "Clawfoot Tubs",
      description: "Classic freestanding bathtubs for luxury",
      icon: "🛁"
    },
    {
      title: "Marble Finishes", 
      description: "Elegant natural stone surfaces",
      icon: "⚪"
    },
    {
      title: "Vintage Fixtures",
      description: "Brass and bronze hardware",
      icon: "🚿"
    },
    {
      title: "Rich Colors",
      description: "Deep blues, greens, and burgundy",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Traditional Bathroom Ideas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create timeless elegance with classic bathroom design elements and luxury finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Traditional Bathrooms
            </button>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Traditional Bathroom Gallery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalBathroomIdeas;
