import * as React from 'react';
import { TextInput } from 'react-native';
import style from './src/components/SearchBar/SearchBar.module.css';

export default function SearchBar() {
    const [text, onChangeText] = React.useState('Useless Text');

    return(
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
    );
}