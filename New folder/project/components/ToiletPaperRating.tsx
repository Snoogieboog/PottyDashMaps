import React from 'react';
import { StyleSheet, View } from 'react-native';
import { File as FileRoll } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface ToiletPaperRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export default function ToiletPaperRating({
  rating,
  maxRating = 5,
  size = 20,
}: ToiletPaperRatingProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <FileRoll
          key={index}
          size={size}
          color={index < rating ? Colors.light.primary : Colors.light.border}
          style={styles.icon}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 2,
  },
});