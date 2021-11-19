import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import ToolBar from './components/UI/ToolBar/ToolBar.js';
import CockailList from './containers/Cocktails/CockailList.jsx';
import AddCocktail from './containers/Cocktails/AddCocktail.jsx';
import IngredientList from './containers/Ingredients/IngredientList.jsx';
import AddIngredient from './containers/Ingredients/AddIngredient.jsx';
import SingleIngredient from './containers/Ingredients/SingleIngredient';
import SingleCocktail from './containers/Cocktails/SingleCocktail.jsx';

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <ToolBar />
      </header>
      <main>
        <Container maxWidth="xl">
          <Switch>
            <Route path="/" exact component={CockailList}></Route>
            <Route path="/add-cocktails" exact component={AddCocktail}></Route>
            <Route path="/ingredients" exact component={IngredientList}></Route>
            <Route path="/ingredients/:id" exact component={SingleIngredient}></Route>
            <Route path="/cocktail/:id" exact component={SingleCocktail}></Route>
            <Route path="/add-ingredients" exact component={AddIngredient}></Route>
          </Switch>
        </Container>
      </main>
    </>
  );
};

export default App;
