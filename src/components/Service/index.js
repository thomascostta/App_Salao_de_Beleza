import React from "react";
import { Text, Touchable, Box, Cover, Title, Button } from "../../styles";

const Service = (key) => {
  return (
    <Touchable key={key} height="100px" hasPadding align="center" background="light">
      <Cover image="https://static1.fiquediva.com.br/articles/4/18/69/4/@/144160-o-falso-moicano-no-cabelo-masculino-e-um-article_gallery_portrait-2.jpg" />
      <Box direction="column">
        <Text bold color="dark">
          Corte de cabelo
        </Text>
        <Text small>R$ 30,00 • 30 minutos</Text>
      </Box>
      <Box>
        <Button
          icon="clock-check-outline"
          background="success"
          mode="contained"
        >
          AGENDAR
        </Button>
      </Box>
    </Touchable>
  );
};

export default Service;
