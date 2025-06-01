import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  TextInput,
  Switch,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity
} from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import Button from '@/components/Button';
import { X } from 'lucide-react-native';

export default function AddRestroomScreen() {
  const [restroomName, setRestroomName] = useState('');
  const [location, setLocation] = useState('');
  const [openHours, setOpenHours] = useState('');
  const [isAccessible, setIsAccessible] = useState(false);
  const [notes, setNotes] = useState('');
  
  const handleSubmit = () => {
    // In a real app, we would submit the data
    alert('Restroom added successfully!');
    router.back();
  };
  
  const handleClose = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add a Restroom</Text>
          <TouchableOpacity 
            onPress={handleClose}
            style={styles.closeButton}
          >
            <X size={24} color={Colors.light.text} />
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.content}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Restroom Name</Text>
            <TextInput
              style={styles.input}
              value={restroomName}
              onChangeText={setRestroomName}
              placeholder="Enter restroom name"
              placeholderTextColor={Colors.light.textSecondary}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="Enter address"
              placeholderTextColor={Colors.light.textSecondary}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>Open Hours</Text>
            <TextInput
              style={styles.input}
              value={openHours}
              onChangeText={setOpenHours}
              placeholder="e.g., 9 AM - 5 PM"
              placeholderTextColor={Colors.light.textSecondary}
            />
          </View>
          
          <View style={styles.formGroup}>
            <View style={styles.switchContainer}>
              <Text style={styles.label}>ADA Accessible</Text>
              <Switch
                value={isAccessible}
                onValueChange={setIsAccessible}
                trackColor={{ false: Colors.light.border, true: Colors.light.primary }}
                thumbColor="white"
              />
            </View>
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>Notes</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={notes}
              onChangeText={setNotes}
              placeholder="Add any helpful information about this restroom"
              placeholderTextColor={Colors.light.textSecondary}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              onPress={handleSubmit}
              variant="primary"
              size="large"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: Layout.spacing.l,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
    position: 'relative',
  },
  headerTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    color: Colors.light.text,
  },
  closeButton: {
    position: 'absolute',
    right: Layout.spacing.l,
  },
  content: {
    flex: 1,
    padding: Layout.spacing.l,
  },
  formGroup: {
    marginBottom: Layout.spacing.l,
  },
  label: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: Layout.spacing.s,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: Layout.borderRadius.small,
    padding: Layout.spacing.m,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: Colors.light.text,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: Layout.spacing.xl,
    marginBottom: Layout.spacing.xxl,
  },
});