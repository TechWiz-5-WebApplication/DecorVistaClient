const PhotosForYou = () => {
  const photos = [
    { category: "Living Room", count: "2.1K photos", trend: "Trending" },
    { category: "Kitchen", count: "1.8K photos", trend: "Popular" },
    { category: "Bedroom", count: "1.5K photos", trend: "New" },
    { category: "Bathroom", count: "900 photos", trend: "Hot" },
    { category: "Dining Room", count: "600 photos", trend: "Featured" },
    { category: "Home Office", count: "400 photos", trend: "Rising" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Photos For You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Personalized design inspiration based on your interests and recent activity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="bg-gradient-to-br from-indigo-100 to-pink-100 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏠</div>
                  <h3 className="text-xl font-semibold">{photo.category}</h3>
                </div>
              </div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  {photo.trend}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="text-white">
                  <h3 className="font-semibold">{photo.category}</h3>
                  <p className="text-sm opacity-90">{photo.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotosForYou;
