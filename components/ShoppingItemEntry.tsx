import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, TextInput, View } from './Themed';

export default function ShoppingItemEntry() {
  const [text, setText] = React.useState("");
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleText = (text : string) => {
    console.log("Thanks for updating the text!");
    setText(text);
  }

  return (
    <View style={styles.getStartedContainer}>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        Write something here:
      </Text>

      <TextInput
        style={[styles.getStartedInput, { borderBottomColor: focused ? 'rgba(0,0,255,0.6)' : 'rgba(0,0,0,1.0)' }]}
        lightColor="rgba(0,0,0,0.6)"
        darkColor="rgba(255,255,255,0.7)"
        placeholder="Write in me"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={text}
        onChangeText={handleText}
        selectTextOnFocus={true}
        underlineColorAndroid="transparent"/>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'stretch',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'left',
  },
  getStartedInput: {
    fontSize: 17,
    textAlign: 'left',
    borderBottomWidth: 1,
    padding: 10,
  },
});