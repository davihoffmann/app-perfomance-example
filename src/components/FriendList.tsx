import React, { ReactElement, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Friend } from './Friend';

interface Props {
  data: {
    id:number
    name: string;
    likes: number;
  }[];
  follow: () => void;
}

export default function FriendList({ data, follow }: Props): ReactElement {

  // Memorização de valor
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text> Total de Likes: {totalLikes} </Text>

      <FlatList 
        data={data} 
        keyExtractor={friend => String(friend.id)}
        renderItem={({ item }) => (
          <Friend data={item} follow={follow}  />
        )}
      />
    </View>
  );
}
