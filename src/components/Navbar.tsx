import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

export const projectsMenu = [
  { title: 'Rural Education', link: '/projects/education', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Sustainable Agriculture', link: '/projects/agriculture', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Women Empowerment', link: '/projects/women', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Healthcare Access', link: '/projects/healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Youth Development', link: '/projects/youth', image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Environmental Conservation', link: '/projects/environment', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Skill Training', link: '/projects/training', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Community Building', link: '/projects/community', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' }
];

export const galleryMenu = [
  { title: 'Community Events', link: '/gallery/events', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Education Programs', link: '/gallery/education', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Rural Development', link: '/gallery/rural', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Healthcare Camps', link: '/gallery/healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Women Empowerment', link: '/gallery/women', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Environmental Initiatives', link: '/gallery/environment', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Youth Activities', link: '/gallery/youth', image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  { title: 'Success Stories', link: '/gallery/success', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);

  return (
    <nav className="bg-teal-700 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-teal-300" />
              <span className="ml-2 text-xl font-bold text-white">VEWS</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-teal-200 transition">Home</Link>
            
            {/* Projects Dropdown */}
            <div className="relative group">
              <button
                className="text-white hover:text-teal-200 transition py-2"
                onMouseEnter={() => setShowProjectsDropdown(true)}
                onMouseLeave={() => setShowProjectsDropdown(false)}
              >
                Projects
              </button>
              {showProjectsDropdown && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 max-h-64 overflow-y-auto"
                  onMouseEnter={() => setShowProjectsDropdown(true)}
                  onMouseLeave={() => setShowProjectsDropdown(false)}
                >
                  {projectsMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Gallery Dropdown */}
            <div className="relative group">
              <button
                className="text-white hover:text-teal-200 transition py-2"
                onMouseEnter={() => setShowGalleryDropdown(true)}
                onMouseLeave={() => setShowGalleryDropdown(false)}
              >
                Gallery
              </button>
              {showGalleryDropdown && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 max-h-64 overflow-y-auto"
                  onMouseEnter={() => setShowGalleryDropdown(true)}
                  onMouseLeave={() => setShowGalleryDropdown(false)}
                >
                  {galleryMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-white hover:text-teal-200 transition">Contact</Link>
            <Link to="/donate" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-400 transition">
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-teal-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-white hover:text-teal-200">Home</Link>
            
            {/* Mobile Projects Submenu */}
            <div className="px-3 py-2">
              <button
                onClick={() => setShowProjectsDropdown(!showProjectsDropdown)}
                className="text-white hover:text-teal-200 w-full text-left"
              >
                Projects
              </button>
              {showProjectsDropdown && (
                <div className="pl-4 mt-2 space-y-2 max-h-48 overflow-y-auto">
                  {projectsMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block py-1 text-sm text-teal-100 hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Gallery Submenu */}
            <div className="px-3 py-2">
              <button
                onClick={() => setShowGalleryDropdown(!showGalleryDropdown)}
                className="text-white hover:text-teal-200 w-full text-left"
              >
                Gallery
              </button>
              {showGalleryDropdown && (
                <div className="pl-4 mt-2 space-y-2 max-h-48 overflow-y-auto">
                  {galleryMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block py-1 text-sm text-teal-100 hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/contact" className="block px-3 py-2 text-white hover:text-teal-200">Contact</Link>
            <Link to="/donate" className="block px-3 py-2 text-teal-300 font-semibold">Donate</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;