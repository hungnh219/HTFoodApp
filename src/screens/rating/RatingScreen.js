import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

import AppStyle from '../../styles/GlobalStyle'

function RatingScreen ({ navigation }) {
  const [rating, setRating] = useState(0);
  return (
      <StarRating
        rating={rating}
        onChange={setRating}
      />
  );
};

export default RatingScreen;

