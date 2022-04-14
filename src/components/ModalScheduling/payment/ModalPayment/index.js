import React, { useState } from "react";
import { View, Dimensions, TextInput, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import theme from "../../../../styles/theme.json";
import {
  updateModalPaymentMethod,
  updatePaymentMethod,
} from "../../../../store/modules/salao/actions";
import { Box, Title, Button, Text, Touchable } from "../../../../styles/index";

export default function ModalPayment({ visibleModalPayment, payment }) {
  const dispatch = useDispatch();
  const typePayment = payment.cardType?.paymentLocation;
  const namePayment = payment.cardType?.name;
  const { width, height } = Dimensions.get("window");
  const [onFocusNumberCard, setOnFocusNumberCard] = useState(false);
  const [onFocusExpiration, setOnFocusExpiration] = useState(false);
  const [onFocusVerification, setOnFocusVerification] = useState(false);
  const [onFocusCardName, setOnFocusCardName] = useState(false);

  const schema = yup.object().shape({
    numberCard: yup
      .number()
      .typeError("Apenas números sem os pontos")
      .integer()
      .required("Obrigatório"),
    expiration: yup
      .number()
      .typeError("Apenas números sem os pontos")
      .integer()
      .required("Obrigatório"),
    verificationCode: yup
      .number()
      .typeError("Apenas números sem os pontos")
      .integer()
      .required("Obrigatório"),
    cardName: yup.string().required("Obrigatório"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { name, ref } = register(
    "numberCard",
    "expiration",
    "verificationCode",
    "cardName"
  );

  const toggleModalClose = () => {
    dispatch(updateModalPaymentMethod(false));
  };

  const onSubmit = (item) => {
    dispatch(updateModalPaymentMethod(false));
    dispatch(
      updatePaymentMethod({
        cardData: {
          typeCard: typePayment,
          numberCard: item.numberCard,
          expiration: item.expiration,
          verificationCode: item.verificationCode,
          cardName: item.cardName.toUpperCase(),
        },
      })
    );
  };

  return (
    <Modal
      isVisible={visibleModalPayment}
      // onBackdropPress={toggleModalClose}
    >
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
                <Title small>{namePayment}</Title>
              </Box>
              <Box flexBox="1">
                <Touchable style={{ flex: 1 }} onPress={toggleModalClose}>
                  <Icon name="close" color={theme.colors.primary} size={35} />
                </Touchable>
              </Box>
            </Box>
            {/*  Input - Número do Cartão */}
            <Box direction="column" spacing="10px 0 0 0">
              <Text margimBottom="0" bold>
                Número do Cartão
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { borderColor: onFocusNumberCard ? "blue" : "#fff" },
                ]}
                ref={ref}
                name={name}
                onFocus={() => setOnFocusNumberCard(true)}
                onBlur={() => setOnFocusNumberCard(false)}
                
                
                
                
                
                onChangeText={(number) => setValue("numberCard", number)}
                placeholder={"0000 0000 0000 0000"}
                keyboardType={"numeric"}
                maxLength={16}
              ></TextInput>
              {errors.numberCard && (
                <Text small color="danger">
                  {errors.numberCard?.message}
                </Text>
              )}
              {/*  //  another way of presenting the text  
              <ErrorMessage
                errors={errors}
                name="numberCard"
                render={({ message }) => (
                  <Text small color="danger">
                    {message}
                  </Text>
                )}
              /> */}
            </Box>
            {/* Input - Validade */}
            <Box spacing="10px 0 0 0">
              <Box direction="column" spacing="0 0 0 0">
                <Text margimBottom="0" bold>
                  Validade
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    { borderColor: onFocusExpiration ? "blue" : "#fff" },
                  ]}
                  onFocus={() => setOnFocusExpiration(true)}
                  onBlur={() => setOnFocusExpiration(false)}
                  ref={ref}
                  name={name}
                  onChangeText={(number) => setValue("expiration", number)}
                  placeholder={"01/30"}
                  keyboardType={"numeric"}
                  maxLength={4}
                ></TextInput>
                {errors.expiration && (
                  <Text small color="danger">
                    {errors.expiration?.message}
                  </Text>
                )}
              </Box>
              {/* Input - CVC */}
              <Box direction="column" spacing="0 0 0 0">
                <Text margimBottom="0" bold>
                  CVC
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    { borderColor: onFocusVerification ? "blue" : "#fff" },
                  ]}
                  onFocus={() => setOnFocusVerification(true)}
                  onBlur={() => setOnFocusVerification(false)}
                  ref={ref}
                  name={name}
                  onChangeText={(number) =>
                    setValue("verificationCode", number)
                  }
                  placeholder={"000"}
                  keyboardType={"numeric"}
                  maxLength={3}
                  autoCapitalize={"characters"}
                ></TextInput>
                {errors.verificationCode && (
                  <Text small color="danger">
                    {errors.verificationCode?.message}
                  </Text>
                )}
              </Box>
            </Box>
            {/* Input - Nome impresso no cartão */}
            <Box direction="column" spacing="20px 0 0 0">
              <Text margimBottom="0" bold>
                Nome impresso no cartão
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { borderColor: onFocusCardName ? "blue" : "#fff" },
                ]}
                onFocus={() => setOnFocusCardName(true)}
                onBlur={() => setOnFocusCardName(false)}
                ref={ref}
                name={name}
                onChangeText={(text) => setValue("cardName", text)}
                placeholder={"NOME"}
                maxLength={30}
              ></TextInput>
              {errors.cardName && (
                <Text small color="danger">
                  {errors.cardName?.message}
                </Text>
              )}
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
              <Button onPress={handleSubmit(onSubmit)}>
                <Text bold>Salvar</Text>
              </Button>
            </Box>
          </Box>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: "100%",
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
});
