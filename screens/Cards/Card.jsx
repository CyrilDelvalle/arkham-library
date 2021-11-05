import React from "react";
import PropTypes from "prop-types";

function Card({ name, imagesrc }) {
  return (
    <img
      alt={`card-${name}`}
      width={150}
      height={200}
      src={`https://arkhamdb.com${imagesrc}`}
    />
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imagesrc: PropTypes.string.isRequired,
};

export default Card;
