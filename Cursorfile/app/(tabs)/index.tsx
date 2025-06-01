import { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { supabase } from '../../lib/supabase';

type Bathroom = {
  id: string;
  latitude: number;
  longitude: number;
  rating: number;
  status: 'available' | 'occupied' | 'maintenance';
};

export default function MapScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [bathrooms, setBathrooms] = useState<Bathroom[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Fetch bathrooms from Supabase
const { data, error } = await supabase
  .from('restrooms')
  .select('*');

if (error) {
  console.error('Error fetching restrooms:', error);
} else {
  setBathrooms(data || []);
}
    })();
  }, []);

  const handleG2G = async () => {
    if (!location) return;

    // Find nearest available bathroom
    const availableBathrooms = bathrooms.filter(b => b.status === 'available');
    if (availableBathrooms.length === 0) {
      setErrorMsg('No available bathrooms nearby');
      return;
    }

    // Calculate distances and find nearest
    const nearest = availableBathrooms.reduce((prev, curr) => {
      const prevDistance = Math.sqrt(
        Math.pow(prev.latitude - location.coords.latitude, 2) +
        Math.pow(prev.longitude - location.coords.longitude, 2)
      );
      const currDistance = Math.sqrt(
        Math.pow(curr.latitude - location.coords.latitude, 2) +
        Math.pow(curr.longitude - location.coords.longitude, 2)
      );
      return prevDistance < currDistance ? prev : curr;
    });

    // Center map on nearest bathroom
    mapRef.current?.animateToRegion({
      latitude: nearest.latitude,
      longitude: nearest.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
  };

  const mapRef = React.useRef<MapView>(null);

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : null}
      
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: location?.coords.latitude || 37.78825,
          longitude: location?.coords.longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {bathrooms.map((bathroom) => (
          <Marker
            key={bathroom.id}
            coordinate={{
              latitude: bathroom.latitude,
              longitude: bathroom.longitude,
            }}
            pinColor={bathroom.status === 'available' ? '#0066B3' : '#999'}
          />
        ))}
      </MapView>

      <TouchableOpacity
        style={styles.g2gButton}
        onPress={handleG2G}
      >
        <Text style={styles.g2gText}>G2G!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  g2gButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#0066B3',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  g2gText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  errorText: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
});