import React, { useState, useEffect } from "react";
import getAllCards from "../../services/getAllCards";
import Card from "./components/Card";

function CardsList() {
  const [isLoad, setIsLoad] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    const allCards = await getAllCards();

    setCards(
      allCards.filter(
        (card) =>
          card.imagesrc !== undefined && card.type_code !== "investigator"
      )
    );
    setIsLoad(true);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 grid grid-cols-5 grid-rows-3 gap-4 mx-8">
      {isLoad
        ? cards.map((card) => <Card key={`card-${card.name}`} card={card} />)
        : null}
    </div>
  );
}

export default CardsList;
