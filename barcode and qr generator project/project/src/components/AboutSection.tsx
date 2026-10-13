import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb, Zap } from 'lucide-react';

const AboutSection = () => {
  const qualities = [
    { 
      icon: <Code className="w-8 h-8 text-blue-500" />, 
      title: 'Developer', 
      description: 'I enjoy building things from scratch and bringing ideas to life in the browser.' 
    },
    { 
      icon: <Palette className="w-8 h-8 text-purple-500" />, 
      title: 'Designer', 
      description: 'I value simple, clean design patterns and thoughtful interactions.' 
    },
    { 
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />, 
      title: 'Problem Solver', 
      description: 'I love tackling complex problems and finding elegant solutions.' 
    },
    { 
      icon: <Zap className="w-8 h-8 text-green-500" />, 
      title: 'Fast Learner', 
      description: 'I quickly adapt to new technologies and continuously improve my skills.' 
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate frontend developer with a strong focus on creating beautiful, 
            functional, and accessible web experiences. With a background in both design and 
            development, I bring a unique perspective to every project.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              <div className="mb-4 flex justify-center">{quality.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">{quality.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{quality.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Working at desk" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I started my journey as a web developer 5 years ago, driven by a curiosity about how things work on the web. 
                What began as a hobby quickly turned into a passion, and I've been building websites and applications ever since.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My approach to development combines technical expertise with an eye for design, 
                ensuring that my projects not only function flawlessly but also provide an exceptional user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through blog posts and community engagement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;