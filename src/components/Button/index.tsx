import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ButtonProps {
  title: string;
  onCheck: () => void;
  checked: boolean;
}

export function Button({title, onCheck, checked}: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: checked ? '#1729D516' : '#292938',
        borderColor: checked ? '#1729D5' : '#292938',
      }}
      onPress={onCheck}>
      <View style={styles.left}>
        <View
          style={{
            ...styles.circle,
            backgroundColor: checked ? '#1729D5' : '#292938',
            borderColor: checked ? '#1729D5' : '#5B5766',
          }}>
          {checked && <View style={styles.innerCircle} />}
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>
      <Image
        source={require('../../assets/images/card-white.png')}
        style={styles.card}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    height: 100,

    borderWidth: 2,
    borderRadius: 12,

    paddingHorizontal: 20,

    marginVertical: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,

    borderRadius: 15,
    borderWidth: 2,

    marginRight: 16,

    justifyContent: 'center',
  },
  innerCircle: {
    width: 12,
    height: 12,

    borderRadius: 6,
    backgroundColor: '#ffff',
    alignSelf: 'center',
  },
  title: {
    color: '#D6D6D7',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    height: 40,
    width: 64,
  },
});
