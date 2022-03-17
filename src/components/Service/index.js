import React from "react";
import { View, Image } from "react-native";
import { Text, Touchable, Box, Cover, Title, Button } from "../../styles";


const Service = ({item}) => {
  return (
      <Touchable
        key={item.id}
        height="100px"
        hasPadding
        align="center"
        background="light"
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 60, height: 70, borderRadius: 3, borderWidth: 2, marginHorizontal:10 }}
        />
        {/* <Cover image="https://static1.fiquediva.com.br/articles/4/18/69/4/@/144160-o-falso-moicano-no-cabelo-masculino-e-um-article_gallery_portrait-2.jpg" /> */}
        <Box direction="column" hasPadding>
          <Text bold color="dark">
            {item.corte}
          </Text>
          <Text small>{item.valor} • 30 minutos</Text>
        </Box>
        <Box>
          <Button
            icon="clock-check-outline"
            background="success"
            mode="contained"
          >
            AGENDAR
          </Button>
        </Box>
      </Touchable>
  );
};

export default Service;
