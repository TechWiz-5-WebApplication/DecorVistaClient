const BrowsePhotosByStyle = () => {
  const styles = [
    { name: "Modern", image: "🏢", description: "Clean lines and minimalist design" },
    { name: "Traditional", image: "🏛️", description: "Classic and timeless elegance" },
    { name: "Farmhouse", image: "🌾", description: "Rustic charm and cozy comfort" },
    { name: "Industrial", image: "⚙️", description: "Urban and edgy aesthetics" },
    { name: "Scandinavian", image: "❄️", description: "Simple and functional beauty" },
    { name: "Bohemian", image: "🌻", description: "Eclectic and artistic flair" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Photos by Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center">
                <div className="text-6xl">{style.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{style.name}</h3>
                <p className="text-gray-600">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowsePhotosByStyle;
