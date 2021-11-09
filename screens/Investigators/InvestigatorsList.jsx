import React, { useState, useEffect } from "react";
import getAllCards from "../../services/getAllCards";
import InvestigatorCard from "./components/InverstigatorCard";

function InvestigatorsList() {
  const [isLoad, setIsLoad] = useState(false);
  const [investigators, setInvestigators] = useState([]);

  useEffect(async () => {
    const allCards = await getAllCards();

    setInvestigators(
      allCards.filter(
        (card) =>
          card.imagesrc !== undefined && card.type_code === "investigator"
      )
    );
    setIsLoad(true);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 grid grid-cols-5 grid-rows-3 gap-4 mx-8">
      {isLoad
        ? investigators.map((card) => (
            <InvestigatorCard
              key={`investigator-${card.name}`}
              name={card.name}
              imagesrc={card.imagesrc}
            />
          ))
        : null}
    </div>
  );
}

export default InvestigatorsList;
