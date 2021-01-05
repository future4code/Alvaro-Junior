import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ApplicationFormPage from "./components/ApplicationFormPage";
import ListTripsPage from "./components/ListTripsPage";
import CreateTripPage from "./components/CreateTripPage";
import TripDetailsPage from "./components/TripDetailsPage";
import LoginPage from "./components/LoginPage";

function Router() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/aplication-form">
        <ApplicationFormPage />
      </Route>
      <Route exact path="/trips/list">
        <ListTripsPage />
      </Route>
      <Route exact path="/trips/create">
        <CreateTripPage />
      </Route>
      <Route exact path="/trips/details">
        <TripDetailsPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default Router;
