/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export default function Why(props) {
  const [readmore, setReadMore] = useState(false);

  return (
    <div className="why-section">
      <h2 className="bold">Why</h2>
      <div className={readmore ? 'readit-block' : ''}>
        <div>
          {props?.description}
        </div>
        <div className="readmore-content">
          {props?.readMoreText}
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
