import React, { useState } from 'react'
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styled from 'styled-components'
import Profiles from './components/Profiles/Profiles.js'
import Matches from './components/Matches/Matches'

import Button from '@material-ui/core/Button'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import GroupIcon from '@material-ui/icons/Group'
import Logo from './assets/images/logo.svg'

const PageContainer = styled.div`
display: flex;
justify-content: center;
background-color: lightgray;
height: 100vh;
`
const Card = styled.div`
background-color: white;
width: 450px;
height: 95vh;
margin: 10px;
border-radius: 5px;
border: solid 1px;
`
const CardHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: solid 1px lightgray;
`
const CardBody = styled.div`
`
const LogoImg = styled.img`
justify-self: center;
`
const ButtonContainer = styled.div`
width: 70px;
`

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
const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Alvaro"

function App() {
  const [initialPage, setInitialPage] = useState(true)

  const renderedPage = () => {
    setInitialPage(!initialPage)
  }

  return (
    <PageContainer>
      <MuiThemeProvider theme={myTheme}>
        <Card>
          <CardHeader>
            <ButtonContainer>
              {initialPage === false && 
              <Button>
              <GroupIcon color="secondary" fontSize="large" onClick={renderedPage}/>
            </Button>}
            </ButtonContainer>
            <LogoImg src={Logo}/>
            <ButtonContainer>
              {initialPage && 
              <Button>
                <GroupAddIcon color="secondary" fontSize="large" onClick={renderedPage}/>
              </Button>}
            </ButtonContainer>
          </CardHeader>
          <CardBody>
            {initialPage ? <Profiles baseUrl={baseUrl}/> : <Matches baseUrl={baseUrl}/>}
          </CardBody>
        </Card>
      </MuiThemeProvider>
    </PageContainer>
  );
}

export default App;