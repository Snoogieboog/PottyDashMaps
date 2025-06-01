import { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';

type Bathroom = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  status: string;
  rating: number;
};

export default function MapScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [bathrooms, setBathrooms] = useState<Bathroom[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      // Fetch restrooms from Supabase
      const { data, error } = await supabase.from('restrooms').select('*');
      if (error) {
        console.error('Error fetching restrooms:', error);
      } else {
        setBathrooms(data || []);
      }
    })();
  }, []);

  const handleG2GPress = async () => {
    if (!location || bathrooms.length === 0) return;

    // Find closest available restroom
    const userLat = location.coords.latitude;
    const userLng = location.coords.longitude;

    const available = bathrooms.filter(b => b.status === 'available');

    if (available.length === 0) return;

    const nearest = available.reduce((closest, current) => {
      const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        return Math.sqrt((lat1 - lat2) ** 2 + (lon1 - lon2) ** 2);
      };
      return getDistance(userLat, userLng, current.latitude, current.longitude) <
        getDistance(userLat, userLng, closest.latitude, closest.longitude)
        ? current
        : closest;
    }, available[0]);

    // Center map on nearest
    setLocation({
      ...location,
      coords: {
        ...location.coords,
        latitude: nearest.latitude,
        longitude: nearest.longitude,
      },
    });
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
          />
          {bathrooms.map((bathroom) => (
            <Marker
              key={bathroom.id}
              coordinate={{
                latitude: bathroom.latitude,
                longitude: bathroom.longitude,
              }}
              title={bathroom.name}
              description={`Status: ${bathroom.status} | Rating: ${bathroom.rating.toFixed(1)} 🧻`}
            />
          ))}
        </MapView>
      )}
      <TouchableOpacity style={styles.g2gButton} onPress={handleG2GPress}>
        <Text style={styles.g2gButtonText}>G2G</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  g2gButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#0066B3',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  g2gButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
