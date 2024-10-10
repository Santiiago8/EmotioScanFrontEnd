import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export const InputComponent = ({ onSubmitText }) => {
    const [text, setText] = useState('');
    const maxLength = 100;
    const [buttonAnim] = useState(new Animated.Value(1))

    const animateButton = () => {
        Animated.sequence([
            Animated.timing(buttonAnim, { toValue: 0.8, duration: 100, useNativeDriver: true }),
            Animated.timing(buttonAnim, { toValue: 1, duration: 100, useNativeDriver: true })
        ]).start()
    }

    const handleSubmit = () => {
        animateButton()
        onSubmitText(text)
        setText('')
    }

  return (
    <LinearGradient
        colors={['#010231', '#1A1B4B']}
        style={styles.container}
    >
        <Text style={styles.prompt}>Escribe algo para analizar:</Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='Ingresa tu texto aqui'
                placeholderTextColor='#8E8E8E'
                maxLength={maxLength}
                value={text}
                onChangeText={setText}
                multiline
            />
        </View>
        <Animated.View style={{ transform: [{ scale: buttonAnim }] }}>
            <TouchableOpacity
                style={[styles.button, text.length === 0 && styles.buttonDisabled]}
                onPress={handleSubmit}
                disabled={text.length === 0}
            >
                <Text style={styles.buttonText}>Analizar</Text>
            </TouchableOpacity>
        </Animated.View>
        <Text style={styles.characterCount}>{text.length}/{maxLength} caracteres</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    prompt: {
      color: '#66EDF8',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    inputContainer: {
      width: '100%',
      backgroundColor: 'rgba(46, 47, 86, 0.3)',
      borderRadius: 15,
      padding: 5,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      minHeight: 100,
      padding: 15,
      color: '#DEE3E9',
      fontSize: 16,
    },
    button: {
      backgroundColor: '#66EDF8',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25,
      elevation: 3,
    },
    buttonDisabled: {
      backgroundColor: '#4A4A6A',
    },
    buttonText: {
      color: '#010231',
      fontSize: 18,
      fontWeight: 'bold',
    },
    characterCount: {
      color: '#DEE3E9',
      marginTop: 15,
      fontSize: 14,
    },
  });