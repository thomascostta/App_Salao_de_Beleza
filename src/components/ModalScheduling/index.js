import React from "react";
import { Dimensions, View, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ModalHeader from "./header";
import Resume from "./resume";
import DateTime from "./dateTime";
import SpecialistsPicker from "./specialists";
import ModalSpecialists from "./specialists/modalSpecialists";
import PaymentPicker from "../ModalScheduling/payment";
import { Button, Box } from "../../styles";

const ModalScheduling = () => {
  return (
    <Modal
      open={true}
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
          stickyHeaderIndices={[0]} //Fixação de um elemento do Array
        >
          <ModalHeader />
          <Resume />
          <DateTime />
          <SpecialistsPicker />
          <PaymentPicker />
          <Box hasPadding>
            <Button
              icon="check"
              background="primary"
              mode="contained"
              block
              uppercase={false}
            >
              Confirmar meu agendamento
            </Button>
          </Box>
        </ScrollView>
        {/* <ModalSpecialists /> */}
      </>
    </Modal>
  );
};

export default ModalScheduling;
