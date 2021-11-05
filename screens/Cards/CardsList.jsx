import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import getAllCards from "../../services/getAllCards";
import InvestigatorCard from "./InverstigatorCard";
import ArkhamCard from "./ArkhamCard";

function CardsList() {
  const [isLoad, setIsLoad] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    const allCards = await getAllCards();

    setCards(allCards.filter((card) => card.imagesrc !== undefined));
    setIsLoad(true);
  }, []);

  return (
    <Container>
      <>
        <Grid columns={5}>
          <Grid.Row>
            {isLoad
              ? cards.map((card) =>
                  card.type_code === "investigator" ? (
                    <Grid.Column>
                      <InvestigatorCard
                        key={`card-${card.name}`}
                        name={card.name}
                        imagesrc={card.imagesrc}
                      />
                    </Grid.Column>
                  ) : (
                    <Grid.Column>
                      <ArkhamCard
                        key={`card-${card.name}`}
                        name={card.name}
                        imagesrc={card.imagesrc}
                      />
                    </Grid.Column>
                  )
                )
              : null}
          </Grid.Row>{" "}
        </Grid>
      </>
    </Container>
  );
}

export default CardsList;
