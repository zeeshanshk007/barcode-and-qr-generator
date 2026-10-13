import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Maximize } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  detailedDescription?: string;
  features?: string[];
  technologies?: string[];
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A responsive admin dashboard for managing an online store.',
      detailedDescription: 'A comprehensive dashboard for e-commerce store owners featuring real-time analytics, inventory management, and order processing. Built with a focus on usability and performance.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Redux', 'Tailwind CSS', 'Chart.js'],
      category: 'web',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Real-time sales analytics',
        'Inventory management',
        'Order processing and tracking',
        'Customer insights and reporting'
      ],
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Chart.js', 'Firebase']
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A beautiful weather application with 5-day forecast.',
      detailedDescription: 'An elegant weather application that provides current conditions and a 5-day forecast for any location worldwide. Features include animated weather icons, temperature trends, and location search.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['JavaScript', 'API', 'CSS', 'Responsive'],
      category: 'web',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Current weather conditions',
        '5-day forecast',
        'Location search',
        'Animated weather icons',
        'Temperature trends'
      ],
      technologies: ['JavaScript', 'OpenWeather API', 'CSS', 'HTML5', 'LocalStorage']
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A Kanban-style task management application.',
      detailedDescription: 'A productivity-focused task management application with Kanban boards, task categorization, and progress tracking. Designed for individuals and small teams seeking an intuitive way to organize projects.',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'Firebase', 'Drag and Drop'],
      category: 'web',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Kanban board view',
        'Task categorization',
        'Progress tracking',
        'Deadline reminders',
        'Collaborative features'
      ],
      technologies: ['React', 'TypeScript', 'Firebase', 'React DnD', 'Styled Components']
    },
    {
      id: 4,
      title: 'Restaurant Website',
      description: 'A modern, responsive website for a local restaurant.',
      detailedDescription: 'An elegant website for a high-end restaurant featuring an interactive menu, reservation system, chef profiles, and location information. The design emphasizes the restaurant\'s culinary excellence and atmosphere.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      category: 'design',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Interactive menu',
        'Online reservation system',
        'Chef profiles',
        'Location and hours',
        'Photo gallery'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Google Maps API']
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A mobile app to track workouts and fitness progress.',
      detailedDescription: 'A comprehensive fitness companion app that helps users track workouts, set goals, monitor progress, and maintain a healthy lifestyle. Features include custom workout creation, progress visualization, and social sharing.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Firebase', 'Charts', 'Health API'],
      category: 'mobile',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Workout tracking',
        'Goal setting',
        'Progress visualization',
        'Social sharing',
        'Custom workout creation'
      ],
      technologies: ['React Native', 'Firebase', 'Chart.js', 'Health API', 'Redux']
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A creative portfolio for a digital artist.',
      detailedDescription: 'A visually stunning portfolio for a digital artist, showcasing their work through an immersive gallery experience. The site features smooth animations, project details, and a contact system for potential clients.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      category: 'design',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Immersive gallery',
        'Project details',
        'Contact form',
        'Smooth animations',
        'Responsive design'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'PHP']
    }
  ]);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'Design' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const openModal = (project: Project) => {
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and solution.
            Click on a project to learn more about it.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openModal(project)}
                      className="p-2 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                      aria-label="View project details"
                    >
                      <Maximize className="w-5 h-5 text-blue-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                      aria-label="View source code on GitHub"
                    >
                      <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                    <button
                      onClick={() => openModal(project)}
                      className="flex-grow px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <ProjectModal 
          project={selectedProject} 
          isOpen={selectedProject !== null} 
          onClose={closeModal} 
        />
      </div>
    </section>
  );
};

export default ProjectsSection;