import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import Toggle from '@/components/Toggle';
import Button from '@/components/Button';
import { LogOut, Heart, ChevronRight, TriangleAlert as AlertTriangle } from 'lucide-react-native';

export default function ProfileScreen() {
  const [medicalMode, setMedicalMode] = useState(false);
  const [elderMode, setElderMode] = useState(false);
  
  const handleSignOut = () => {
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.userSection}>
          <View style={styles.userIcon}>
            <Text style={styles.userInitial}>U</Text>
          </View>
          <Text style={styles.userEmail}>user@example.com</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accessibility</Text>
          
          <Toggle
            isEnabled={medicalMode}
            onToggle={() => setMedicalMode(!medicalMode)}
            label="Medical Mode"
            description="Priority access to restrooms for medical needs"
          />
          
          <Toggle
            isEnabled={elderMode}
            onToggle={() => setElderMode(!elderMode)}
            label="Elder Mode"
            description="Larger fonts and simplified interface"
          />
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Activity</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Heart size={20} color={Colors.light.primary} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Favorites</Text>
            </View>
            <ChevronRight size={20} color={Colors.light.textSecondary} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <AlertTriangle size={20} color={Colors.light.primary} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Reported Issues</Text>
            </View>
            <ChevronRight size={20} color={Colors.light.textSecondary} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Out"
            onPress={handleSignOut}
            variant="outline"
            size="large"
            icon={<LogOut color={Colors.light.primary} size={20} />}
          />
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
    padding: Layout.spacing.l,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  headerTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    color: Colors.light.text,
  },
  content: {
    flex: 1,
  },
  userSection: {
    alignItems: 'center',
    padding: Layout.spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  userIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.light.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  userInitial: {
    fontFamily: 'Nunito-Bold',
    fontSize: 36,
    color: 'white',
  },
  userEmail: {
    fontFamily: 'Nunito-Medium',
    fontSize: 18,
    color: Colors.light.text,
  },
  section: {
    padding: Layout.spacing.l,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  sectionTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: Colors.light.text,
    marginBottom: Layout.spacing.m,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Layout.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemIcon: {
    marginRight: Layout.spacing.m,
  },
  menuItemText: {
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
    color: Colors.light.text,
  },
  buttonContainer: {
    padding: Layout.spacing.xl,
  },
});