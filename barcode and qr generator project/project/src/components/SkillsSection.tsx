import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
  icon?: string;
}

const SkillsSection = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeSkills, setActiveSkills] = useState<Skill[]>([]);
  
  const skills: Skill[] = [
    { name: 'HTML', level: 90, category: 'frontend' },
    { name: 'CSS', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 88, category: 'frontend' },
    { name: 'React', level: 82, category: 'frontend' },
    { name: 'TypeScript', level: 75, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'Node.js', level: 70, category: 'backend' },
    { name: 'Express', level: 65, category: 'backend' },
    { name: 'MongoDB', level: 60, category: 'backend' },
    { name: 'UI/UX Design', level: 78, category: 'design' },
    { name: 'Figma', level: 75, category: 'design' },
    { name: 'Git', level: 80, category: 'other' },
    { name: 'RESTful APIs', level: 78, category: 'other' },
    { name: 'GraphQL', level: 68, category: 'other' },
  ];
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' },
  ];
  
  useEffect(() => {
    if (filter === 'all') {
      setActiveSkills(skills);
    } else {
      setActiveSkills(skills.filter(skill => skill.category === filter));
    }
  }, [filter]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career. Here's a snapshot of my technical expertise and proficiency levels.
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
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">Why My Skills Matter</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
            I believe in a holistic approach to web development, where technical skills are balanced with creativity, problem-solving, and attention to detail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Clean Code</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I write maintainable, well-documented code that's easy to understand and build upon.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Responsive Design</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All my projects are fully responsive and work flawlessly across devices.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Performance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I optimize for speed and efficiency, ensuring fast load times and smooth interactions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Accessibility</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I create inclusive experiences that work for all users, regardless of ability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;