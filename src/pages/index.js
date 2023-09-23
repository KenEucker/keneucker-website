/* eslint-disable react/no-unescaped-entities */
import Intro from "../components/Intro";
import About from "../components/About";
import Why from "../components/Why";
import How from "../components/How";
import What from "../components/What";
import Where from "../components/Where";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreLoad from "../components/PreLoad";
import SocialLinks from "../components/SocialLinks";

function index() {
  return (
    <>
      {/* Head */}
      <Header
        title={"Ken Eucker"}
        description={"Software Engineer with a decade of experience in NodeJs, collaborating on multiple open-source projects. Author/Maintainer of imgur and biketag-api on npm"}
        author={"Ken Eucker"}
      />

      {/* Preload Scripts */}
      <PreLoad />

      {/* Intro Banner */}
      <Intro
        firstName={"Ken"}
        content={
          <div>
            <p>
              I love to design applications, write poetry,
              ride my bicycle, hike to hot springs, backpack through forests, take
              candid photographs, and talk about the intersection of technology
              and psychology. I also volunteer my time and energy to various projects
              throughout the year.
            </p>
            <p>
              I live in Nevada and volunteer a lot of my time to the Black Rock Desert 
              and those who chose to visit our tiny little city on the edge of the USA's 
              first National Conservation Area. I like to run around in my Khaki 4Runner 
              to explore old mines and try to find new trails to ride bikes on. I also 
              enjoy shooting a lot of pool and staring at the night skies out here. 
            </p>
          </div>
        }
        srcHeader={"/img/kendrid-spirit-brd.png"}
        altHeader={"Ken Eucker"}
      />

      {/* About Me professionally */}
      <About
        img={"/img/ken_eucker_boom_headshot.png"}
        name={"Ken Eucker"}
        title={"Software Engineer"}
        socialLinks={<SocialLinks />}
        resumeFile={"/doc/Ken_Eucker_Resume_2023.pdf"}
        description={
          <div>
            <p>
              I am a Software Engineer, classically trained in
              object-oriented programming, who likes to write universal
              javascript, with extensive experience building the backend of
              web-connected properties.
              <br />
              <br />
              I have a wide range of skills writing in the serverside
              languages TypeScript, Javascript, PHP, C#, and the clientside 
              languages HTML, Javascript, CSS, TypeScript, including the database 
              languages mysql, MSSQL, GraphQL, and Mongodb. 
              <br />
              <br />
              I primarily work with node applications and node built 
              front-end projects at the moment. Previously to this I was working 
              on WordPress projects migrating to React front-end experiences.
            </p>
          </div>
        }
        readMoreText={
          <div>
            <p>
              I am a writer; I write in human languages and in machine languages.
              I like writing poetry and short stories. I like writing blogs and
              reflecting upon my personal experience. I have written different
              blogs over the years trying to find out where my niche is. I have
              been building a universe for a novel that I want to write entirely
              in javascript. I have some odd ideas.
              <br />
              <br />
              I am a maker; I woodwork, weld metal, solder electronics,
              program microcontrollers, and I like to find projects that
              combines these skills. I have a desire to create kinetic water
              art installations.
              <br />
              <br />
              I am an adventurer; I like to go biking, hiking, backpacking,
              and traveling to remote areas to connect with the natural world
              and I find those experiences to be invaluable. I like to believe
              that life happens in between the moments that you plan for, and I
              actively seek out adventures that will grow who I am as a person
              with those around me.
              <br />
              <br />
              I am a contributor; I contribute to a range of projects in various
              capacities by writing open source code and submitting pull requests
              on GitHub, by being a member of cycling related non-profit organizations
              in the Pacific Northwest, by First Doing Nothing and providing peer
              support while participating in artful events both local and international.
            </p>
          </div>
        }
      />

      {/* About Me personally */}
      <About
        img={"/img/Ken_Eucker_BlackRock_Ranger.jpg"}
        secondImg={"/img/brc-ranger-logo.png"}
        secondImgWidth={105}
        secondImgHeight={105}
        name={"Kendrid Spirit"}
        title={"Black Rock Ranger"}
        reversed={true}
        description={
          <div>
            <p>
              Throughout my career, I have dedicated a significant amount of time to
              volunteering for various organizations, communities, and online groups.
              In 2016, I joined the team of Rangers at SOAK, Portland's regional Burning
              Man event. As a Ranger, I provided peer support and emergency response to
              participants. In 2019, I attended Burning Man for the third time and became
              a Black Rock Ranger. Since then, I have returned to Burning Man annually to
              serve as a Black Rock Ranger, a role I am committed to continuing in the future.
            </p>
            <p>
              In 2022 I started working the entire Burning Man season as a DPW Ranger. For six 
              months out of the year, I live in and work with the Burning Man staff and community 
              in the Black Rock Desert of Nevada.
            </p>
          </div>
        }
        readMoreText={
          <div>
            <p>
              Black Rock Rangers are participants who volunteer a portion of their time 
              at Burning Man in service of the safety and well-being of the Burning Man 
              community. Rangers act as non-confrontational community mediators, 
              providers of reliable information, facilitators of public safety (with 
              the expectation that everyone reads the back of their ticket, of course!), 
              and navigators of the edge of chaos.
              <br />
              <br />

              Rangering is, to me personally, a way for me to connect with people 
              within my community and to be able to give back to what makes our 
              shared reality such a wonderful place to express ourselves and the
              art that we all bring to the world. I am happy to be able to 
              participate in this community nearly year round with the Rangers.
            </p>
            <br />
            <p>
              Buy the ticket, take the ride.
            </p>
          </div>
        }
      />

      {/* Where you can find me */}
      <Where />
      {/* What you can find me doing */}
      <What />
      {/* Why you can find me doing it */}
      <Why
        description={
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
        }
        readMoreText={
          <p>
            I am a software engineer with a passion for programming that began when I was 14 
            years old. Throughout my education and career, I have learned a range of programming 
            languages, including BASIC, Pascal, C, C++, PHP, and ASP.NET, and have applied my 
            skills to projects in web development, microcontroller programming, and game 
            development.
            <br />
            <br />
            I have a diverse background in the tech industry, having worked at web development 
            agencies, product companies, and as a freelancer. I am particularly interested in 
            open source development and have made it a focus of my work. In my current role as 
            a senior developer, I am committed to promoting the use of open source projects and 
            ensuring that original authors are credited for their contributions.
            <br />
            <br />
            In 2021, I made the decision to embrace a nomadic lifestyle, both in my career and 
            personal life. I currently live in a 22-foot airstream travel trailer and am 
            committed to maintaining a balance between stability and flexibility in my 
            professional endeavors.
          </p>
        }
        />

      {/* How I can continue doing it */}
      <How
        availabilty={
          <p>
            I am available for hire on remote contracts only, to get in touch please
            send me an email:{" "}
            <a href="mailto:hello@keneucker.com">hello@keneucker.com</a>
          </p>
        }
        button1={{
          href: "https://www.buymeacoffee.com/keneucker",
          fg: "#FF813F",
          text: "Buy me a Coffee",
          imgSrc: "/img/coffecup.svg",
        }}
        button2={{
          href: "https://ko-fi.com/keneucker",
          fg: "#FF5E5B",
          text: "Support me on Ko-fi",
          imgSrc: "/img/kofi.svg",
        }}
        sponsor={{
          href: "https://github.com/sponsors/KenEucker",
          imgSrc: "/img/octocat-for-sponsors.png",
          imgAlt: "sponsor me on github",
          text: "Sponsor me on Github",
        }}
      />

      {/* Contact Me Footer */}
      <Footer />
    </>
  );
}

export default index;
