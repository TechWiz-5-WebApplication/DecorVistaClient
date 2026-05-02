const LatestStories = () => {
  const stories = [
    {
      title: "10 Small Space Decorating Tips",
      excerpt: "Maximize your small space with these clever decorating strategies...",
      date: "March 15, 2024",
      category: "Tips & Tricks",
      readTime: "5 min read"
    },
    {
      title: "Spring Color Trends 2024",
      excerpt: "Discover the hottest color palettes for spring decorating...",
      date: "March 12, 2024", 
      category: "Trends",
      readTime: "3 min read"
    },
    {
      title: "Before & After: Living Room Makeover",
      excerpt: "See how this dated living room was transformed into a modern oasis...",
      date: "March 10, 2024",
      category: "Makeovers",
      readTime: "7 min read"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get inspired with our latest design articles, tips, and home transformation stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center">
                <span className="text-4xl">📰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2">
                    {story.category}
                  </span>
                  <span>{story.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{story.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{story.date}</span>
                  <span className="text-blue-600 font-medium hover:text-blue-700">Read More →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestStories;
