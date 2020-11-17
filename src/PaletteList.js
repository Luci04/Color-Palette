import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles'
import { withStyles } from '@material-ui/styles';

class PaletteList extends Component {

    gotoPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    render() {

        const { palettes, classes, deletePalette } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/new">
                            Create Palette
                        </Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => {
                            return (
                                <CSSTransition
                                    key={palette.id}
                                    className="fade"
                                    timeout={1000}>
                                    <MiniPalette
                                        {...palette}
                                        handleClick={() => this.gotoPalette(palette.id)}
                                        handleDelete={deletePalette}
                                        key={palette.id}
                                        id={palette.id} />
                                </CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);
