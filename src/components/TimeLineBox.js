import Image from "next/image";

function TimeLineBox(props) {
  return (
    <div className="timeline-box">
      <div className="atb-thumbnail">
        <Image
          src={props?.img}
          alt={props?.title}
          width={props?.imgWidth ?? 50}
          height={props?.imgHeight ?? 50}
          style={{
            // objectFit: "contain",
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <div className="atb-info">
        <h3>{props?.title}</h3>
        <h4>{props?.position}</h4>
        <span className="atb-time">{props?.fromTo}</span>
        <div className="p">{props?.Desc}</div>
      </div>
    </div>
  );
}

export default TimeLineBox;
