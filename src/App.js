import React, { Component } from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from "./seedColors";
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPaletteForm';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./App.css";
class App extends Component {

  constructor(props) {
    super(props);
    const savedPalette = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalette || seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }


  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    )
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage)
  }

  syncLocalStorage() {
    //save Palette to local Storage
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={(routePorps) => (
                  <div className="page">
                    <NewPaletteForm
                      palettes={this.state.palettes}
                      savePalette={this.savePalette}
                      {...routePorps}
                    />
                  </div>
                )}
              />

              <Route
                exact
                path="/Color-Palette"
                render={(routePorps) => (
                  <div className="page">
                    <PaletteList
                      palettes={this.state.palettes}
                      {...routePorps}
                      deletePalette={this.deletePalette}
                    />
                  </div>
                )}
              />


              <Route
                exact
                path='/palette/:id'
                render={routePorps => (
                  <div className="page">
                    <Palette
                      palette={generatePalette(
                        this.findPalette(routePorps.match.params.id)
                      )}
                    />
                  </div>
                )}
              />

              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={routePorps => (
                  <div className="page">
                    <SingleColorPalette
                      colorId={routePorps.match.params.colorId}
                      palette={generatePalette(
                        this.findPalette(routePorps.match.params.paletteId)
                      )}
                    />
                  </div>
                )} />
            </Switch >
          </CSSTransition>

        </TransitionGroup>
      )} />
    )
  }

  // <div>
  //   <Palette palette={generatePalette(seedColors[4])} />
  // </div>
}

export default App;
