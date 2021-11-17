import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { CssBaseline } from '@mui/material';
import ToolBar from './components/UI/ToolBar/ToolBar.js';
import CockailList from './containers/Cocktails/CockailList.jsx';
import AddCocktail from './containers/Cocktails/AddCocktail.jsx';
import IngredientList from './containers/Ingredients/IngredientList.jsx';
import AddIngredient from './containers/Ingredients/AddIngredient.jsx';
import SingleCocktail from './containers/Ingredients/SingleCocktail';

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <ToolBar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={CockailList}></Route>
          <Route path="/add-cocktails" exact component={AddCocktail}></Route>
          <Route path="/ingredients" exact component={IngredientList}></Route>
          <Route path="/ingredients/:id" exact component={SingleCocktail}></Route>
          <Route path="/add-ingredients" exact component={AddIngredient}></Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
