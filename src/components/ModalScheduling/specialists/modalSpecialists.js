import React, { useState } from "react";
import { Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-simple-modal";

import { Box, Text, Cover, Button, Touchable } from "../../../styles";
import dataSpecialist from "../../../config/dataSpecialist.json";
import theme from "../../../styles/theme.json";

const ModalSpecialists = () => {
  const [borderColor, setBorderColor] = useState();
  return (
    <Modal open={true}>
      <ScrollView>
        <Box hasPadding direction="column">
          <Text bold color="dark">
            Selecione o Especialista
          </Text>
          <Text small>Disponíveis em 20/04/21 (Sex) às 11:30</Text>
          <Box justify="space-around" wrap="wrap" spacing="10px 0 0 0">
            {dataSpecialist.results.map((item) => {
              return (
                <Touchable
                  width={(Dimensions.get("screen").width - 80) / 4}
                  height="70px"
                  direction="column"
                  align="center"
                  spacing="5px"
                  onPress={() => setBorderColor(item)}
                >
                  <Image
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 50,
                      borderWidth: 4,
                      borderColor:
                        item === borderColor ? theme.colors.primary : null,
                    }}
                    source={{ uri: item.picture.medium }}
                  />
                  <Text bold small>
                    {item.name.first}
                  </Text>
                </Touchable>
              );
            })}
          </Box>
        </Box>
      </ScrollView>
    </Modal>
  );
};

export default ModalSpecialists;
