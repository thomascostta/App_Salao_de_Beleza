import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Touchable, Text, Title, Box } from "../../styles";
import util from "../../util";
import theme from "../../styles/theme.json";

const dateTime = () => {
  const [selectDate, setSelectDate] = useState();
  const [selectTime, setSelectTime] = useState();

  const selectButtom = (item) => {
    setSelectDate(item);
  };

  const selectButtomTime = (item) => {
    setSelectTime(item);
  };

  return (
    <>
      <Text bold color="dark" hasPadding>
        Pra quando você deseja agendar
      </Text>
      <FlatList
        data={["a", "b", "c", "d", "e", "f"]}
        horizontal
        showsHorizontalScrollIndicator={false} // Tirar a barra de rolagem
        keyExtractor={(item) => item}
        contentContainerStyle={{
          paddingLeft: 20,
          marginRight: 20,
        }}
        renderItem={({ item }) => (
          <Touchable
            key={item}
            width="70px"
            height="80px"
            spacing="0 10px 0 0"
            rounded="10px"
            direction="column"
            justify="center"
            align="center"
            border={`1px solid ${
              item === selectDate
                ? theme.colors.primary
                : util.toAlpha(theme.colors.muted, 20)
            }`}
            background={
              item === selectDate ? theme.colors.primary : theme.colors.light
            }
            onPress={() => selectButtom(item)}
          >
            <Box
              direction="column"
              align="center"
              spacing="10px 0 0 0"
              justify="space-around"
            >
              <Text
                small
                color={item === selectDate ? theme.colors.light : undefined}
              >
                Dom
              </Text>
              <Title
                small
                color={item === selectDate ? theme.colors.light : undefined}
              >
                19
              </Title>
              <Text
                small
                color={item === selectDate ? theme.colors.light : undefined}
              >
                Abril
              </Text>
            </Box>
          </Touchable>
        )}
      />
      <Text bold color="dark" hasPadding>
        Que horas?
      </Text>
      <FlatList
        data={[
          ["14:30", "15:00"],
          ["15:30", "16:00"],
          ["16:30", "17:00"],
          ["17:30"],
        ]}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        renderItem={({ item }) => (
          <Box direction="column" spacing="0 10px 0 0">
            {item.map((time) => (
              <Touchable
                key={time}
                width="100px"
                height="35px"
                spacing="0 0 5px 0"
                rounded="7px"
                justify="center"
                align="center"
                border={`1px solid ${
                  time === selectTime
                    ? theme.colors.primary
                    : util.toAlpha(theme.colors.muted, 20)
                }`}
                background={
                  time === selectTime
                    ? "primary"
                    : "light" 
                }
                onPress={() => selectButtomTime(item)}
              >
                <Text>{time}</Text>
              </Touchable>
            ))}
          </Box>
        )}
      />
    </>
  );
};

export default dateTime;
