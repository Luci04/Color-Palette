import React, { Component } from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from "./seedColors";
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPaletteForm'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] })
  }

  render() {
    return (
      <Switch>

        <Route
          exact
          path="/palette/new"
          render={(routePorps) => <NewPaletteForm savePalette={this.savePalette}
            {...routePorps} />}
        />

        <Route
          exact
          path="/Color-Palette"
          render={(routePorps) => <PaletteList palettes={this.state.palettes} {...routePorps} />} />


        <Route
          exact
          path='/palette/:id'
          render={routePorps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routePorps.match.params.id)
              )}
            />
          )} />

        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routePorps => (
            <SingleColorPalette
              colorId={routePorps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routePorps.match.params.paletteId)
              )}
            />
          )} />
      </Switch >
    )
  }

  // <div>
  //   <Palette palette={generatePalette(seedColors[4])} />
  // </div>
}

export default App;
