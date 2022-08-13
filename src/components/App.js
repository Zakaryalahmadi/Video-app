import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'


import youtube from '../api/youtube'

import {useState, useEffect} from 'react'

import styled from 'styled-components'
import DarkMode from './DarkMode'


const Container = styled.div`
  display:flex;
  // justify-content: space-around;
  Width: 80%;
  margin: auto;
  
`

const Wrapper = styled.div`
  
`

const Block = styled.div`
  
`


function App(){

  const [videos, setVideos] = useState([])


  const [selectedVideo, setSelectedVideo] = useState(null)


  const handleSubmit = async (search) => {

   
    // e.preventDefault()

    const response = await youtube.get('search', {
        
        params: {
          part:'snippet',
          maxResults: 10,
          key: process.env.REACT_APP_KEY,
          q: search ,
        }
    });
    console.log(response.data.items)
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

 


  // window.addEventListener("scroll", ()=>{


  //   //  console.log('Current scroll from the top: ' + window.pageYOffset);
  //   //   console.log("scrollTop ",document.body.scrollTop)
  //   //   console.log("clientHeight ",document.documentElement.clientHeight)
  //   //   console.log("scrollHeight ",document.body.scrollHeight)

  //     let scrollHeight = document.body.scrollHeight
  //     let scrollTop = window.pageYOffset
  //     let clientHeight = document.documentElement.clientHeight

  //     if (scrollHeight - scrollTop === clientHeight) {
  //         console.log("ok")
  //         setResults(results + 1)
  //     }
  // })

  

  const onVideoSelect = (video)=>{
      setSelectedVideo(video)
  }

  return (
    <Wrapper>
      {/* <Header/> */}
      <div>
          <SearchBar onFormSubmit={handleSubmit}/>
      </div>
      <Container>
          
          <Block>
            <VideoDetail video={selectedVideo}/>
          </Block>
          <Block>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Block>
      </Container>
      
    </Wrapper>
  )
}

export default App
