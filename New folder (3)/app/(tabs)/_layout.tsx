import { Tabs } from 'expo-router';
import { MapPin, Star, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#0066B3',
      tabBarInactiveTintColor: '#666',
      tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        height: 60,
        paddingBottom: 8,
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => (
            <MapPin size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ratings"
        options={{
          title: 'Ratings',
          tabBarIcon: ({ color, size }) => (
            <Star size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <User size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}