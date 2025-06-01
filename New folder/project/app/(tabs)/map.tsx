import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import G2GButton from '@/components/G2GButton';
import RestroomCard, { Restroom } from '@/components/RestroomCard';

// Only import MapView when not on web platform
const MapView = Platform.select({
  ios: () => require('react-native-maps').MapView,
  android: () => require('react-native-maps').MapView,
  default: () => null,
})();

const Marker = Platform.select({
  ios: () => require('react-native-maps').Marker,
  android: () => require('react-native-maps').Marker,
  default: () => null,
})();

const Callout = Platform.select({
  ios: () => require('react-native-maps').Callout,
  android: () => require('react-native-maps').Callout,
  default: () => null,
})();

// Sample data for restrooms
const SAMPLE_RESTROOMS: Restroom[] = [
  {
    id: '1',
    name: 'Central Library',
    distance: '0.5 miles',
    isOpen: true,
    closingTime: '8:00 PM',
    isAccessible: true,
    rating: 4,
  },
  {
    id: '2',
    name: 'Ryan\'s Grocery',
    distance: '0.5 miles',
    isOpen: true,
    closingTime: '8:00 PM',
    isAccessible: false,
    rating: 3,
  },
  {
    id: '3',
    name: 'Willow Park',
    distance: '0.7 miles',
    isOpen: true,
    closingTime: '8:00 PM',
    isAccessible: true,
    rating: 5,
  },
];

export default function MapScreen() {
  const [selectedRestroom, setSelectedRestroom] = useState<Restroom | null>(null);
  
  // In a real app, this would use the user's current location
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  const handleMarkerPress = (restroom: Restroom) => {
    setSelectedRestroom(restroom);
  };

  const handleG2GPress = () => {
    // In a real app, this would find the closest restroom and navigate
    alert('Finding the closest restroom for you!');
  };

  const handleRatePress = (id: string) => {
    alert(`Rate restroom ${id}`);
  };

  const handleDirectionsPress = (id: string) => {
    alert(`Get directions to restroom ${id}`);
  };

  const renderMap = () => {
    if (Platform.OS === 'web' || !MapView) {
      return (
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapPlaceholderText}>Map View</Text>
          <Text style={styles.mapPlaceholderSubText}>
            Showing {SAMPLE_RESTROOMS.length} restrooms nearby
          </Text>
        </View>
      );
    }

    return (
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={initialRegion}
      >
        {SAMPLE_RESTROOMS.map((restroom) => (
          <Marker
            key={restroom.id}
            coordinate={{
              latitude: initialRegion.latitude + (Math.random() - 0.5) * 0.01,
              longitude: initialRegion.longitude + (Math.random() - 0.5) * 0.01,
            }}
            onPress={() => handleMarkerPress(restroom)}
            pinColor={Colors.light.primary}
          >
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{restroom.name}</Text>
                <Text style={styles.calloutText}>{restroom.distance}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Restroom Map</Text>
      </View>
      
      {renderMap()}
      
      {Platform.OS === 'web' ? (
        <View style={styles.restroomListContainer}>
          {SAMPLE_RESTROOMS.map((restroom) => (
            <RestroomCard
              key={restroom.id}
              restroom={restroom}
              onRatePress={handleRatePress}
              onDirectionsPress={handleDirectionsPress}
            />
          ))}
        </View>
      ) : selectedRestroom && (
        <View style={styles.selectedRestroomContainer}>
          <RestroomCard
            restroom={selectedRestroom}
            onRatePress={handleRatePress}
            onDirectionsPress={handleDirectionsPress}
          />
        </View>
      )}
      
      <G2GButton onPress={handleG2GPress} />
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
  map: {
    flex: 1,
  },
  mapPlaceholder: {
    height: 300,
    backgroundColor: '#E8EFF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholderText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    color: Colors.light.primary,
  },
  mapPlaceholderSubText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: Colors.light.textSecondary,
    marginTop: Layout.spacing.s,
  },
  callout: {
    width: 200,
    padding: Layout.spacing.s,
  },
  calloutTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: Colors.light.text,
  },
  calloutText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  selectedRestroomContainer: {
    position: 'absolute',
    bottom: Layout.spacing.xl + 70, // Account for G2G button
    left: Layout.spacing.l,
    right: Layout.spacing.l,
  },
  restroomListContainer: {
    flex: 1,
    padding: Layout.spacing.l,
  },
});