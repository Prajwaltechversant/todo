import {Avatar, Button, Card, Text} from 'react-native-paper';
import React from 'react';
import {Dimensions, Pressable, View} from 'react-native';
import {useRealm, useUser} from '@realm/react';
import {useNavigation} from '@react-navigation/native';
import coloPalette from '../assets/Theme/coloPalette';

export default function VideoItem({item, type}) {


  const user = useUser();
  const realm = useRealm();

  const navigation = useNavigation();

  const saveVideo = async () => {
    if (item && item.url) {
      try {
        realm.write(() => {
          realm.create('Videos', {
            image: item?.image,
            user_id: user.id,
            video_url: item.url,
            videoDetails: item.video_files,
          });
        });
        console.log('Success');
      } catch (err) {
        console.log('failed due to ', err);
      }
    }
  };

  const removeVideo = async () => {
    realm.write(() => {
      try {
        realm.delete(item);
      } catch (err) {
        console.log(err);
      }
    });
  };



  const {width,height }= Dimensions.get('screen')
  return (
    <View style={{padding:type ? 0 : 5, marginVertical:5}}>
      <Card style={{width:type ? width : width/2-10,backgroundColor:coloPalette.light.secondary}}>
        <Pressable
          onPress={() =>
            navigation.navigate('player', {
              item: type ? item.videoDetails[0].link : item.video_files[0].link,
            })
          }>      
          <Card.Cover source={{uri: item?.image}} />
        </Pressable>
        {/* <Card.Actions style={{backgroundColor:'transparent'}}> */}
          {!type ? (
            <Button mode="contained" onPress={saveVideo} buttonColor="green">
              Save
            </Button>
          ) : (
            <Button mode="contained" style={{width: 150 , alignSelf:'center' }} onPress={removeVideo} buttonColor="green">
              Delete
            </Button>
          )}
        {/* </Card.Actions> */}
      </Card>
    </View>
  );
}
