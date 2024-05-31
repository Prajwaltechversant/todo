import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import { useQuery } from '@realm/react';
import VideoItem from '../../components/VideoItem';

export default function SavedVideos({route}) {

    const videos = useQuery('Videos')
    const type = route.params.type==='saved' ? true : false
    // console.log(route.params)

  return (
    <View>
      <FlatList
      data={videos}
      renderItem={({item})=><VideoItem item={item} type={type}  />}
      />
    </View>
  );
}
