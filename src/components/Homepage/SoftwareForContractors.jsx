const SoftwareForContractors = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Professional Tools for Contractors</h2>
            <p className="text-lg text-gray-300 mb-6">
              Streamline your design process with our professional software suite designed specifically for interior designers and contractors.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>3D Room Planning & Visualization</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Client Project Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Material & Cost Estimation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span>Supplier Integration</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💻</div>
              <span className="text-gray-400">Software Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareForContractors;
