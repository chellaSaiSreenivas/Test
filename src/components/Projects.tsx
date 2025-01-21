import React from 'react';

const projects = [
  {
    id: 1,
    title: "Rural Education Initiative",
    description: "Providing quality education to rural children through mobile schools and learning centers.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/projects/education"
  },
  {
    id: 2,
    title: "Sustainable Agriculture",
    description: "Training farmers in sustainable farming practices and providing resources for better yield.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/projects/agriculture"
  },
  {
    id: 3,
    title: "Women Empowerment",
    description: "Supporting women through skill development and entrepreneurship programs.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/projects/women-empowerment"
  },
  {
    id: 4,
    title: "Healthcare Access",
    description: "Mobile medical camps and health awareness programs for remote communities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/projects/healthcare"
  }
];

const Projects = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/90 transition-all">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;