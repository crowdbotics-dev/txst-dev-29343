import { CheckBox } from "react-native-elements";
import { Slider } from "react-native-elements";
import { Switch } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <TextInput style={{
      left: 12,
      top: 121,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 262,
      height: 30
    }}></TextInput><Switch style={{
      left: 140,
      top: 271,
      position: "absolute",
      width: 50,
      height: 25,
      transform: "rotate(90deg)"
    }} thumbColor="#c42121"></Switch><Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={11} minimumValue={11} style={{
      position: "absolute",
      left: 53,
      top: 316,
      width: 257,
      height: 80
    }} minimumTrackTintColor="#9f3d3d" maximumTrackTintColor="#66bd41" value={22} step={24}></Slider><CheckBox title="Checkbox Title" style={{
      left: 121,
      top: 454,
      position: "absolute",
      width: 236,
      height: 80
    }}></CheckBox></View>;
};

export default Untitled1;