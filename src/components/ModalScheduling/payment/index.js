import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../../styles/theme.json";
import util from "../../../util";
import { Text, Touchable } from "../../../styles";
import { paymentByApp, paymentOnTheSpot } from "../../../data/paymentMethod";
import { useDispatch } from "react-redux";
import { updatePaymentMethod } from "../../../store/modules/salao/actions";
import Checkout from "../checkout";

const PaymentPicker = () => {
  const dispatch = useDispatch();
  const [selectPayment, setSelectPayment] = useState();
  console.log("selectPayment  ", selectPayment);

  const selectPaymentMethod = (item) => {
    dispatch(updatePaymentMethod(item));
    setSelectPayment(item.id);
  };

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
      <>
        {paymentByApp.map((item) => {
          return (
            <View style={{ marginTop: 10 }} key={item.id}>
              <Touchable
                height="30px"
                rounded="5px"
                background={util.toAlpha(theme.colors.muted, 5)}
                border={`1px solid ${util.toAlpha(theme.colors.muted, 40)}`}
                align="center"
                hasPadding
                onPress={() => selectPaymentMethod(item)}
              >
                <View
                  style={[
                    styles.botton,
                    {
                      backgroundColor:
                        selectPayment === item.id
                          ? theme.colors.success
                          : theme.colors.light,
                    },
                  ]}
                />
                <Text spacing="5px">{item.name}</Text>
              </Touchable>
            </View>
          );
        })}
      </>

      <View style={{ marginTop: 20 }}>
        <Text bold color="dark">
          Pague na hora
        </Text>
      </View>

      <>
        {paymentOnTheSpot.map((item) => {
          return (
            <View style={{ marginTop: 10 }} key={item.id}>
              <Touchable
                height="30px"
                rounded="5px"
                background={util.toAlpha(theme.colors.muted, 5)}
                border={`1px solid ${util.toAlpha(theme.colors.muted, 40)}`}
                align="center"
                hasPadding
                onPress={() => selectPaymentMethod(item)}
              >
                <View
                  style={[
                    styles.botton,
                    {
                      backgroundColor:
                        selectPayment === item.id
                          ? theme.colors.success
                          : theme.colors.light,
                    },
                  ]}
                />
                <Text spacing="5px">{item.name}</Text>
              </Touchable>
            </View>
          );
        })}
      </>
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
