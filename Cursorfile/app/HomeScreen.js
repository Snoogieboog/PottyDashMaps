import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
          {/* Example marker */}
          <Marker
            coordinate={{ latitude: location.latitude + 0.001, longitude: location.longitude + 0.001 }}
            title="Public Toilet"
            description="Clean and open"
          />
        </MapView>
      )}

      <View style={styles.buttonContainer}>
        <Button title="G2G 🚽" color="#e74c3c" onPress={() => console.log('Gotta Go!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
