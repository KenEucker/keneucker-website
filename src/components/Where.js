/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import TimeLineBox from "./TimeLineBox";
import { useState } from "react";

export default function How() {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  return (
    <div className="where-section">
      <div className="timeline">
        <h2 className="bold">Where</h2>
        <div className="about-flex">
          <div className="about-col">
            <TimeLineBox
              img={"/img/nerdery_logo.png"}
              title={"Nerdery"}
              position={"Senior Software Engineer"}
              fromTo={"June 2021 - January 2023"}
              Desc={readMoreOpen &&
                <p>
                  My last position as a full-time Senior Software Engineer with the Nerdery, remotely based out of Nevada, ended in early 2023 due to economy based layoffs. I contributed to architecture design, management, development, and more. While working at the Nerdery I was assigned to large system projects for fortune 100 companies, implementing MonoRepos and DevOps solutions in addition to code features on full stack nodejs projects using Angular and VueJs.
                </p>
              }
            />
          </div>
          <div className="about-col">
            <TimeLineBox
              img={"/img/biketag-logo-1-medium.png"}
              title={"BikeTag.Org"}
              position={""}
              fromTo={"March 2018 - Present"}
              Desc={readMoreOpen &&
                <p>
                  BikeTag.Org is an open-source project that I started with a friend back in 2018 after they approached me with an app idea. The idea was simple: create a tool to play the game of BikeTag easier than it was currently being played. So that year we launched a tool that uploaded two images (found it tag, new mystery location) and provided fields for credit and a hint for the next round. That project continues to evolve and we have successfully scaled the project to include 50 cities across the world including: Indianapolis, Indiana, Inverness, Scotland, and Vienna, Austria! I started this endeavor as an entirely open source project. You can see how that project is <a href="https://github.com/KenEucker/biketag-vue/issues">managed on GitHub, here.</a>
                </p>
              }
            />
          </div>
          <div className="about-col">
            <TimeLineBox
              img={"/img/Burning_Mandala.png"}
              title={"Burning Man Project"}
              position={"Black Rock Ranger"}
              fromTo={"Aug 2019 - Present"}
              Desc={readMoreOpen &&
                <p>
                  I became a Black Rock Ranger in 2019 to be part of the peer support team for Burning Man Project events focusing on emergency response, harm reduction, and de-escalation, as well as empowerment and support, in Gerlach, Nevada, and worldwide. I began Rangering at Portland's Regional Burning Man event in 2016 -- an event in my own backyard. I moved to Gerlach, Nevada, to Ranger full-time in the area with both the Black Rock City Department of Public Works as well as Black Rock Desert Nevada Operations.<br/><br/>
                  As a Ranger, a participant, I walk around event spaces and engage with friends, some of whom I'm meeting for the first time, building upon a history of social capital for which participants can trust and depend on to be available for aid at any time.<br/><br/>
                  <a href="https://rangers.burningman.org/what-do-rangers-do/" alt="what do rangers do?">not a cop ~ )'( ~ not your mom</a>
                </p>
              }
            />
          </div>
          <div className="about-col">
            <TimeLineBox
              img={"/img/shift-logo.jpg"}
              title={"Shift2Bikes"}
              position={"Board Member, Committee Member of the Code of Conduct committee Board Member"}
              fromTo={"July 2018 - May 2021 - 2 yrs 11 mos"}
              Desc={readMoreOpen &&
                <p>
                Member on the board of directors of the shift2bikes organization. As a board and committee member, I assisted with the creation and implementation of the bylaws and Code of Conduct. Remotely, I mostly participate in board meetings and help with organizing on different committees.
                </p>
              }
            />
          </div>
          {!readMoreOpen && (
              <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
                <span className="btn-front">
                  <span>Read More</span>
                </span>
              </button>
              )}
          {readMoreOpen && (
            <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
              <span className="btn-front">
                <span>Close</span>
              </span>
            </button>
            )}
        </div>
      </div>
    </div>
  );
}
