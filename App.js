import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { InputComponent } from './components/InputComponent';
import { LoaderComponent } from './components/LoaderComponent';
import ResponseComponent from './components/ResponseComponent';

export default function App() {
  const [step, setStep] = useState('input');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmitText = async (text) => {
    setStep('loading');
    try {
      const response = await fetch('http://192.168.1.19:3000/api/analyze-sentiment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await response.json();
      setResponseMessage(data.message);
      setStep('response');
    } catch (error) {
      setResponseMessage('Error al procesar la solicitud.');
      setStep('response');
    }
  };

  const handleReset = () => {
    setStep('input');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/EmotioScan.png')} style={styles.logo} />
      </View>
      <View style={styles.contentContainer}>
        {step === 'input' && <InputComponent onSubmitText={handleSubmitText} />}
        {step === 'loading' && <LoaderComponent />}
        {step === 'response' && <ResponseComponent message={responseMessage} onReset={handleReset} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010231',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 80,
    
  },
  logo: {
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});


