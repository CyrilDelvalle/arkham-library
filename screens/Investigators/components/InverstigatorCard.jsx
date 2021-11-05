import React from "react";
import PropTypes from "prop-types";
import InvestigatorCardWrapper from "./InvestigatorCardWrapper";

function InverstigatorCard({ name, imagesrc }) {
  return (
    <InvestigatorCardWrapper>
      <img
        className="card-wrapper"
        alt={`card-${name}`}
        width={200}
        height={150}
        src={`https://arkhamdb.com${imagesrc}`}
      />
    </InvestigatorCardWrapper>
  );
}

InverstigatorCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagesrc: PropTypes.string.isRequired,
};

export default InverstigatorCard;
