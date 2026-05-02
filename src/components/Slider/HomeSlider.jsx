const HomeSlider = () => {
  return (
    <div className="relative h-96 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to DecorVista
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Your Ultimate Interior Design Destination
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
