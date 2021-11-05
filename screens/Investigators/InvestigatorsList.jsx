import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import getAllCards from "../../services/getAllCards";
import InvestigatorCard from "./InverstigatorCard";

function InvestigatorsList() {
  const [isLoad, setIsLoad] = useState(false);
  const [investigators, setInvestigators] = useState([]);

  useEffect(async () => {
    const allCards = await getAllCards();

    setInvestigators(allCards.filter((card) => card.imagesrc !== undefined && card.type_code === "investigator"));
    setIsLoad(true);
  }, []);

  return (
    <Container>
      <>
        <Grid columns={5}>
          <Grid.Row>
            {isLoad
              ? investigators.map((card) =>
                    <Grid.Column>
                      <InvestigatorCard
                        key={`investigator-${card.name}`}
                        name={card.name}
                        imagesrc={card.imagesrc}
                      />
                    </Grid.Column>
                  )
              : null}
          </Grid.Row>
        </Grid>
      </>
    </Container>
  );
}

export default InvestigatorsList;
