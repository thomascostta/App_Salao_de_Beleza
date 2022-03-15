import React from "react";
import { Dimensions, View, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ModalHeader from "./header";
import Resume from "./resume";
import DateTime from "./dateTime";
import SpecialistsPicker from "./specialists";
import ModalSpecialists from "./specialists/modalSpecialists";

const ModalScheduling = (isVisible) => {
  return (
    <Modal
      // isVisible={isVisible}
      style={{
        width: "100%",
        height: "100%",
        padding: 0,
      }}
    >
      <>
        <ScrollView
          style={{
            backgroundColor: "#ffffff",
          }}
          stickyHeaderIndices={[1]} //Fixação de um elemento do Array
        >
          <ModalHeader />
          <Resume />
          <DateTime />
          <SpecialistsPicker />
        </ScrollView>
        <ModalSpecialists />
      </>
    </Modal>
  );
};

export default ModalScheduling;
