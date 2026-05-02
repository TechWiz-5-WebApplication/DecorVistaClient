const ContactLocalProfessional = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Connect with local interior designers and contractors to bring your vision to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Find Professionals</h3>
            <p>Browse verified local designers</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Get Consultation</h3>
            <p>Schedule free consultations</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Transform Space</h3>
            <p>Bring your dreams to reality</p>
          </div>
        </div>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Find Professionals Near You
        </button>
      </div>
    </section>
  );
};

export default ContactLocalProfessional;
