import React from 'react';
import { DiJavascript } from 'react-icons/di';
import {
  FaPython,
  FaJava,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
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
          <li><FaHtml5 /> HTML</li>
          <li><FaCss3Alt /> CSS</li>
          <li><DiJavascript/>Javascript</li>
        </ul>

        <h3>Database</h3>
        <ul>
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
