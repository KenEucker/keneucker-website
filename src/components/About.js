/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState } from "react";

function About(props) {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  return <>
    <div className={`about-section ${props?.reversed ? "reversed" : ''}`}>
      <div className="about-top">
        <div className="about-img">
          <div className="about-thumbnail">
            <Image
              src={props?.img}
              alt={props?.imgAlt ?? props?.img}
              height={props?.imgHeight ?? 290}
              width={props?.imgWidth ?? 170}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
          </div>
          <h2>{props?.name}</h2>
          <div className="about-links">
            {props?.secondImg && 
            <>
              <Image
                src={props.secondImg}
                alt={props.secondImg}
                width={props?.secondImgWidth ?? 30}
                height={props?.secondImgHeight ?? 30}
              />
            </>}
            {props?.socialLinks}
            {props?.resumeFile &&
            <a href={props?.resumeFile} download={true}>
              <button className="push-btn" style={{"background": 'hsl(0deg 95% 25%)'}}>
                <span className="btn-front" style={{"background": '#ff0000'}}>
                  <span>Resume</span>
                  <Image
                    src="/img/pdf-icon.svg"
                    alt="pdf icon"
                    width={20}
                    height={25}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "cover"
                    }} />
                </span>
              </button>
            </a>}
          </div>
        </div>
        <div className="about-info">
          <h4>{props?.title}</h4>
          {props?.description}
          {!readMoreOpen && (
          <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
            <span className="btn-front">
              <span>Read More</span>
            </span>
          </button>
          )}
        </div>
      </div>
      {readMoreOpen && (
      <div className="about-info-more">
        {props?.readMoreText}
        {readMoreOpen && (
          <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
            <span className="btn-front">
              <span>Close</span>
            </span>
          </button>
          )}
      </div>
      )}
    </div>
  </>;
}

export default About;
