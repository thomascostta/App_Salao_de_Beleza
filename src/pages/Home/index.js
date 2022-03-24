import React from "react";
import { FlatList, View, Image } from "react-native";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import theme from "../../styles/theme.json";
import util from "../../util";
import Service from "../../components/Service";
import ModalScheduling from "../../components/ModalScheduling";
import ModalSpecialists from "../../components/ModalScheduling/specialists/modalSpecialists";

const Home = () => {
  const { services } = useSelector((state) => state.salao);

  const renderItem = ({ item }) => {
    return <Service services={item} key={item} />;
  };

  return (
    <>
      <FlatList
        style={{
          backgroundColor: util.toAlpha(theme.colors.muted, 10),
        }}
        ListHeaderComponent={Header}
        data={services}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <ModalScheduling /> */}
      {/* <ModalSpecialists /> */}
    </>
  );
};

export default Home;
