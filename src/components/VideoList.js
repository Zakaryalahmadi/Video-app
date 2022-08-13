
import VideoItem from "./VideoItem"

import styled from "styled-components"


const Container = styled.div`
  margin-top: 40px;
  // border: 1px solid black;


`

function VideoList({videos, onVideoSelect}) {

  // console.log(videos)
  

  const listeOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
  return (
    <Container>
      {listeOfVideos}
    </Container>
  )
}

export default VideoList
