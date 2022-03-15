import React from "react";
import { ScrollView, Dimensions, View, Modal } from "react-native";
import ModalHeader from "./header";
import Resume from "./resume";
import DateTime from './dateTime';
// import Modal from "react-native-modal";
import { Box, Title, Text, GradientView, Touchable } from "../../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../styles/theme.json";

const ModalScheduling = () => {
  return (
    <Modal
      // isVisible={false}
      style={{
        width: "100%",
        height: "100%",
        padding: 0,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <ModalHeader />
        <Resume />
        <DateTime />
      </ScrollView>
    </Modal>
  );
};

export default ModalScheduling;
