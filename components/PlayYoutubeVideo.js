import React, { useRef, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
} from "react-native";

const PlayYoutubeVideo = (props) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [playerror, setPlayError] = useState(false);
  const [currentEvent, setCurrentEvent] = useState("");
  const [playerReady, setPlayerReady] = useState(false);
  const errorMsg = (
    <Text style={{ color: "red", marginHorizontal: 15, marginVertical: 5 }}>
      Sorry for inconvienence, unable to play video at the moment. Request you to follow below written steps.
    </Text>
  );

  return (
    <View style={styles.container}>
      {!playerror && (
        <YoutubePlayer
          ref={playerRef}
          height={Dimensions.get("window").height / 3}
          width={Dimensions.get("window").width}
          videoId={props.videoId}
          play={playing}
          onChangeState={(event) => {
            // console.log(event);
            setCurrentEvent(event);
            if (event === "paused") {
              setPlaying(false);
            }
            if (event === "playing") {
                setPlaying(true);
              }
          }}
          onReady={() => {
            setPlayerReady(true);
          }}
          onError={(e) => {
            setPlayError(true);
            setPlaying(false);
            setCurrentEvent("unstarted");
            console.log(e);
          }}
        //   onPlaybackQualityChange={(q) => console.log(q)}
          volume={50}
          playbackRate={1}
          playerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true,
          }}
        />
      )}
      {(playerror || !playerReady) && <Image source={{ uri: props.imageUrl }} style={styles.mealImage} />}
      <View>{playerror && errorMsg}</View>
      <View style={styles.btnContainer}>
      {playerror && <Button title="Retry" onPress={() => {
        setPlayError(false)
        setPlaying(true)
        }} />}
      {(currentEvent === "playing" && !playerror ) && <Button title="Pause the video" onPress={() => {
        setCurrentEvent("paused")
        setPlaying(false)
        // console.log("Pausing the video...")
        }} />}
      {(currentEvent === "paused" && !playerror) && <Button title="Resume the video" onPress={() => {
        setCurrentEvent("playing")
        setPlaying(true)
        // console.log("Trying to resume the video...")
      }} />}
      {(currentEvent === "ended" && !playerror) && <Button title="Replay the video" onPress={() => {
        playerRef.current.seekTo(0,true);
        setPlaying(true)
      }} />}
      </View>
    </View>
  );
};

export default PlayYoutubeVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  mealImage: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
  },
  btnContainer: {
    marginTop: 5,
  },
});
