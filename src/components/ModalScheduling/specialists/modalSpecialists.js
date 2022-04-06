import React, { useState } from "react";
import { View, Image, Dimensions, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Box, Text, Touchable } from "../../../styles";
import dataSpecialist from "../../../data/dataSpecialist.json";
import theme from "../../../styles/theme.json";
import { useDispatch, useSelector } from "react-redux";
import {
  updateModalSpecialist,
  updateCollaboratos,
} from "../../../store/modules/salao/actions";

const ModalSpecialists = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.salao);
  const isVisibleState = form.modalEspecialista;
  const [borderColor, setBorderColor] = useState();

  const toggleModal = () => {
    dispatch(updateModalSpecialist(false));
  };

  const selectedSpecialists = (item) => {
    setBorderColor(item);
    dispatch(updateCollaboratos(item));
    setTimeout(function(){ toggleModal()}, 1000);
   
  };

  return (
    <Modal visible={isVisibleState} animationType="fade" transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#ffffff",
              height: 270,
              width: 380,
              borderRadius: 10,
              elevation: 10,
            }}
          >
            <Box hasPadding direction="column">
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 7 }}>
                  <Text bold color="dark">
                    Selecione o Especialista
                  </Text>
                </View>
                <Touchable onPress={toggleModal} style={{ flex: 1 }}>
                  <Icon name="close" color={theme.colors.dark} size={30} />
                </Touchable>
              </View>
              <Text small>Disponíveis em 20/04/21 (Sex) às 11:30</Text>
              <Box justify="space-around" wrap="wrap" spacing="10px 0 0 0">
                {dataSpecialist.results.map((item) => {
                  return (
                    <Touchable
                      width={(Dimensions.get("window").width - 80) / 4}
                      height="70px"
                      direction="column"
                      align="center"
                      spacing="5px"
                      onPress={() => selectedSpecialists(item)}
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
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSpecialists;
