
import styled from 'styled-components'


const Container = styled.div`
  // border: 1px solid black;
  // heigth: 400px;
`

const Item = styled.div`
  // display: flex;
  
  margin: 10px;
  // border: 1px solid red;
  // -webkit-box-shadow: 7px 8px 13px -6px #999999; 
  // box-shadow: 7px 8px 13px -6px #999999;
  cursor: pointer;
  width: 300px;
  // background-color: grey;
  // color white;

  padding: 10px;
`

const Text = styled.p`
  font-weight:bold;
  font-family: sans-serif;
  font-size: 0.8em;
`
const Thumbnail = styled.img`
  width: 300px;
  
`


function VideoItem({ video, onVideoSelect }){

    
  return (
    <Container>
      <Item onClick={()=> onVideoSelect(video)}>
        <Thumbnail  alt="thmbnail" src={video.snippet.thumbnails.medium.url}></Thumbnail>
        <Text>{video.snippet.title}</Text>
      </Item>
    </Container>
  )
}

export default VideoItem
