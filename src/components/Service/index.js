import React from "react";
import { Image } from "react-native";
import { Text, Touchable, Box, Button } from "../../styles";
import { useDispatch } from "react-redux";
import { updateScheduling } from "../../store/modules/salao/actions";

const Service = ({ service }) => {
  const dispatch = useDispatch();

  const currencyFormat = (num) => {
    return "R$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <Touchable height="100px" hasPadding align="center" background="light">
      <Image
        source={{ uri: service.image }}
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
          {service.corte}
        </Text>
        <Text small>
          {currencyFormat(service.valor)} • {service.time} min
        </Text>
      </Box>
      <Box>
        <Button
          icon="clock-check-outline"
          background="success"
          mode="contained"
          onPress={() =>
            dispatch(
              updateScheduling({
                servicoId: service.id,
                modalAgendamento: true,
              })
            )
          }
        >
          AGENDAR
        </Button>
      </Box>
    </Touchable>
  );
};

export default Service;
