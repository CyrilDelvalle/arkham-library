import React, { useState, useEffect } from "react";
import getAllCards from "../../services/getAllCards";
import Card from "./components/Card";
import SideBar from "../../components/SideBar/SideBar";

function CardsList() {
  const [isLoad, setIsLoad] = useState(false);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(async () => {
    const allCards = await getAllCards();

    setCards(
      allCards.filter(
        (card) =>
          card.imagesrc !== undefined && card.type_code !== "investigator"
      )
    );
    setFilteredCards(
      allCards.filter(
        (card) =>
          card.imagesrc !== undefined && card.type_code !== "investigator"
      )
    );
    setIsLoad(true);
  }, []);

  const eventhandler = (data) => {
    if (filters.filter((elem) => elem === data).length === 1) {
      setFilters(filters.filter((elem) => elem !== data));
      setFilteredCards(cards.filter((card) => card.faction_code === "mystic"));
    } else {
      setFilters((old) => [...old, data]);
      setFilteredCards(cards.filter((card) => card.faction_code === "mystic"));
    }
  };

  console.log(filteredCards);

  return (
    <div className="flex flex-no-wrap">
      <SideBar filters={eventhandler} />

      <div className="mt-20 ml-12 bg-white dark:bg-gray-800 grid grid-cols-8 grid-rows-3 gap-4 mx-8">
        {isLoad
          ? filteredCards.map((card) => (
              <Card key={card.octgn_id} card={card} />
            ))
          : null}
      </div>
    </div>
  );
}

export default CardsList;
