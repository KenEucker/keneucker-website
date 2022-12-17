/* eslint-disable react/no-unescaped-entities */
import Project from "./Project";

function Projects(props) {
  return (
    <>
      <div className="projects-section">
          <Project
            img={"/img/graphql-demo.avif"}
            title={"@latest"}
            description={<>
              This is a stack I hacked together while working on a Udemy course 
              for GraphQL. It's Vite + Vute + Apollo all in TypeScript, with some 
              additional flashy stuff in a simple demo. Free for anyone to pick up!
            </>}
            techs={"Vue, Vite, Apollo, TypeScript, VueUse"}
            Github={"https://github.com/KenEucker/GraphQL-Demo"}
            LiveLink={"https://keneucker-graphql.netlify.app"}
            preview={props?.preview}
          />
          <Project
            img={"/img/biketag-api-logo.jpg"}
            title={"Biketag-Api"}
            description={<>
              The javascript client for interacting with BikeTag games. This is the foundational 
              library that drives the BikeTag 2.0 web application. Members of the community can 
              also develop their own tools and interfaces to BikeTag data using the BikeTag API!
            </>}
            techs={"TypeScript, Webpack"}
            Github={"https://github.com/KenEucker/biketag-api"}
            LiveLink={"https://keneucker.github.io/biketag-api/"}
            preview={props?.preview}
          />
          <Project
            img={"/img/imgur_logo.png"}
            title={"imgur"}
            description={<>
              In 2021, I became the author and maintainer of the npm project imgur, 
              a project I had been contributing to for several years, when the original 
              author passed the project on for continued active development. I have 
              since released imgur@2.0.0 which is a newly isomorphic library written 
              in TypeScript. I am happy to be part of such a project and I look forward 
              to contributing to Free and Open-Source Software any moment I can.
            </>}
            techs={"TypeScript, Webpack"}
            Github={"https://github.com/KenEucker/imgur"}
            LiveLink={"https://www.npmjs.com/package/imgur"}
            preview={props?.preview}
          />
          <Project
            img={"/img/Tag-Logo-Stacked-V2.png"}
            title={"Biketag-Vue"}
            description={<>
              create a tool to play the game of BikeTag easier than it was currently 
              being played. So that year we (my friend & I) launched a tool that uploaded 
              two images (found it tag, new mystery location) and provided fields for 
              credit and a hint for the next round. That project continues to evolve and 
              we have successfully scaled the project to include 7 cities across the world 
              including: Indianapolis, Indiana, Inverness, Scotland, and Vienna, Austria! 
              I started this endeavor as an entirely open source project. You can see how 
              that project on Github (click below)
            </>}
            techs={"TypeScript, Vue, Vite, Api"}
            Github={"https://github.com/KenEucker/biketag-vue"}
            LiveLink={"https://biketag.org/"}
            preview={props?.preview}
          />
      </div>
    </>
  );
}

export default Projects;
