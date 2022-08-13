import Loading from './Loading'

import Comments from './Comments';


import '../styles/VideoDetails.css'


import styled from 'styled-components';

const Container = styled.div`
  // border: 1px solid black;
  
  margin: 50px 0px;
` 
const Text = styled.p`
  font-family: Arial;
` 
const Texts = styled.p`

` 
const Iframe = styled.iframe`
  width: 1200px;
  height: 700px;
`

const VideoContent =  styled.div`

`

function VideoDetail({video}){

  if(!video) return <Loading/>

  // console.log(video)

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <Container>
      <VideoContent>
        <Iframe frameBorder="0" height="100%" width="100%" title="Video Player" allow="fullscreen"src={videoSrc}/>
      </VideoContent>

      <Texts>
        <Text>{video.snippet.title} - {video.snippet.channelTitle} </Text>
        <Text>{video.snippet.channelTitle}</Text>
        <Text>{video.snippet.descrption}</Text>
      </Texts>

      {video && <Comments />}
    </Container>
  )
}

export default VideoDetail
