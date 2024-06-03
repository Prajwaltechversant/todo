import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {FlatList} from 'react-native';
import VideoItem from '../components/VideoItem';
import {useAuth, useQuery, useUser} from '@realm/react';
import coloPalette from '../assets/Theme/coloPalette';

export default function Videos() {

  const [allVideos, setAllVideos] = useState([]);
  
  const [pageNo, setPageNo] = useState(20) 

  const api_key = '7w5m55V3kEjfM539FbdiooTn5omqFe5TTI99Wauwysgz29Tmfr5Qors9';

  const url = `https://api.pexels.com/videos/popular?per_page=${pageNo}`;

  const videos = useQuery('Videos');

//   console.log(videos);

  const getData = async () => {
    const response = await axios.get(url, {
      headers: {
        Authorization: `${api_key}`,
      },
    });
    const {data} = response;
    setAllVideos(data.videos);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex:1, backgroundColor:coloPalette.light.tertiary, justifyContent:'center', alignItems:'center', gap:4, marginVertical:5}}>
      <FlatList
        data={allVideos}
        renderItem={({item}) => <VideoItem item={item}
        />}
        numColumns={2}
      />
    </View>
  );
}
