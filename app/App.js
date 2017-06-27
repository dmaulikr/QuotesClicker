import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class App extends React.Component {
  state = {
    arrayIndex: 0,
    quotes: ["hello", "what's up", "bye"],
    input: ""
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
      inputQuote: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.changeText} style={styles.output}>
          {this.state.quotes[this.state.arrayIndex]}
        </Text>
        <TextInput
          ref="newQuotes"
          style={styles.input}
          placeholder="Enter a quote you'd like to add"
          keyboardAppearance="dark"
          onChangeText={text => this.updateText(text)}
          onSubmitEditing={this.addText}
          returnKeyType="send"
          value={this.state.inputQuote}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  output: {
    fontSize: 50,
    color: "blue"
  }
});
