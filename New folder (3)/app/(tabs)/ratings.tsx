import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { supabase } from '../../lib/supabase';

type Rating = {
  id: string;
  bathroom_id: string;
  rating: number;
  comment: string;
  created_at: string;
};

export default function RatingsScreen() {
  const [ratings, setRatings] = useState<Rating[]>([]);

  useEffect(() => {
    fetchRatings();
  }, []);

  async function fetchRatings() {
    const { data, error } = await supabase
      .from('ratings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching ratings:', error);
    } else {
      setRatings(data || []);
    }
  }

  const RatingStars = ({ rating }: { rating: number }) => (
    <View style={styles.starsContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Text
          key={star}
          style={[
            styles.star,
            { color: star <= rating ? '#0066B3' : '#ddd' }
          ]}
        >
          ★
        </Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ratings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.ratingCard}>
            <RatingStars rating={item.rating} />
            <Text style={styles.comment}>{item.comment}</Text>
            <Text style={styles.date}>
              {new Date(item.created_at).toLocaleDateString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  ratingCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  star: {
    fontSize: 24,
    marginRight: 2,
  },
  comment: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
});