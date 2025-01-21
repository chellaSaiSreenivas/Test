import React from 'react';

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Community Gathering"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Education Program"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Rural Development"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Training Session"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Healthcare Camp"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Agricultural Support"
  }
];

const Gallery = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Photo Gallery</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;