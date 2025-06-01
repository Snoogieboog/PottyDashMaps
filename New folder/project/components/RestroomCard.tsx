import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import ToiletPaperRating from './ToiletPaperRating';
import { MapPin, Armchair as Wheelchair, Clock } from 'lucide-react-native';
import Button from './Button';

export interface Restroom {
  id: string;
  name: string;
  distance: string;
  isOpen: boolean;
  closingTime: string;
  isAccessible: boolean;
  rating: number;
}

interface RestroomCardProps {
  restroom: Restroom;
  onRatePress: (id: string) => void;
  onDirectionsPress: (id: string) => void;
}

export default function RestroomCard({ 
  restroom, 
  onRatePress, 
  onDirectionsPress 
}: RestroomCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{restroom.name}</Text>
        <Text style={[
          styles.statusText, 
          restroom.isOpen ? styles.openStatus : styles.closedStatus
        ]}>
          {restroom.isOpen ? 'Open' : 'Closed'}
        </Text>
      </View>
      
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <MapPin size={18} color={Colors.light.primary} />
          <Text style={styles.infoText}>{restroom.distance}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Clock size={18} color={Colors.light.primary} />
          <Text style={styles.infoText}>
            {restroom.isOpen 
              ? `Until ${restroom.closingTime}` 
              : `Opens tomorrow`}
          </Text>
        </View>
        
        {restroom.isAccessible && (
          <View style={styles.infoRow}>
            <Wheelchair size={18} color={Colors.light.primary} />
            <Text style={styles.infoText}>Accessible</Text>
          </View>
        )}
      </View>
      
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingLabel}>Cleanliness:</Text>
        <ToiletPaperRating rating={restroom.rating} />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Rate This Restroom" 
          onPress={() => onRatePress(restroom.id)}
          variant="outline"
          size="small"
          style={styles.button}
        />
        <Button 
          title="Directions" 
          onPress={() => onDirectionsPress(restroom.id)}
          variant="primary"
          size="small"
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.background,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
    marginVertical: Layout.spacing.s,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.s,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: Colors.light.text,
    flex: 1,
  },
  statusText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.small,
  },
  openStatus: {
    backgroundColor: Colors.light.success + '20',
    color: Colors.light.success,
  },
  closedStatus: {
    backgroundColor: Colors.light.error + '20',
    color: Colors.light.error,
  },
  infoContainer: {
    marginBottom: Layout.spacing.s,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.xs,
  },
  infoText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: Colors.light.textSecondary,
    marginLeft: Layout.spacing.s,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  ratingLabel: {
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
    color: Colors.light.text,
    marginRight: Layout.spacing.s,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: Layout.spacing.xs,
  },
});