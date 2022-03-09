import React from 'react';
import { Text } from 'react-native-paper';
import { Cover, GradientView } from '../../styles';

const Header = () => {
    return (
        <Cover
            image="http://barbershopsh.com.br/wp-content/uploads/2018/04/1-1280x690.jpg"
            width="100%"
            height="300px"
        >
            <GradientView colors={['#21232F33', '#21232FE6']}>

            </GradientView>
        </Cover>)
};

export default Header;