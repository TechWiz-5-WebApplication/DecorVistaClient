const ContemporaryLivingIdeas = () => {
  const ideas = [
    {
      title: "Minimalist Living Room",
      description: "Clean lines and neutral colors create a peaceful space",
      image: "🏠"
    },
    {
      title: "Open Concept Design",
      description: "Seamless flow between living and dining areas",
      image: "🏡"
    },
    {
      title: "Natural Light Focus",
      description: "Large windows and light colors maximize brightness",
      image: "☀️"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contemporary Living Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg h-64 mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <span className="text-6xl">{idea.image}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
              <p className="text-gray-600">{idea.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View More Living Room Ideas
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContemporaryLivingIdeas;
