/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export default function Why() {
  const [readmore, setReadMore] = useState(false);

  return (
    <div className="why-section">
      <h2 className="bold">Why</h2>
      <div className={readmore ? 'readit-block' : ''}>
        <div>
          <ul>
            <li style={{ color: "yellow" }}>
              Began writing poems at the age of 12 in 1999.
            </li>
            <li style={{ color: "#00ff00" }}>
              Started writing code two years later in 2001.
            </li>
            <li style={{ color: "orange" }}>
              Schooled for 8 years between 2002-2010.
            </li>
            <li style={{ color: "#00ffe0" }}>
              Worked at a web development agency in 2010.
            </li>
            <li style={{ color: "#ffffff" }}>
              Worked at a SAAS application company in 2012.
            </li>
            <li style={{ color: "#acaeff" }}>
              Freelanced full time and went traveling in 2014.
            </li>
            <li style={{ color: "#ff7a00" }}>
              Dedicated career to Open Source software in 2016.
            </li>
            <li style={{ color: "#f054ff" }}>
              Worked at a digital media publication in 2018.
            </li>
            <li style={{ color: "#b90e0a" }}>
              Went full-time digital nomad, 100% remote, in 2020.
            </li>
            <li style={{ color: "#00ff00" }}>
              Worked at a digital product consultancy in 2022.
            </li>
          </ul>
        </div>
        <div className="readmore-content">
          <p>
          I am a software engineer with a passion for programming that began when I was 14 
          years old. Throughout my education and career, I have learned a range of programming 
          languages, including BASIC, Pascal, C, C++, PHP, and ASP.NET, and have applied my 
          skills to projects in web development, microcontroller programming, and game 
          development.

          I have a diverse background in the tech industry, having worked at web development 
          agencies, product companies, and as a freelancer. I am particularly interested in 
          open source development and have made it a focus of my work. In my current role as 
          a senior developer, I am committed to promoting the use of open source projects and 
          ensuring that original authors are credited for their contributions.

          In 2021, I made the decision to embrace a nomadic lifestyle, both in my career and 
          personal life. I currently live in a 22-foot airstream travel trailer and am 
          committed to maintaining a balance between stability and flexibility in my 
          professional endeavors.
          </p>
        </div>
      </div>
        <button className="push-btn" onClick={() => setReadMore(!readmore)}>
          <span className="btn-front">
            <span>{readmore ? 'Close' : 'Read More'}</span>
          </span>
        </button>
    </div>
  );
}
