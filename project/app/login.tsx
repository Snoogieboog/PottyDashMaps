import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import Button from '@/components/Button';

export default function LoginScreen() {
  const handleGoogleSignIn = () => {
    // In a real app, we would implement Google Sign-In
    // For demo purposes, we'll navigate to the main app
    router.replace('/(tabs)');
  };

  const handleSkip = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://i.imgur.com/jxLaLkB.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>PottyDash</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.signInText}>Sign in to PottyDash</Text>
        
        <Button
          title="Sign in with Google"
          onPress={handleGoogleSignIn}
          variant="primary"
          size="large"
          style={styles.googleButton}
        />
        
        <TouchableOpacity
          onPress={handleSkip}
          style={styles.skipButton}
        >
          <Text style={styles.skipButtonText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: Layout.spacing.xl,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Layout.spacing.xxl * 1.5,
    marginBottom: Layout.spacing.xl,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: Layout.spacing.m,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 28,
    color: Colors.light.primary,
  },
  formContainer: {
    marginTop: Layout.spacing.xl,
    alignItems: 'center',
  },
  signInText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    color: Colors.light.text,
    marginBottom: Layout.spacing.xl,
  },
  googleButton: {
    width: '100%',
    marginBottom: Layout.spacing.xl,
  },
  skipButton: {
    marginTop: Layout.spacing.l,
    padding: Layout.spacing.m,
  },
  skipButtonText: {
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
    color: Colors.light.textSecondary,
  },
});