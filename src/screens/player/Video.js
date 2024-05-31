import React, { useRef } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = ({ route }) => {
  const videoRef = useRef(null);
console.log(route.params.item)
  const handleBuffer = () => {
  };

  const handleError = (error) => {
    console.error('Video playback error:', error);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: route.params.item}}
        ref={videoRef}
        onBuffer={handleBuffer}
        onError={handleError}
        style={styles.backgroundVideo}
        controls={true} 
        audioOutput='speaker'
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    flex: 1,
  },
});

export default VideoPlayer;
