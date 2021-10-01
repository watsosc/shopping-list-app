import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { Text, TextInput, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  const [text, setText] = React.useState("");
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleText = (text : string) => {
    console.log("Thanks for updating the text!");
    setText(text);
  }
  
  return (
    <View>
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

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  getStartedContainer: {
    alignItems: 'stretch',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
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
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
