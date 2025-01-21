import React from 'react';
import { ArrowRight, Users, Heart, Leaf, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Empowering Communities<br />Building Future
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Victory Educational and Welfare Society works for the upliftment of agricultural laborers,
              small farmers, and marginalized communities through education, health, and empowerment initiatives.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-400 transition"
            >
              Make a Difference
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Our Mission</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-teal-700">Community Development</h3>
              <p className="text-gray-600">Empowering rural and urban communities through collective action and sustainable development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-teal-700">Health & Welfare</h3>
              <p className="text-gray-600">Promoting healthcare awareness and providing medical support to underprivileged communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Leaf className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-teal-700">Environmental Protection</h3>
              <p className="text-gray-600">Implementing sustainable practices and protecting natural resources for future generations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-teal-700">Education</h3>
              <p className="text-gray-600">Providing quality education and skill development opportunities to empower youth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-500 mb-2">5000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-500 mb-2">50+</div>
              <div className="text-gray-600">Villages Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-500 mb-2">100+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;