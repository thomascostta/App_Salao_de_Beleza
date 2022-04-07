import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../../styles/theme.json";
import util from "../../../util";
import { Text, Touchable } from "../../../styles";
import Checkout from "../checkout";

const PaymentPicker = () => {
  const [selectPayment, setSelectPayment] = useState("App_CredCard");
  console.log("selectPayment  ", selectPayment);

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View>
        <Text bold color="dark">
          Como gostaria de pagar?
        </Text>
      </View>
      <View>
        <Text bold color="dark">
          Pague pelo App
        </Text>
      </View>
      <View>
        <View>
          <Touchable
            height="30px"
            rounded="5px"
            background={util.toAlpha(theme.colors.muted, 5)}
            border={`1px solid ${util.toAlpha(theme.colors.muted, 40)}`}
            align="center"
            hasPadding
            onPress={() => setSelectPayment("App_CredCard")}
          >
            <View
              style={[
                styles.botton,
                {
                  backgroundColor:
                    selectPayment === "App_CredCard"
                      ? theme.colors.success
                      : theme.colors.light,
                },
              ]}
            />
            <Text spacing="5px">Cartão de Crédito</Text>
          </Touchable>
        </View>

        <View style={{ marginTop: 10 }}>
          <Touchable
            height="30px"
            rounded="5px"
            background={util.toAlpha(theme.colors.muted, 5)}
            border={`1px solid ${util.toAlpha(theme.colors.muted, 40)}`}
            align="center"
            hasPadding
            onPress={() => setSelectPayment("App_DebitCard")}
          >
            <View
              style={[
                styles.botton,
                {
                  backgroundColor:
                    selectPayment === "App_DebitCard"
                      ? theme.colors.success
                      : theme.colors.light,
                },
              ]}
            />
            <Text spacing="5px">Cartão de Débito</Text>
          </Touchable>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text bold color="dark">
            Pague na hora
          </Text>
        </View>
        <View>
          <Touchable
            height="30px"
            rounded="5px"
            background={util.toAlpha(theme.colors.muted, 5)}
            border={`1px solid ${util.toAlpha(theme.colors.muted, 40)}`}
            align="center"
            hasPadding
            onPress={() => setSelectPayment("Place_DebitCard")}
          >
            <View
              style={[
                styles.botton,
                {
                  backgroundColor:
                    selectPayment === "Place_DebitCard"
                      ? theme.colors.success
                      : theme.colors.light,
                },
              ]}
            />
            <Text spacing="5px">Cartão de Débito ou Crédito</Text>
          </Touchable>
        </View>
        <View style={{ marginTop: 10 }}>
          <Touchable
            height="30px"
            rounded="5px"
            background={util.toAlpha(theme.colors.muted, 5)}
            border={`1px solid ${util.toAlpha(theme.colors.muted, 40)}`}
            align="center"
            hasPadding
            onPress={() => setSelectPayment("Pay_Cash_On_Place")}
          >
            <View
              style={[
                styles.botton,
                {
                  backgroundColor:
                    selectPayment === "Pay_Cash_On_Place"
                      ? theme.colors.success
                      : theme.colors.light,
                },
              ]}
            />
            <Text spacing="5px">Dinheiro</Text>
          </Touchable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botton: {
    height: 22,
    width: 22,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.light,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});

export default PaymentPicker;
