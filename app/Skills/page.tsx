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
import '@/styles/pages.css'


const Skills = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="skills">
        <h2 className="skills-heading">Skills</h2>

        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul className="skill-list">
            <li className="skill-item"><FaPython className="skill-icon" /> Python</li>
            <li className="skill-item"><FaJava className="skill-icon" /> Java</li>
            <li className="skill-item"><FaCode className="skill-icon" /> C++</li>
            <li className="skill-item"><FaCode className="skill-icon" /> C</li>
            <li className="skill-item"> Scratch</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Web Development</h3>
          <ul className="skill-list">
            <li className="skill-item"><FaHtml5 className="skill-icon" /> HTML</li>
            <li className="skill-item"><FaCss3Alt className="skill-icon" /> CSS</li>
            <li className="skill-item"><DiJavascript className="skill-icon" /> Javascript</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Database</h3>
          <ul className="skill-list">
            <li className="skill-item"><FaDatabase className="skill-icon" /> MongoDB</li>
            <li className="skill-item"><FaDatabase className="skill-icon" /> Firebase</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Other Skills</h3>
          <ul className="skill-list">
            <li className="skill-item"><FaGit className="skill-icon" /> Version Control (Git)</li>
            <li className="skill-item"><FaTools className="skill-icon" /> Problem Solving</li>
            <li className="skill-item"><FaChartBar className="skill-icon" /> Marketing</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;
