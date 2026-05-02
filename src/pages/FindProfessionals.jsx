import React, { useState } from "react";
import { FaSearch, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const professionals = [
  {
    id: 1,
    name: "John Doe",
    profession: "Interior Designer",
    rating: 4.8,
    reviews: 120,
    location: "New York, NY",
    phone: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    specialties: ["Modern", "Minimalist", "Scandinavian"]
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Interior Decorator",
    rating: 4.6,
    reviews: 95,
    location: "Los Angeles, CA",
    phone: "+1 (555) 987-6543",
    email: "jane.smith@example.com",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    specialties: ["Contemporary", "Bohemian", "Eclectic"]
  },
  {
    id: 3,
    name: "Mike Johnson",
    profession: "Furniture Designer",
    rating: 4.9,
    reviews: 150,
    location: "Chicago, IL",
    phone: "+1 (555) 246-8135",
    email: "mike.johnson@example.com",
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    specialties: ["Custom Furniture", "Mid-century Modern", "Industrial"]
  },
  {
    id: 4,
    name: "Emily Brown",
    profession: "Color Consultant",
    rating: 4.7,
    reviews: 80,
    location: "San Francisco, CA",
    phone: "+1 (555) 369-2580",
    email: "emily.brown@example.com",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    specialties: ["Color Theory", "Paint Selection", "Mood Enhancement"]
  },
  {
    id: 5,
    name: "David Lee",
    profession: "Lighting Designer",
    rating: 4.5,
    reviews: 110,
    location: "Seattle, WA",
    phone: "+1 (555) 753-9514",
    email: "david.lee@example.com",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
    specialties: ["Ambient Lighting", "LED Integration", "Smart Lighting"]
  }
];

const FindProfessionals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const specialties = ["All", ...new Set(professionals.flatMap(p => p.specialties))];

  const filteredProfessionals = professionals.filter(professional =>
    (professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     professional.profession.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedSpecialty === "All" || professional.specialties.includes(selectedSpecialty))
  );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Find Interior Design Professionals</h1>
      
      <div className="mb-8">
        <div className="flex justify-center flex-wrap gap-4 mb-4">
          {specialties.map(specialty => (
            <button
              key={specialty}
              className={`px-4 py-2 rounded-full ${selectedSpecialty === specialty ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </button>
          ))}
        </div>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search professionals..."
            className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProfessionals.map(professional => (
          <div key={professional.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img
              src={professional.imageUrl}
              alt={professional.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{professional.name}</h2>
              <p className="text-gray-600 mb-2">{professional.profession}</p>
              <div className="flex items-center mb-2">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-semibold">{professional.rating}</span>
                <span className="text-gray-600 ml-2">({professional.reviews} reviews)</span>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <span>{professional.location}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaPhone className="text-gray-500 mr-2" />
                <span>{professional.phone}</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-gray-500 mr-2" />
                <span>{professional.email}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {professional.specialties.map(specialty => (
                  <span key={specialty} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindProfessionals;
