import React from 'react';

interface CategoryProps {
  type: 'project' | 'gallery';
  category: {
    title: string;
    image: string;
  };
}

const images = {
  education: [
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ],
  agriculture: [
    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ],
  women: [
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ],
  healthcare: [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1584516150877-200d1e1bf381?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ]
};

const CategoryPage: React.FC<CategoryProps> = ({ type, category }) => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div 
          className="relative h-[400px] rounded-xl overflow-hidden mb-12 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              {category.title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-teal-800 mb-4">About {category.title}</h2>
            <p className="text-gray-600 mb-6">
              Our {category.title.toLowerCase()} initiatives focus on creating sustainable impact 
              through community engagement and innovative solutions. We work closely with local 
              communities to ensure our programs meet their needs and create lasting positive change.
            </p>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Successfully implemented programs in over 20 communities</li>
                <li>• Impacted more than 1000 lives directly</li>
                <li>• Created sustainable solutions for long-term development</li>
                <li>• Established partnerships with local organizations</li>
              </ul>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={images[category.title.toLowerCase()]?.[index - 1] || category.image}
                  alt={`${category.title} ${index}`}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Support Our {category.title} Initiative</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Your contribution can make a significant difference in helping us expand our {category.title.toLowerCase()} programs 
            and reach more communities in need.
          </p>
          <a
            href="/donate"
            className="inline-block bg-teal-500 text-white px-8 py-3 rounded-md hover:bg-teal-600 transition"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;