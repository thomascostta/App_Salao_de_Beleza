import React from 'react';
import { FlatList } from 'react-native';
import Header from '../Header';
import theme from '../../styles/theme.json';
import util from '../../util';

const Home = () => {
    return (
        <FlatList
            stylee={{
                backgroundColor: util.toAlpha(theme.color.muted, 10)
            }}
            ListEmptyComponent={Header}
            data={[]}
        />
    )
}

export default Home;