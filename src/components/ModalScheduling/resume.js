import React from "react";
import { Image } from "react-native";
import { Box, Title, Text, Spacer } from "../../styles";
import theme from "../../styles/theme.json";
import util from "../../util";

const Resume = ({ service }) => {
  const currencyFormat = (num) => {
    return "R$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <Box
      align="center"
      hasPadding
      background={util.toAlpha(theme.colors.muted, 5)}
    >
      <Image
        source={{ uri: service.image }}
        style={{
          width: 70,
          height: 80,
          borderRadius: 3,
          borderWidth: 2,
          marginHorizontal: 10,
        }}
      />
      <Box direction="column">
        <Title small>{service.corte}</Title>
        <Spacer size="4px" />
        <Text bold> Total: {currencyFormat(service.valor)}</Text>
      </Box>
    </Box>
  );
};

export default Resume;
