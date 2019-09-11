import React from "react";

export default function PhotoCard({ imgUrl, hdUrl, date, explanation, title }) {
  return (
    <div className="photo-card">
      <a href={hdUrl}>
        <img className="photo" src={imgUrl} alt="NASA photo" />
      </a>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{explanation}</p>
    </div>
  );
}
