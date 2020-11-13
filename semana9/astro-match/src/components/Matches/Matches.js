import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import {MainContainer, MatchContainer, ProfileContainer, ButtonContainer} from './styles'

const myTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#7bd7c9',
      main: '#48A598',
      dark: '#02766a',
      contrastText: '#000000'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}))

function Matches(props) {
  const [matches, setMatches] = useState([])

  const classes = useStyles()

  const getMatches = () => {
    axios.get(`${props.baseUrl}/matches`).then((res) => {
      setMatches(res.data.matches)
      console.log(res.data.matches)
    }).catch((err) => {
      console.log(err)
    })
  }

  const clearMatches = () => {
    axios.put(`${props.baseUrl}/clear`).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getMatches()
  }, [matches])

  console.log(matches)

  const renderMatches = matches.map((match) => {
    return <MatchContainer key={match.id}>
      <ProfileContainer>
        <Avatar src={match.photo} fontSize="large" className={classes.large}/>
        <p>{match.name}</p>
      </ProfileContainer>
    </MatchContainer>
  })

  return(
    <MuiThemeProvider theme={myTheme}>
      <MainContainer>
        {matches && renderMatches}
      </MainContainer>
      <ButtonContainer>
        <Button variant="contained" color="primary" onClick={clearMatches}>Limpar swipes e matches</Button>
      </ButtonContainer>
    </MuiThemeProvider>
  )
}

export default Matches