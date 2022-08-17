import { CheckBox } from "react-native-elements";
import { RadioGroup } from "react-native-radio-buttons-group";
import { Slider } from "react-native-elements";
import { Switch } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: "#2424a9",
    padding: 10,
    position: "relative",
    height: "100%"
  }}>
      <TextInput style={{
      left: 33,
      top: 117,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 324,
      height: 30
    }}></TextInput><Switch style={{
      left: 77,
      top: 282,
      position: "absolute",
      width: 150,
      height: 25,
      transform: "rotate(90deg)",
      backgroundColor: "#ad0f0f"
    }}></Switch><Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0} style={{
      left: -20,
      top: 178,
      position: "absolute",
      width: 3300,
      height: 85
    }}></Slider><RadioGroup radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="row" style={{
      left: 39,
      top: 420,
      position: "absolute"
    }}></RadioGroup><CheckBox title="correct box" style={{
      left: 92,
      top: 28,
      position: "absolute"
    }} size={32}></CheckBox></View>;
};

export default Untitled1;