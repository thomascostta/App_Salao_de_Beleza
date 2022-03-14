import React from "react";
import { Box, Title, Text, Cover, Spacer } from "../../styles";
import theme from "../../styles/theme.json";
import util from "../../util";

const Resume = () => {
  return (
    <Box align="center" hasPadding background={util.toAlpha(theme.colors.muted, 5)}>
      <Cover
        width="80px"
        heigth="80px"
        image="https://www.minhatatuagem.com/wp-content/uploads/2021/06/corte-degrade-masculino-2.jpg"
      />
      <Box direction="column">
        <Title small >Corte de Cabelo</Title>
        <Spacer size="4px"/>
        <Text small> Total: R$ 45,00</Text>
      </Box>
    </Box>
  );
};

export default Resume;
