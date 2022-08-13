import {useState} from 'react'

import '../styles/SearchBar.css'



import styled from "styled-components"

import {
  BarsOutlined,
  YoutubeFilled,
  DownloadOutlined,
  GooglePlusOutlined,
  BulbOutlined,
} from '@ant-design/icons'



const SearchWraper = styled.div`
  transition: .3s background-color;
  border: 1px solid transparent;
  background-color: ${props => props.darkMode ? "#252525" : "#fff"};
  color: ${props => props.darkMode ? "#fff" : "#252525"};
  font-family: 'Montserrat', sans-serif;
  padding: 5px;
  -webkit-box-shadow: 5px 5px 10px -6px #9E9E9E; 
  box-shadow: 5px 5px 10px -6px #9E9E9E;
`;

const Space = styled.span`
  margin-left: 5px;
`

const Ulflex = styled.div`
  margin-left: 5px
  list-style-type: none;
  padding: 0;
  display:flex;
  justify-content: space-between;
  /* border: 1px solid red; */

`

const Li = styled.li`
  display:flex;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;

`

const ContainerNav = styled.nav`
  
`
const SearchInput = styled.input`
  transition: .3s background-color;
  width: 500px;
  padding: 10px 20px;
  background-color: ${props => props.darkMode ? "#000" : "#E6E6E6"};
  outline: none;
  border: none;
  color: ${props => props.darkMode ? "#fff" : "#000"};
  font-weight: 700;
  font-family: 'Montserrat', sans-serif; 
`

const Form = styled.form``

function SearchBar({onFormSubmit} ){

  const [search, setSearch] = useState("")

  const [darkMode, setDarkMode] = useState(false)



  const handleSubmit = (e)=>{
      e.preventDefault()
      onFormSubmit(search) 
  }

  const handleChange = (e) =>{
      setSearch(e.target.value)
  }



  
  const handleDarkMode = ()=>{
    if(!darkMode)
      setDarkMode(true)
    else 
      setDarkMode(false)


    

    // console.log(darkMode)
  }

  return (
    <SearchWraper darkMode={darkMode}>
        <ContainerNav>
            <Ulflex>
                <Ulflex>
                  <Li><BarsOutlined  className='logo bar'/></Li>
                  <Li><YoutubeFilled  className='logo youtube'/><Space>VideoApp</Space> </Li>
                </Ulflex>
                <Li>
                  <Form onSubmit={handleSubmit}>
                    <SearchInput onDarkMode={darkMode}  darkMode={darkMode}  placeholder="Rechercher..." onChange={handleChange} value={search} />
                  </Form>
                </Li>
                
                <Ulflex>
                  <Li><BulbOutlined onClick={handleDarkMode} className='logo darkMode'/></Li>
                  <Li><DownloadOutlined className='logo download' /></Li>
                  <Li><GooglePlusOutlined className='logo google' /></Li>
                </Ulflex>
                
            </Ulflex>
        </ContainerNav>
      
    </SearchWraper>
  )
}

export default SearchBar
