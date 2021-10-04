import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import GenericPage from './views/GenericPage';
import Header from "./components/header";
import CardItemFilm from "./views/films/cardItemFilm";
import CardItemPeople from "./views/people/cardItemPeople";
import CardItemStarships from "./views/starships/cardItemStarships";
import CardItemVehicles from "./views/vehicles/cardItemVehicles";
import CardItemSpecies from "./views/species/cardItemSpecies";
import CardItemPlanets from "./views/planets/cardItemPlanets";
import Error from './views/error/Error';
import './App.css';

const FilmsPage = () => <GenericPage url={"/films"} CardItem={CardItemFilm} />;
const PeoplePage = () => <GenericPage url={"/people"} CardItem={CardItemPeople} />;
const StarshipsPage = () => <GenericPage url={"/starships"} CardItem={CardItemStarships} />;
const VehiclesPage = () => <GenericPage url={"/vehicles"} CardItem={CardItemVehicles} />;
const SpeciesPage = () => <GenericPage url={"/species"} CardItem={CardItemSpecies} />;
const PlanetsFilmsPage = () => <GenericPage url={"/planets"} CardItem={CardItemPlanets} />;

class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={FilmsPage} />
              <Route path='/people' component={PeoplePage} />
              <Route path='/starships' component={StarshipsPage} />
              <Route path='/vehicles' component={VehiclesPage} />
              <Route path='/species' component={SpeciesPage} />
              <Route path='/planets' component={PlanetsFilmsPage} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
