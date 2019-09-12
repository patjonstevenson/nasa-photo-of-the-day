import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  CardImg
} from "reactstrap";
import YouTube from "react-youtube";

export default function PhotoCard({ imgUrl, hdUrl, date, explanation, title }) {
  const med = String(imgUrl)
    .split(".")
    .includes("youtube") ? (
    <YouTube
      /* Solution to get videoId from url found 
      at https://stackoverflow.com/questions/43891036/extract-video-id-from-youtube-url  */
      videoId={String(imgUrl)
        .split("?")[0]
        .split("/")
        .pop()}
      opts={{ width: "100%" }}
    />
  ) : (
    <a href={hdUrl}>
      <CardImg top width="100%" src={imgUrl} alt={title}></CardImg>
    </a>
  );

  return (
    <Card className="photo-card">
      <CardBody>
        {med}
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{date}</CardSubtitle>
        <CardText>{explanation}</CardText>
      </CardBody>
    </Card>
  );
}
