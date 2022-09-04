import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../components/Button';
import {optionsCard} from '../../data';

export function Home() {
  const [optionChecked, setOptionChecked] = useState(0);

  return (
    <View style={styles.container}>
      {optionsCard.map(option => (
        <Button
          key={option.id}
          title={option.name}
          onCheck={() => setOptionChecked(option.id)}
          checked={option.id === optionChecked}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#292938',

    paddingHorizontal: 20,
  },
});
