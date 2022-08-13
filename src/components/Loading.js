import {LoadingOutlined} from '@ant-design/icons'


import styled from 'styled-components'

const Load = styled.div`
    text-align:center;
    
`
const Container = styled.div`
    // display: flex;
    margin-top: 40px;
    // border: 1px solid black;  
    width: 1500px;
`

const Text = styled.p`
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 0.9em;
    font-style: italic;
`


function Loading(){
  return (
    <Container>
        <Load>
            <Text>Faites vos recherches</Text> 
            <Text><LoadingOutlined style={{fontSize:"2em"}}/></Text>
        </Load>
    </Container>
  )
}

export default Loading
