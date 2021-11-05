import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "./CardWrapper";

function Card({ card }) {
  return (
    <CardWrapper onClick={() => console.log(card)}>
      <img
        className="card-wrapper"
        alt={`card-${card.name}`}
        width={200}
        height={300}
        src={`https://arkhamdb.com${card.imagesrc}`}
      />
    </CardWrapper>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    imagesrc: PropTypes.number,
  }).isRequired,
};

export default Card;
