import React from "react";

export default function Card(props) {
  console.log(props)
  return (
    <section>
      <img src={props.imageUrl}></img>
      <div className="info">
        <p className="info--location">
          <i class="fa-solid fa-location-dot"></i>
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </p>
        <p className="info--title">{props.title}</p>
        <p className="info--dates">{props.startDate} - {props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </section>
  )
}