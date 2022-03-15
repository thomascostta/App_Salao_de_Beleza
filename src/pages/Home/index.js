import React from "react";
import { FlatList } from "react-native";

import Header from "../../components/Header";
import theme from "../../styles/theme.json";
import util from "../../util";
import Service from "../../components/Service";
import ModalScheduling from "../../components/ModalScheduling";

const Home = () => {
  return (
    <>
      <FlatList
        style={{
          backgroundColor: util.toAlpha(theme.colors.muted, 10),
        }}
        ListHeaderComponent={Header}
        data={[1, 2, 3, 4, 5]}
        renderItem={(item) => <Service key={item} />}
        keyExtractor={(item) => item}
      />
      <ModalScheduling />
    </>
  );
};

export default Home;
