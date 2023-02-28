import Skill    from "./Skill";

function Skills() {
  return (
    <div className="skills">
        <h2 className="bold">What</h2>
        <div className="skills-wrapper">
          <div className="skill-thumbnail">
            <Skill
              img="/img/html.svg"
              text="html for 10+ years"
              stars={4}
              years={"10+"}
              />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/css3.svg"
              text="css3 for 10+ years"
              stars={4}
              years={"10+"}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/javascript.svg"
              text="javascript for 10+ years"
              stars={4}
              years={"10+"}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/vue.svg"
              text="vue for 3 years"
              stars={3}
              years={3}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/react.svg"
              text="react for 5 years"
              stars={3}
              years={5}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/GraphQL_Logo.svg"
              text="graphql for 1 year"
              stars={3}
              years={1}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/prisma.png"
              text="prisma for one year"
              stars={1}
              years={1}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/mongodb.svg"
              text="mongodb for 4 years"
              stars={3}
              years={4}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/php-logo.png"
              text="php for 10+ years"
              stars={4}
              years={"10+"}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/nodejs.svg"
              text="nodejs for 10+ years"
              stars={5}
              years={"10+"}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/liquidjs-logo.png"
              text="liquidjs for 2 years"
              stars={2}
              years={1}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/ts-logo-round-256.svg"
              text="typescript for 4 years"
              stars={3}
              years={4}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/vite.svg"
              text="Vite for 3 years"
              stars={3}
              years={3}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/postgresql.svg"
              text="postgresql for 10+ years"
              stars={4}
              years={"10+"}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/mysql-logo.png"
              text="mysql for 10+ years"
              stars={4}
              years={"10+"}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/redis-logo.png"
              text="redis for 2 years"
              stars={2}
              years={2}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/dotnet-logo.png"
              text="dotnet for 4 years"
              stars={3}
              years={4}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/mssql-logo.png"
              text="mssql for 4 years"
              stars={3}
              years={4}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/git.svg"
              text="git for 10+ years"
              stars={4}
              years={"10+"}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/c-logo.png"
              text="c sharp for 4 years"
              stars={3}
              years={4}
            />
          </div>
          <div className="skill-thumbnail">
            <Skill
              img="/img/coffeescript.svg"
              text="coffeescript for one year"
              stars={1}
              years={1}
            />
          </div>
        </div>
    </div>
  );
}

export default Skills;
