import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { ProfileContainer, MatchContainer, ProfileImage, BackgroundImgage, ProfileDetails} from './syles'
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ClearIcon from '@material-ui/icons/Clear'

const myTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000000'
    },
    secondary: {
      light: '#a75cc4',
      main: '#762d93',
      dark: '#460064',
      contrastText: '#ffffff'
    }
  }
})

function Profiles(props) {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [bio, setBio] = useState("")
  const [photo, setPhoto] = useState("")
  const [id, setId] = useState("")

  const getProfile = () => {
    axios.get(`${props.baseUrl}/person`).then((res) => {
      setName(res.data.profile.name)
      setAge(res.data.profile.age)
      setBio(res.data.profile.bio)
      setPhoto(res.data.profile.photo)
      setId(res.data.profile.id)
    }).catch((err) => {
      console.log(err)
    })
  }

  const notChoose = () => {
    const body = {
      id: id,
      choice: false
    }
    axios.post(`${props.baseUrl}/choose-person`, body).then(() => {
      getProfile()
    }).catch((err) => {
      console.log(err)
    })
  }

  const didChoose = () => {
    const body = {
      id: id,
      choice: true
    }
    axios.post(`${props.baseUrl}/choose-person`, body).then(() => {
      getProfile()
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return(
    <MuiThemeProvider theme={myTheme}>
      <ProfileContainer>
        <BackgroundImgage src={photo}/>
        <ProfileImage src={photo}/>
        {name && 
        <ProfileDetails>
        <h3>{name}, {age}</h3>
        <p>{bio}</p>
        </ProfileDetails>}
      </ProfileContainer>
      <MatchContainer>
          <Fab color="primary" onClick={notChoose}>
            <ClearIcon fontSize="large"/>
            </Fab>
          <Fab color="primary" onClick={didChoose}>
            <FavoriteIcon color="secondary" fontSize="large"/>
            </Fab>
      </MatchContainer>
    </MuiThemeProvider>
  )
}

export default Profiles