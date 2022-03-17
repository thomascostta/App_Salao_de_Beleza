import React from "react";
import { Dimensions, Linking } from "react-native";
import {
  Cover,
  GradientView,
  Title,
  Text,
  Badge,
  Box,
  Touchable,
  Button,
  TextInput,
} from "../../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../styles/theme.json";
import { results } from "../../data/dataHaircut.json";

const Header = () => {
  return (
    <>
      <Cover
        image="http://barbershopsh.com.br/wp-content/uploads/2018/04/1-1280x690.jpg"
        width="100%"
        height="300px"
      >
        <GradientView
          colors={["#21232F33", "#21232FE6"]}
          hasPadding
          justify="flex-end"
        >
          <Badge color="success">OPEN</Badge>
          <Title color="light" margimBottom="30px">
            Barber Shop Rock Bar
          </Title>
          <Text color="light">Sampa • 2.1km</Text>
        </GradientView>
      </Cover>
      <Box
        background="light"
        align="center"
        width={Dimensions.get("window").width}
      >
        <Box justify="space-between" hasPadding>
          <Touchable
            width="65px"
            align="center"
            direction="column"
            onPress={() => Linking.openURL(`tel:11977223377`)}
          >
            <Icon name="phone" size={24} color={theme.colors.muted} />
            <Text small spacing="10px 0 0">
              Ligar
            </Text>
          </Touchable>
          <Touchable
            width="65px"
            align="center"
            direction="column"
            onPress={() => {
              Linking.openURL(`https://goo.gl/maps/ZF1ofYuixFnyuMhi9`);
            }}
          >
            <Icon name="map-marker" size={24} color={theme.colors.muted} />
            <Text small spacing="10px 0 0">
              Visitar
            </Text>
          </Touchable>
          <Touchable width="65px" align="center" direction="column">
            <Icon name="share" size={24} color={theme.colors.muted} />
            <Text small spacing="10px 0 0">
              Share
            </Text>
          </Touchable>
        </Box>
        <Box hasPadding direction="column" align="center" justify="center">
          <Button
            icon="clock-check-outline"
            background="success"
            mode="contained"
            uppercase={false}
          >
            Agendar Agora
          </Button>
          <Text small spacing="10px 0 0">
            Horários disponíveis
          </Text>
        </Box>
      </Box>
      <Box hasPadding direction="column" background="light" spacing="10px 0 0">
        <Title small>Serviços - {results.length}</Title>
        <TextInput placeholder="Bora ficar bonito..."></TextInput>
      </Box>
    </>
  );
};

export default Header;
