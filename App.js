/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Text, View, TextInput} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map((word) => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
}

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
};

const App = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
      <PizzaTranslator />
    </>
  );
};

export default App;
