import { useEffect } from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

export default function SplashScreen() {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.9);

  useEffect(() => {
    // Animation sequence
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to login after 2.5 seconds
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={{ uri: 'https://i.imgur.com/jxLaLkB.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>PottyDash</Text>
        <Text style={styles.tagline}>Know before you go</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: Layout.spacing.m,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 36,
    color: Colors.light.primary,
    marginBottom: Layout.spacing.s,
  },
  tagline: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: Colors.light.textSecondary,
  },
});