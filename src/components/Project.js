import Image from "next/image";
import { useState } from "react";

function Project(props) {
  const [peek, setPeek] = useState(false);

  return (
    <div className="project-card">
      <div className="pct-thumbnail" onClick={() => {setPeek(!peek)}}>
        <Image
          src={props?.img}
          alt={props?.img}
          width={200}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      {props?.preview && <>
        <h3>{props?.title}</h3>
      </>}
      {(!props?.preview || peek) && <>
        <div className="project-card-info">
          <h3>{props?.title}</h3>
          <div className="project-tech">{props?.techs}</div>
          <p>{props?.description}</p>
          <div className="project-btns">
            <a href={props?.Github} target="_blank" rel="noreferrer">
            <button className="push-btn">
                <span className="btn-front">
                  <span>Github</span>
                </span>
              </button>
            </a>
            <a href={props?.LiveLink} target="_blank" rel="noreferrer">
              <button className="push-btn">
                <span className="btn-front">
                  <span>Live</span>
                  <Image
                    src="/img/icons8-linking.svg"
                    alt="icons8-linking"
                    width={150}
                    height={100}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "cover"
                    }} />
                </span>
              </button>
            </a>
          </div>
        </div>
      </>}
    </div>
  );
}

export default Project;
