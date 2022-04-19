import React, { useEffect, useRef } from "react";
import { Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ModalHeader from "./header";
import Resume from "./resume";
import DateTime from "./dateTime";
import SpecialistsPicker from "./specialists";
import ModalSpecialists from "./specialists/modalSpecialists";
import PaymentPicker from "../ModalScheduling/payment";
import ModalPayment from "../ModalScheduling/payment/ModalPayment";
import { Button, Box } from "../../styles";
import { useSelector } from "react-redux";

const ModalScheduling = () => {
  const { form, agendamento, services, colaboradores, payment } = useSelector(
    (state) => state.salao
  );
  const isVisibleModal = form.modalAgendamento;
  const visibleModalPayment = form.modalPayment;
  const modalRef = useRef(null);

  const serviceArray = services.filter(
    (item) => item.id === agendamento.servicoId
  );
  const [service] = serviceArray; // Destructuring Array

  return (
    <Modal
      ref={modalRef}
      visible={isVisibleModal}
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
          <Resume service={service} />
          <DateTime />
          <SpecialistsPicker
            colaboradores={colaboradores}
            agendamento={agendamento}
          />
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
        <ModalSpecialists />
        <ModalPayment
          visibleModalPayment={visibleModalPayment}
          payment={payment}
        />
      </>
    </Modal>
  );
};

export default ModalScheduling;
