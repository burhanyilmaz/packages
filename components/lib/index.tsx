import React from 'react';
import { View, Text, Image } from 'react-native';

interface ICard {
  title: string;
}

const Card = ({ title }: ICard) => {
  return (
    <View>
       <Text>{title}</Text>
    </View>
  )
}

interface IRoundedAvatar {
  uri: string;
  size: number;
}

const Avatar = ({ uri, size }: IRoundedAvatar) => {
  return (
    <Image source={{ uri }} style={{
      width: size,
      height: size,
      borderRadius: size / 2,
    }}/>
  );
}

interface ISpace {
  value: number;
}

const Space = ({ value }: ISpace) => {
  return <View style={{ width: 0, height: 0, marginTop: value }} />
}

export {
  Card,
  Space,
  Avatar
};