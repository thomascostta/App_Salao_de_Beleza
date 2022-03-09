import React from 'react';
import { FlatList } from 'react-native';
import Header from '../Header';

const Home = () => {
    return (
        <FlatList
            ListEmptyComponent={Header}
            data={[]}
        />
    )
}

export default Home;