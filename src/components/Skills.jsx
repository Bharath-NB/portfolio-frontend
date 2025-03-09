import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiBootstrap } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className='text-orange-500' />, certificate: '/certificates/HTML5.PNG' },
  { name: 'CSS', icon: <FaCss3Alt className='text-blue-500' />, certificate: '/certificates/CSS3.PNG' },
  { name: 'Bootstrap', icon: <SiBootstrap className='text-purple-500' />, certificate: '/certificates/Bootstrap.PNG' },
  { name: 'JavaScript', icon: <FaJs className='text-yellow-500' />, certificate: '/certificates/Javascript.PNG' },
  { name: 'ReactJs', icon: <FaReact className='text-blue-400' />, certificate: '/certificates/ReactJS.PNG' },
  { name: 'NodeJs', icon: <FaNodeJs className='text-green-500' />, certificate: '/certificates/NodeJS.PNG' },
  { name: 'MongoDB', icon: <SiMongodb className='text-green-600' />, certificate: '/certificates/MongoDB.PNG' },
  { name: 'MySQL', icon: <SiMysql className='text-blue-700' />, certificate: '/certificates/MySQL.PNG' }
];

const softSkills = [
  'Written Communication', 'Web Development', 'Decision Making',
  'Interpersonal Skills', 'Multitasking', 'Problem Solving',
  'Collaboration', 'Teamwork', 'Feasibility'
];

const Skills = () => {
  return (
    <section id='skills' className='py-16 bg-black text-white'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-10'>Skills</h2>
        <h4 className='font-bold text-center mb-10'>Please click each icon to view certificates</h4>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center'>
          {skills.map((skill, index) => (
            <motion.a 
              key={index} 
              href={skill.certificate} 
              target='_blank' 
              rel='noopener noreferrer' 
              className='bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transition hover:scale-105 hover:bg-gray-700'
              whileHover={{ scale: 1.1 }}
            >
              <div className='text-4xl mb-2'>{skill.icon}</div>
              <p className='mt-2 text-lg font-semibold'>{skill.name}</p>
            </motion.a>
          ))}
        </div>
        
        <h3 className='text-3xl font-semibold text-center mt-12 mb-6'>Soft Skills</h3>
        <div className='flex flex-wrap justify-center gap-4'>
          {softSkills.map((skill, index) => (
            <motion.span 
              key={index} 
              className='bg-gray-800 px-6 py-3 rounded-full shadow-md text-white font-medium text-sm md:text-base transition hover:bg-gray-700'
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
