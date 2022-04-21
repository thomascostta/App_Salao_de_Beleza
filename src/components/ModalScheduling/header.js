import React from "react";
import { View } from "react-native";
import { Touchable, GradientView, Box, Text } from "../../styles";
import theme from "../../styles/theme.json";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { updateScheduling } from "../../store/modules/salao/actions";

const ModalHeader = () => {
  const dispatch = useDispatch();

  return (
    <Box height="70px">
      <GradientView
        colors={[theme.colors.dark, theme.colors.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Box>
          <View>
            <Touchable
              hasPadding
              onPress={() =>
                dispatch(
                  updateScheduling({
                    servicoId: null,
                    modalAgendamento: false,
                  })
                )
              }
            >
              <Icon name="chevron-left" color={theme.colors.light} size={30} />
            </Touchable>
          </View>
          <View style={{ marginTop: 25 }}>
            <Text color="light" bold>
              Voltar
            </Text>
          </View>
        </Box>
      </GradientView>
    </Box>
  );
};

export default ModalHeader;
