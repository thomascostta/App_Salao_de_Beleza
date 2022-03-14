import React from "react";
import { FlatList } from "react-native";
import { Touchable, Text, Title } from "../../styles";
import util from "../../util";
import theme from "../../styles/theme.json";

const dateTime = () => {
  return (
    <>
      <Text bold color="dark" hasPadding>
        Pra quando você deseja agendar
      </Text>
      <FlatList
        data={["a", "b", "c", "d", "e", "f"]}
        horizontal
        keyExtractor={(item) => item}
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
          >
            <Text small>Dom</Text>
            <Title small>19</Title>
            <Text small>Abril</Text>
          </Touchable>
        )}
      />
    </>
  );
};

export default dateTime;
