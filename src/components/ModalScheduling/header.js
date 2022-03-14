import React from "react";
import { View } from "react-native";
import { Touchable, GradientView, Box, Text } from "../../styles";
import theme from "../../styles/theme.json";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ModalHeader = () => {
  return (
    <Box height="70px">
      <GradientView
        colors={[theme.colors.dark, theme.colors.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Box>
          <View>
            <Touchable hasPadding>
              <Icon name="chevron-left" color={theme.colors.light} size={30} />
            </Touchable>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text color="light" margimBottom="3px">
              Finalizar Agendamento
            </Text>
            <Text small color="light">
              Horário, pagamento e especialista
            </Text>
          </View>
        </Box>
      </GradientView>
    </Box>
  );
};

export default ModalHeader;
