import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            DecorVista
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/shop-products" className="text-gray-700 hover:text-blue-600">Products</Link>
            <Link to="/get-ideas" className="text-gray-700 hover:text-blue-600">Get Ideas</Link>
            <Link to="/find-professionals" className="text-gray-700 hover:text-blue-600">Professionals</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 py-2">Home</Link>
            <Link to="/shop-products" className="block text-gray-700 hover:text-blue-600 py-2">Products</Link>
            <Link to="/get-ideas" className="block text-gray-700 hover:text-blue-600 py-2">Get Ideas</Link>
            <Link to="/find-professionals" className="block text-gray-700 hover:text-blue-600 py-2">Professionals</Link>
            <Link to="/blogs" className="block text-gray-700 hover:text-blue-600 py-2">Blog</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 py-2">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
