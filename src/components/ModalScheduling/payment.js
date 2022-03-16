import React from "react";
import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../styles/theme.json";
import util from "../../util";
import { Box, Text, Touchable } from "../../styles";

const PaymentPicker = () => {
  return (
    <>
      <Text bold hasPadding color="dark">
        Como gostaria de pagar?
      </Text>
      <View style={{ paddingHorizontal: 20 }}>
        <Touchable
          height="30px"
          rounded="5px"
          background={util.toAlpha(theme.colors.muted, 5)}
          border={`0.5px solid ${util.toAlpha(theme.colors.muted, 40)}`}
          justify="space-between"
          align="center"
          hasPadding
        >
          <Box>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png",
              }}
              style={{
                width: 30,
                height: 10,
                marginRight: 10,
              }}
            />
            <Text small>4153 **** **** **** 0165</Text>
          </Box>
          <Icon name="cog-outline" color={theme.colors.muted} />
        </Touchable>
      </View>
    </>
  );
};

export default PaymentPicker;
