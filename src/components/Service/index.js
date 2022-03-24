import React from "react";
import { Image } from "react-native";
import { Text, Touchable, Box, Button } from "../../styles";
import moment from "moment";

const Service = ({ services }) => {

  const currencyFormat = (num) => {
    return "R$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <Touchable height="100px" hasPadding align="center" background="light">
      <Image
        source={{ uri: services.image }}
        style={{
          width: 60,
          height: 70,
          borderRadius: 3,
          borderWidth: 2,
          marginHorizontal: 10,
        }}
      />
      <Box direction="column" hasPadding>
        <Text bold color="dark">
          {services.corte}
        </Text>
        <Text small>
          {currencyFormat(services.valor)} • {services.time} min
        </Text>
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
