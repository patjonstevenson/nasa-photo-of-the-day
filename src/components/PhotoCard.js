import React from "react";

export default function PhotoCard({ imgUrl, hdUrl, date, explanation, title }) {
  const media =
    String(imgUrl).substr(-3, 3) === "jpg" ||
    String(imgUrl).substr(-4, 4) === "jpeg" ? (
      <a href={hdUrl}>
        <img className="photo" src={imgUrl} alt="NASA photo" />
      </a>
    ) : (
      <iframe width="420" height="315" src={imgUrl}></iframe>
    );

  return (
    <div className="photo-card">
      {media}
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{explanation}</p>
    </div>
  );
}
