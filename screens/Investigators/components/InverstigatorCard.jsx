import React from "react";
import PropTypes from "prop-types";

function InverstigatorCard({ name, imagesrc }) {
  return (
    <div>
      <img
        className="card-wrapper transform transition duration-500 hover:scale-110"
        alt={`card-${name}`}
        width={220}
        height={160}
        src={`https://arkhamdb.com${imagesrc}`}
      />
    </div>
  );
}

InverstigatorCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagesrc: PropTypes.string.isRequired,
};

export default InverstigatorCard;
