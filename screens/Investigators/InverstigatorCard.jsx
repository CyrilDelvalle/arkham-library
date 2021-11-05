import React from "react";
import PropTypes from "prop-types";

function InverstigatorCard({ name, imagesrc }) {
  console.log({ name, imagesrc });
  return (
    <div>
      <img
        alt={`card-${name}`}
        width={200}
        height={150}
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
