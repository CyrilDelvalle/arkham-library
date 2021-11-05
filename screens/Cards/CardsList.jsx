import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import getAllCards from "../../services/getAllCards";
import Card from "./Card";
import CardsListWrapper from "./CardsListWrapper";

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
    <Container>
      <CardsListWrapper>
        <Grid columns={5}>
          <Grid.Row>
            {isLoad
              ? cards.map((card) => (
                  <Grid.Column>
                    <Card
                      key={`card-${card.name}`}
                      name={card.name}
                      imagesrc={card.imagesrc}
                    />
                  </Grid.Column>
                ))
              : null}
          </Grid.Row>{" "}
        </Grid>
      </CardsListWrapper>
    </Container>
  );
}

export default CardsList;
