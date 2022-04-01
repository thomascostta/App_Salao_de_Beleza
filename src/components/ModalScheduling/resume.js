import React from "react";
import { Image } from "react-native";
import { Box, Title, Text, Cover, Spacer } from "../../styles";
import theme from "../../styles/theme.json";
import util from "../../util";

const Resume = ({ agendamento, services }) => {
  const serviceArray = services.filter(
    (item) => item.id === agendamento.servicoId
  );
  const [service] = serviceArray;

  const currencyFormat = (num) => {
    return "R$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <Box
      align="center"
      hasPadding
      background={util.toAlpha(theme.colors.muted, 5)}
    >
      {/* <Cover
        width="80px"
        heigth="80px"
        image="https://www.minhatatuagem.com/wp-content/uploads/2021/06/corte-degrade-masculino-2.jpg"
      // Ajustar aqui
      /> */}
      <Image
        source={{ uri: service.image }}
        style={{
          width: 70,
          height: 70,
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
