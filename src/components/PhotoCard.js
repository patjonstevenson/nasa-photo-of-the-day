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
  console.log(
    String(imgUrl)
      .split("?")[0]
      .split("/")[-1]
  );
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
    <CardImg top width="100%" src={imgUrl} alt={title}></CardImg>
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
