import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import Button from '@/components/Button';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.emoji}>🧻</Text>
        <Text style={styles.title}>Page Not Found</Text>
        <Text style={styles.message}>
          Looks like this page has been flushed away!
        </Text>
        <Link href="/" asChild>
          <Button
            title="Go to Home Screen"
            onPress={() => {}}
            variant="primary"
            size="large"
            style={styles.button}
          />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  emoji: {
    fontSize: 64,
    marginBottom: Layout.spacing.l,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
    color: Colors.light.text,
    marginBottom: Layout.spacing.m,
  },
  message: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    color: Colors.light.textSecondary,
    textAlign: 'center',
    marginBottom: Layout.spacing.xl,
  },
  button: {
    minWidth: 200,
  },
});