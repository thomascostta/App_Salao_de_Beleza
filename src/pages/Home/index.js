import React from "react";
import { FlatList, View, Image } from "react-native";

import Header from "../../components/Header";
import theme from "../../styles/theme.json";
import util from "../../util";
import Service from "../../components/Service";
import ModalScheduling from "../../components/ModalScheduling";
import ModalSpecialists from "../../components/ModalScheduling/specialists/modalSpecialists";
import { results } from "../../data/dataHaircut.json";

const Home = () => {
  
  const renderItem = ({ item }) => {
    return <Service item={item} />;
  };

  return (
    <>
      <FlatList
        style={{
          backgroundColor: util.toAlpha(theme.colors.muted, 10),
        }}
        ListHeaderComponent={Header}
        data={results}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <ModalScheduling /> */}
      {/* <ModalSpecialists /> */}
    </>
  );
};

export default Home;
