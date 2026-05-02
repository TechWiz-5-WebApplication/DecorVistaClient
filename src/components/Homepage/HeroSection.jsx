const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Space
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover endless interior design inspiration, shop premium furniture, and connect with professional designers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Design Ideas
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Shop Products
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold">10K+</div>
            <div className="text-lg opacity-90">Design Ideas</div>
          </div>
          <div>
            <div className="text-4xl font-bold">5K+</div>
            <div className="text-lg opacity-90">Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold">500+</div>
            <div className="text-lg opacity-90">Professionals</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
