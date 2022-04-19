import React from "react";
import { Image, View } from "react-native";
import { useDispatch } from "react-redux";
import { Box, Text, Cover, Button } from "../../../styles";
import { data } from "../../../data/dataSpecialist.json";
import theme from "../../../styles/theme.json";
import { updateModalSpecialist } from "../../../store/modules/salao/actions";

const SpecialistsPicker = ({ colaboradores, agendamento }) => {
  const dispatch = useDispatch();

  const changeCollaborators = () => {
    dispatch(updateModalSpecialist(true));
  };

  return (
    <>
      <Text bold color="dark" spacing="20px 20px 0 20px">
        Selecione um especialista?
      </Text>
      <Box hasPadding>
        <Box align="center">
          <Image
            source={{ uri: colaboradores?.picture?.large }}
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
              borderWidth: 2,
              marginHorizontal: 10,
            }}
          />
          <Text small bold>
            {colaboradores?.name?.first ? colaboradores?.name?.first : "Vazio"}
          </Text>
        </Box>
        <Box>
          <Button
            uppercase={false}
            textColor="muted"
            background={theme.colors.light}
            border
            mode="contained"
            block
            onPress={changeCollaborators}
            disabled={
              agendamento.timeOfDay === null || agendamento.date === null
                ? true
                : false
            }
          >
            Escolher cabeleleiro
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SpecialistsPicker;
