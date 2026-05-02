import React, { useState } from "react";
import { FaHeart, FaBookmark, FaSearch } from "react-icons/fa";

const interiorDesignIdeas = [
  {
    id: 1,
    category: "living room",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    title: "Modern Minimalist Living Room",
    likes: 120,
    saved: 45,
    comments: [
      { id: 1, user: "Alice", text: "Love the minimalist design!" },
      { id: 2, user: "Bob", text: "Where can I find that coffee table?" }
    ]
  },
  {
    id: 2,
    category: "kitchen",
    imageUrl: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
    title: "Sleek Contemporary Kitchen",
    likes: 95,
    saved: 30,
    comments: [
      { id: 1, user: "Charlie", text: "The lighting fixtures are amazing!" }
    ]
  },
  {
    id: 3,
    category: "bedroom",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    title: "Cozy Scandinavian Bedroom",
    likes: 150,
    saved: 60,
    comments: [
      { id: 1, user: "Diana", text: "Such a peaceful atmosphere!" },
      { id: 2, user: "Ethan", text: "I need those bedside lamps!" }
    ]
  },
  {
    id: 4,
    category: "bathroom",
    imageUrl: "https://images.unsplash.com/photo-1620626011761-996317b8d101",
    title: "Luxurious Marble Bathroom",
    likes: 80,
    saved: 25,
    comments: [
      { id: 1, user: "Fiona", text: "That bathtub is to die for!" }
    ]
  },
  {
    id: 5,
    category: "dining room",
    imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
    title: "Elegant Dining Room Setup",
    likes: 110,
    saved: 40,
    comments: [
      { id: 1, user: "George", text: "Love the chandelier!" },
      { id: 2, user: "Hannah", text: "The color scheme is perfect." }
    ]
  }
];

const GetIdeasInteriorDesign = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["all", "living room", "kitchen", "bedroom", "bathroom", "dining room"];

  const filteredIdeas = interiorDesignIdeas.filter((idea) => {
    const matchesCategory = activeCategory === "all" || idea.category === activeCategory;
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Get Ideas - Interior Design</h1>
      
      <div className="mb-8">
        <div className="flex justify-center flex-wrap gap-4 mb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search ideas..."
            className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map(idea => (
            <div key={idea.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={idea.imageUrl}
                  alt={idea.title}
                  className="w-full h-48 object-cover cursor-pointer"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-100 transition-colors duration-300">
                    <FaHeart className="text-red-500" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300">
                    <FaBookmark className="text-blue-500" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 truncate">{idea.title}</h2>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{idea.likes} likes</span>
                  <span>{idea.saved} saved</span>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2 text-sm">Comments</h3>
                  {idea.comments.slice(0, 2).map(comment => (
                    <div key={comment.id} className="mb-1 text-xs">
                      <span className="font-medium">{comment.user}: </span>
                      <span>{comment.text}</span>
                    </div>
                  ))}
                  {idea.comments.length > 2 && (
                    <p className="text-xs text-blue-500 cursor-pointer">View all comments</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No ideas found.</p>
        )}
      </div>
    </div>
  );
};

export default GetIdeasInteriorDesign;
