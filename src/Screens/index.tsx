import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { Title, Searchbar, Card, Paragraph } from 'react-native-paper';
import { debounce } from 'lodash';
import { useTapedSelector } from '../redux/useTapedSelector';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { SearchType } from './type';
import { fetchRepo } from '../redux/action';

const Search: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState<string[]>([]);
    const { repositories, loading, error } = useTapedSelector((state) => state);

    const dispatch = useDispatch();

    const debouncedFatchData = useCallback(
        debounce((value) => {
            dispatch(fetchRepo(value));
            setResult([...result, value]);
        }, 1000),
        []
    );

    const onChangeSearch = (query: string) => {
        setSearchQuery(query.toLowerCase());
        debouncedFatchData(query);
    };

    const renderItem = (item: { item: SearchType }) => {
        return (
            <Card style={styles.card}>
                <Card.Content>
                    <Title>{item.item?.name}</Title>
                    <Paragraph>Language: {item.item?.language}</Paragraph>
                    <Paragraph>Description: {item.item?.description}</Paragraph>
                </Card.Content>
            </Card>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Title style={styles.title}>Github users search app</Title>
            </View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.input}
            />
            <View style={{ marginBottom: 20 }}>
                <Title style={styles.title}>Search history:</Title>
                {result.map((item, index) => (
                    <Paragraph style={styles.title} key={index}>
                        {item}
                    </Paragraph>
                ))}
            </View>
            {loading ? (
                <Title>Loading....</Title>
            ) : (
                <FlatList
                    data={repositories}
                    renderItem={renderItem}
                    // keyExtractor={(item) => item.id}
                />
            )}
            {error && <Title>{JSON.stringify(error)}</Title>}
        </View>
    );
};

export default Search;
