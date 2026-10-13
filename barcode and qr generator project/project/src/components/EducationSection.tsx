import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'University of Technology',
      location: 'San Francisco, CA',
      year: '2018 - 2020',
      description: 'Specialized in Human-Computer Interaction and Web Technologies. Graduated with distinction and completed a thesis on responsive web design patterns.'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      location: 'Boston, MA',
      year: '2014 - 2018',
      description: 'Focused on software engineering and web development. Participated in multiple hackathons and led the web development club.'
    },
    {
      id: 3,
      degree: 'Web Development Bootcamp',
      institution: 'Tech Academy',
      location: 'Online',
      year: '2017',
      description: 'Intensive 12-week bootcamp covering full-stack web development with modern JavaScript frameworks and best practices.'
    },
    {
      id: 4,
      degree: 'UI/UX Design Certification',
      institution: 'Design Institute',
      location: 'New York, NY',
      year: '2019',
      description: 'Professional certification in user interface and user experience design principles, focusing on creating accessible and intuitive web experiences.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey has equipped me with a strong foundation in both technical skills and theoretical knowledge.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 z-10"></div>
                
                {/* Even items (left side on desktop) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.degree}</h3>
                        <div className="flex flex-col md:items-end mb-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                            <GraduationCap className="w-4 h-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                            <span>{item.institution}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                            <MapPin className="w-4 h-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                            <span>{item.year}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.degree}</h3>
                        <div className="flex flex-col mb-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            <span>{item.institution}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{item.year}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Continuous Learning</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond formal education, I'm committed to continuous learning. I regularly take online courses, 
            attend workshops, and participate in coding challenges to keep my skills sharp and stay current with industry trends.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full">
              <span className="text-blue-700 dark:text-blue-300">Advanced React Patterns</span>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 px-6 py-3 rounded-full">
              <span className="text-purple-700 dark:text-purple-300">TypeScript Masterclass</span>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-full">
              <span className="text-green-700 dark:text-green-300">Accessibility Standards</span>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 px-6 py-3 rounded-full">
              <span className="text-yellow-700 dark:text-yellow-300">UI Animation Techniques</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;