import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailsPage from '../screens/DetailsPage/DetailsPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import LoginPage from '../screens/LogingPage/LoginPage'
import SigninPage from '../screens/SigninPage/SigninPage'


const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={['/','/feed']}>
          <FeedPage />
        </Route>
        <Route exact path={'/post'}>
          <DetailsPage />
        </Route>
        <Route exact path={'/login'}>
          <LoginPage />
        </Route>
        <Route exact path={'/signin'}>
          <SigninPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router