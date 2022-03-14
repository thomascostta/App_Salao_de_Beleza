import React from "react";
import { Touchable, GradientView, Box, Text } from "../../styles";
import theme from "../../styles/theme.json";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ModalHeader = () => {
  return (
    <Box height="70px">
      <GradientView colors={[theme.colors.dark, theme.colors.primary]}>
        <Box>
          <Touchable>
            <Icon name="chevron-left" color={theme.colors.light} size={30} />
          </Touchable>
          <Box>
            <Text> Finalizar Agendamento</Text>
            <Text small>Horário, pagamento e especialista</Text>
          </Box>
        </Box>
      </GradientView>
    </Box>
  );
};

export default ModalHeader;
