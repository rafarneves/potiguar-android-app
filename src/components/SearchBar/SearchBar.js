import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function SearchBar() {
    const [text, onChangeText] = React.useState('');

    return(
        <TextInput
            style={styles.input}
            placeholder="Busque aqui o seu produto"
            onChangeText={onChangeText}
            value={text}
        />
    );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 40,
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 10
  }
})