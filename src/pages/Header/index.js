import React from 'react';
import { Cover, GradientView, Title, Text, Badge, Box, Touchable } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../styles/theme.json';

const Header = () => {
    return (
        <>
            <Cover
                image="http://barbershopsh.com.br/wp-content/uploads/2018/04/1-1280x690.jpg"
                width="100%"
                height="300px"
            >
                <GradientView
                    colors={['#21232F33', '#21232FE6']}
                    hasPadding
                    justify="flex-end">
                    <Badge
                        color="success">OPEN</Badge>
                    <Title
                        color="light"
                        margimBottom="30px">Barber Shop Rock Bar</Title>
                    <Text color="light">Sampa • 2.1km</Text>
                </GradientView>
            </Cover>
            <Box background="light" align="center">
                <Box hasPadding justify="space-between">
                    <Touchable
                        direction="column"
                        align="center"
                    >
                        <Icon name="phone" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0">Ligar</Text>
                    </Touchable>
                    <Touchable
                        direction="column"
                        align="center"
                    >
                        <Icon name="phone" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0">Ligar</Text>
                    </Touchable>
                    <Touchable
                        direction="column"
                        align="center"
                    >
                        <Icon name="phone" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0">Ligar</Text>
                    </Touchable>
                </Box>
                <Box></Box>
            </Box>
        </>

    );
};

export default Header;