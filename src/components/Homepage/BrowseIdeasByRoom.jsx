const BrowseIdeasByRoom = () => {
  const rooms = [
    { name: "Living Room", image: "🛋️", count: "1,200+ ideas" },
    { name: "Kitchen", image: "🍳", count: "900+ ideas" },
    { name: "Bedroom", image: "🛏️", count: "800+ ideas" },
    { name: "Bathroom", image: "🛁", count: "600+ ideas" },
    { name: "Dining Room", image: "🍽️", count: "400+ ideas" },
    { name: "Home Office", image: "💻", count: "300+ ideas" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Ideas by Room</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {rooms.map((room, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-lg p-8 mb-4 group-hover:bg-gray-200 transition-colors">
                <div className="text-4xl mb-2">{room.image}</div>
                <h3 className="font-semibold text-gray-800">{room.name}</h3>
                <p className="text-sm text-gray-600">{room.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseIdeasByRoom;
