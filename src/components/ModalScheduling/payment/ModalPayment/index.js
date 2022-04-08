import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import theme from "../../../../styles/theme.json";
import { updateModalPaymentMethod } from "../../../../store/modules/salao/actions";
import {
  Box,
  Title,
  Button,
  TextInput,
  Text,
  Touchable,
} from "../../../../styles/index";

export default function ModalPayment({ visibleModalPayment }) {
  const { width, height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const [numberCard, setNumberCard] = useState();
  const [expiration, setExpiration] = useState();
  const [verificationCode, setVerificationCode] = useState();

  const toggleModal = () => {
    dispatch(updateModalPaymentMethod(false))
    };
    console.log('ModalPayment   -> visibleModalPayment',visibleModalPayment)

  return (
    <Modal isVisible={visibleModalPayment} onBackdropPress={toggleModal}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#ffffff",
            width: width - 30,
            height: height - 200,
            position: "relative",
          }}
        >
          <Box hasPadding direction="column">
            <Box flexBox="0.6">
              <Box flexBox="8">
                <Icon
                  name="credit-card-outline"
                  size={25}
                  color={theme.colors.primary}
                />
                <Title small> Cartão de Crédito</Title>
              </Box>
              <Box flexBox="1">
                <Touchable style={{ flex: 1 }} onPress={toggleModal}>
                  <Icon name="close" color={theme.colors.primary} size={35} />
                </Touchable>
              </Box>
            </Box>

            <Box direction="column" spacing="10px 0 0 0">
              <Text margimBottom="0" bold>
                Número do Cartão
              </Text>
              <TextInput
                value={numberCard}
                onChangeText={(text) => setNumberCard(text)}
                placeholder={"0000 0000 0000 0000"}
                keyboardType={"numeric"}
              ></TextInput>
            </Box>
            <Box spacing="10px 0 0 0">
              <Box direction="column" spacing="0 0 0 0">
                <Text margimBottom="0" bold>
                  Validade
                </Text>
                <TextInput
                  value={expiration}
                  onChangeText={(text) => setExpiration(text)}
                  placeholder={"01/30"}
                  keyboardType={"numeric"}
                ></TextInput>
              </Box>
              <Box direction="column" spacing="0 0 0 0">
                <Text margimBottom="0" bold>
                  CVC
                </Text>
                <TextInput
                  value={verificationCode}
                  onChangeText={(text) => setVerificationCode(text)}
                  placeholder={"000"}
                  keyboardType={"numeric"}
                ></TextInput>
              </Box>
            </Box>
            <Box direction="column" spacing="20px 0 0 0">
              <Text margimBottom="0" bold>
                Nome impresso no cartão
              </Text>
              <TextInput
                value={numberCard}
                onChangeText={(text) => setNumberCard(text)}
                placeholder={"NOME"}
              ></TextInput>
            </Box>
            <Box
              spacing="20px 0 0 0"
              width="100%"
              radius="10px"
              background={theme.colors.success}
              justify="center"
              align="center"
              flexBox="0.5"
            >
              <Button>
                <Text bold>Salvar</Text>
              </Button>
            </Box>
          </Box>
        </View>
      </View>
    </Modal>
  );
}
