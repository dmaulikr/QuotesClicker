import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Button
} from "react-native";

export default class App extends React.Component {
  state = {
    arrayIndex: 0,
    quotes: ["hello", "what's up", "bye", "yeet", "yuh yuh"],
    input: "",
    wantsToAddText: false
  };

  promptAddText = () => {
    this.setState({
      ...this.state,
      wantsToAddText: true
    });
  };

  changeText = () => {
    if (this.state.arrayIndex === this.state.quotes.length - 1) {
      this.setState({
        arrayIndex: 0
      });
    } else {
      this.setState({
        arrayIndex: this.state.arrayIndex + 1
      });
    }
  };

  changeRandomText = () => {
    this.setState({
      ...this.state,
      arrayIndex: Math.floor(Math.random() * this.state.quotes.length)
    });
  };

  updateText = text => {
    this.setState({
      ...this.state,
      inputQuote: text
    });
  };

  addText = () => {
    newQuotes = this.state.quotes;
    newQuotes.push(this.state.inputQuote);
    this.refs.newQuotes.value = "";
    this.setState({
      ...this.state,
      quotes: newQuotes,
      inputQuote: "",
      wantsToAddText: false
    });
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.output}>
          {this.state.quotes[this.state.arrayIndex]}
        </Text>
        {this.state.wantsToAddText === false &&
          <Button
            title="Add Quote"
            styles={styles.input}
            onPress={this.promptAddText}
          />}
        {this.state.wantsToAddText === true &&
          <TextInput
            ref="newQuotes"
            style={styles.input}
            placeholder="Enter a quote you'd like to add"
            keyboardAppearance="dark"
            onChangeText={text => this.updateText(text)}
            onSubmitEditing={this.addText}
            returnKeyType="send"
            value={this.state.inputQuote}
          />}
        <Button
          title="Next Quote"
          styles={styles.input}
          onPress={this.changeText}
        />
        <Button
          title="Random Quote"
          styles={styles.input}
          onPress={this.changeRandomText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    margin: 15,
    height: 40,
    backgroundColor: "white",
    borderColor: "#7a42f4",
    borderWidth: 1,
    padding: 3
  },
  output: {
    fontSize: 50,
    color: "blue"
  }
});
