import React from "react";
import { Image, View } from "react-native";
import { Box, Text, Cover, Button } from "../../../styles";
import dataSpecialist from "../../../config/dataSpecialist.json";
import theme from "../../../styles/theme.json";

const SpecialistsPicker = () => {
  return (
    <>
      <Text bold color="dark" spacing="20px 20px 0 20px">
        Gostaria de trocar o(a) especialista?
      </Text>
      <Box hasPadding>
        <Box align="center">
          <Cover
            width="45px"
            height="45px"
            circle
            image="https://a-static.mlcdn.com.br/618x463/quadro-decorativo-barbearia-barber-shop-cabeleireiro-com-moldura-rc005-vital-printer/vitalprinter/b9ea379eca6911eb95144201ac18500e/119299fd3dbda7b5409ad08021735d5f.jpg"
          />
          <Text small>Alessandro Guedes</Text>
        </Box>
        <Box>
          <Button
            uppercase={false}
            textColor="muted"
            background={theme.colors.light}
            border
            mode="contained"
            block
          >
            Trocar especialista
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SpecialistsPicker;
