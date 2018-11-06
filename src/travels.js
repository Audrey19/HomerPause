import React from "react";

const travels = props => (
  <figure>
    <img src={props.photo} alt={props.country} />
    <figcaption>
      <p>{props.destination}</p>
      <p>{props.country}</p>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
  );

const travels = () => (
  <div>
    {quotes.map(quote => (
      <img src={quote.image} />
    ))}
  </div>
);

export default travels;
