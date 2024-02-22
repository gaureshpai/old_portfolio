import React from 'react';
import {
  FaPython,
  FaJava,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaGit,
  FaTools,
  FaChartBar
} from 'react-icons/fa';


const Skills = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="skills">
        <h2>Skills</h2>
        <h3>Programming Languages</h3>
        <ul>
          <li><FaPython /> Python</li>
          <li><FaJava /> Java</li>
          <li><FaCode/> C++</li>
          <li><FaCode/> C</li>
          <li> Scratch</li>
        </ul>

        <h3>Web Development</h3>
        <ul>
          <li><FaHtml5 /> HTML5</li>
          <li><FaCss3Alt /> CSS3</li>
          <li><FaReact /> React.js</li>
          <li><FaNodeJs /> Node.js</li>
          <li><FaBootstrap /> Bootstrap</li>
        </ul>

        <h3>Database</h3>
        <ul>
          <li><FaDatabase /> SQL</li>
          <li><FaDatabase /> MongoDB</li>
          <li><FaDatabase /> Firebase</li>
        </ul>

        <h3>Other Skills</h3>
        <ul>
          <li><FaGit /> Version Control (Git)</li>
          <li><FaTools /> Problem Solving</li>
          <li><FaChartBar /> Marketing</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
