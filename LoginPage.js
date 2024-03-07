import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

function App() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = () => {
    if (loginUsername === 'ar' && loginPassword === '12') {
      Alert.alert('Login successful!');
    } else {
      Alert.alert('Invalid username or password.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 20 }}>
        <Text>Login</Text>
        <TextInput
          placeholder="Username"
          value={loginUsername}
          onChangeText={text => setLoginUsername(text)}
          style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Password"
          value={loginPassword}
          onChangeText={text => setLoginPassword(text)}
          secureTextEntry={true}
          style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

export default App;
