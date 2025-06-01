import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import Button from '@/components/Button';
import { User, CirclePlus as PlusCircle, MapPin } from 'lucide-react-native';

export default function HomeScreen() {
  const handleOpenMap = () => {
    router.push('/map');
  };

  const handleAddRestroom = () => {
    router.push('/add-restroom');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://i.imgur.com/jxLaLkB.png' }}
            style={styles.logo}
          />
          <Text style={styles.appName}>PottyDash</Text>
        </View>
        <View style={styles.userIconContainer}>
          <User color={Colors.light.primary} size={24} />
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to PottyDash!</Text>
        <Text style={styles.subText}>Find clean restrooms near you, no matter where you are.</Text>

        <View style={styles.actionButtonsContainer}>
          <Button
            title="Open Map"
            onPress={handleOpenMap}
            variant="primary"
            size="large"
            style={styles.actionButton}
            icon={<MapPin color="white" size={20} />}
          />
          
          <Button
            title="Add Restroom"
            onPress={handleAddRestroom}
            variant="outline"
            size="large"
            style={styles.actionButton}
            icon={<PlusCircle color={Colors.light.primary} size={20} />}
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>Did You Know?</Text>
          <Text style={styles.infoCardText}>
            The average person uses a restroom 6-8 times per day. 
            PottyDash helps you find clean, accessible facilities wherever you go!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.spacing.l,
    paddingTop: Layout.spacing.l,
    paddingBottom: Layout.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: Layout.spacing.s,
  },
  appName: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    color: Colors.light.primary,
  },
  userIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.primaryLight + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: Layout.spacing.l,
  },
  welcomeText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 28,
    color: Colors.light.text,
    marginBottom: Layout.spacing.s,
  },
  subText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: Colors.light.textSecondary,
    marginBottom: Layout.spacing.xl,
  },
  actionButtonsContainer: {
    marginBottom: Layout.spacing.xl,
  },
  actionButton: {
    marginBottom: Layout.spacing.m,
  },
  infoCard: {
    backgroundColor: Colors.light.card,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.l,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  infoCardTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: Colors.light.text,
    marginBottom: Layout.spacing.s,
  },
  infoCardText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: Colors.light.textSecondary,
    lineHeight: 24,
  },
});