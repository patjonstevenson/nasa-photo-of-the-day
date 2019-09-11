import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default function Photos() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=V9UtTYPcf52FKaTal3ajQScHL7clK2sXfN7N4wzr"
      )
      .then(response => {
        console.log(response);
        setPhoto(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <PhotoCard
      imgUrl={photo.url}
      hdUrl={photo.hdurl}
      date={photo.date}
      explanation={photo.explanation}
      title={photo.title}
    />
  );
}
