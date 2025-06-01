import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

interface ToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
  label: string;
  description?: string;
}

export default function Toggle({
  isEnabled,
  onToggle,
  label,
  description,
}: ToggleProps) {
  const toggleAnim = React.useRef(new Animated.Value(isEnabled ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.timing(toggleAnim, {
      toValue: isEnabled ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isEnabled, toggleAnim]);

  const backgroundColorInterpolation = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.light.border, Colors.light.primary],
  });

  const translateXInterpolation = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onToggle}
      >
        <Animated.View 
          style={[
            styles.track,
            { backgroundColor: backgroundColorInterpolation }
          ]}
        >
          <Animated.View 
            style={[
              styles.thumb,
              { transform: [{ translateX: translateXInterpolation }] }
            ]} 
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Layout.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 4,
  },
  description: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  track: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 2,
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});