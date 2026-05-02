const ModernBedroomIdeas = () => {
  const features = [
    {
      title: "Platform Beds",
      description: "Sleek, low-profile design for modern aesthetic",
      icon: "🛏️"
    },
    {
      title: "Neutral Colors", 
      description: "Calming palettes for better sleep",
      icon: "🎨"
    },
    {
      title: "Smart Storage",
      description: "Built-in solutions for clutter-free space",
      icon: "📦"
    },
    {
      title: "Ambient Lighting",
      description: "Layered lighting for perfect atmosphere",
      icon: "💡"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Modern Bedroom Ideas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create a serene and stylish bedroom retreat with these modern design concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Modern Bedroom Showcase</span>
          </div>
          
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
            
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Browse Bedroom Collections
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernBedroomIdeas;
