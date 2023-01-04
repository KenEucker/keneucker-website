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
          <p>
            I love to design applications, write poetry,
            ride my bicycle, hike to hot springs, backpack through forests, take
            candid photographs, and talk about the intersection of technology
            and psychology. I also volunteer my time and energy to various projects
            throughout the year.
          </p>
        }
        srcHeader={"/img/ken-ai-cartoon.png"}
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
          <p>
            As a Software Engineer with a background in object-oriented 
            programming, I have a strong track record of building the 
            backend of web-connected properties. I am proficient in a 
            variety of programming languages, including TypeScript, 
            JavaScript, PHP, C#, HTML, CSS, and MySQL, MSSQL, and MongoDB.
          </p>
          <p>
            I specialize in developing node applications and front-ends 
            built with node. While I am experienced in using both Vue and 
            React, I have a particular affinity for Vue and often work with 
            it on projects. In addition, I have expertise in GraphQL and 
            federated databases, and am proficient in deploying serverless 
            applications on platforms such as Netlify, Heroku, Render.com, 
            Google Cloud Platform, and AWS.
          </p>
          <p>
            I am committed to staying up to date with the latest technologies 
            and best practices in my field, and always strive to produce 
            high-quality, reliable code.  
          </p>
        }
        readMoreText={
          <p>
            I am a writer; I write in human languages and in machine languages.
            I like writing poetry and short stories. I like writing blogs and
            reflecting upon my personal experience. I have written different
            blogs over the years trying to find out where my niche is. I have
            been building a universe for a novel that I want to write entirely
            in javascript. I have some odd ideas.
            <p>
              <p>
                I am a maker; I woodwork, weld metal, solder electronics,
                program microcontrollers, and I like to find projects that
                combines these skills. I have a desire to create kinetic water
                art installations.
              </p>
              <p>

                I am an adventurer; I like to go biking, hiking, backpacking,
                and traveling to remote areas to connect with the natural world
                and I find those experiences to be invaluable. I like to believe
                that life happens in between the moments that you plan for, and I
                actively seek out adventures that will grow who I am as a person
                with those around me.
              </p>
              <p>

                I am a contributor; I contribute to a range of projects in various
                capacities by writing open source code and submitting pull requests
                on GitHub, by being a member of cycling related non-profit organizations
                in the Pacific Northwest, by First Doing Nothing and providing peer
                support while participating in artful events both local and international.
              </p>
        }
      />

              {/* About Me personally */}
              <About
                img={"/img/Ken_Eucker_BlackRock_Ranger.jpg"}
                secondImg={"/img/brc-ranger-logo.png"}
                secondImgWidth={80}
                secondImgHeight={90}
                name={"Kendrid Spirit"}
                title={"Black Rock Ranger"}
                reversed={true}
                description={
                  <p>
                    Throughout my career, I have dedicated a significant amount of time to
                    volunteering for various organizations, communities, and online groups.
                    In 2016, I joined the team of Rangers at SOAK, Portland's regional Burning
                    Man event. As a Ranger, I provided peer support and emergency response to
                    participants. In 2019, I attended Burning Man for the third time and became
                    a Black Rock Ranger. Since then, I have returned to Burning Man annually to
                    serve as a Black Rock Ranger, a role I am committed to continuing in the future.
                  </p>
                }
                readMoreText={
          <pp>
            Black Rock Rangers are volunteers who contribute a portion of their time at 
            Burning Man to ensure the safety and well-being of the community. In this role, 
            I act as a non-confrontational mediator, provide reliable information, facilitate 
            public safety, and navigate the complexities of the event.
          </pp>
          <p>
            For me, Rangering is a way to connect with and give back to my community. It's an 
            opportunity to participate in a vibrant and expressive environment that is enriched 
            by the art and creativity of its participants. I am grateful to be able to 
            contribute to this community almost year-round through my involvement with the 
            Rangers.
          </p>
          <p>
            Buy the ticket, take the ride.
          </p>
                }
              />

              {/* Where you can find me */}
              <Where />
              {/* What you can find me doing */}
              <What />
              {/* Why you can find me doing it */}
              <Why />

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
