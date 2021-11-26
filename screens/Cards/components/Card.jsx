import React from "react";
import PropTypes from "prop-types";

function Card({ card }) {
  return (
    <div
      className={`${card.name} transform transition duration-500 hover:scale-110`}
      onClick={() => console.log(card.faction_code)}
    >
      <img
        className="card-wrapper"
        alt={`card-${card.name}`}
        width={200}
        height={300}
        src={`https://arkhamdb.com${card.imagesrc}`}
      />
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    imagesrc: PropTypes.number,
  }).isRequired,
};

export default Card;
