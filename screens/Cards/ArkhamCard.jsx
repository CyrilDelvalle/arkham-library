import React from "react";
import PropTypes from "prop-types";

function ArkhamCard({ name, imagesrc }) {
  return (
    <div>
      <img
        alt={`card-${name}`}
        width={150}
        height={200}
        src={`https://arkhamdb.com${imagesrc}`}
      />
    </div>
  );
}

ArkhamCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagesrc: PropTypes.string.isRequired,
};

export default ArkhamCard;
