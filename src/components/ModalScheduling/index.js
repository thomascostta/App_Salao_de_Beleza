import React, { useEffect, useRef } from "react";
import { Dimensions, View, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ModalHeader from "./header";
import Resume from "./resume";
import DateTime from "./dateTime";
import SpecialistsPicker from "./specialists";
import ModalSpecialists from "./specialists/modalSpecialists";
import PaymentPicker from "../ModalScheduling/payment";
import { Button, Box } from "../../styles";
import { useSelector } from "react-redux";

const ModalScheduling = () => {
  const { form, agendamento, services } = useSelector((state) => state.salao);
  const modalRef = useRef(null);

  return (
    <Modal
      ref={modalRef}
      visible={form.modalAgendamento}
      style={{
        width: "100%",
        height: "100%",
        padding: 0,
      }}
      animationType="slide"
    >
      <>
        <ScrollView
          style={{
            backgroundColor: "#ffffff",
          }}
          stickyHeaderIndices={[0]} //Fixação de um elemento do Array
        >
          <ModalHeader />
          <Resume agendamento={agendamento} services={services}/>
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
