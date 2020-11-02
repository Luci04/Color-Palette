import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles'
import { withStyles } from '@material-ui/styles';

class PaletteList extends Component {

    gotoPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    render() {

        const { palettes, classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/new">
                            Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => {
                            return (
                                <MiniPalette
                                    {...palette}
                                    handleClick={() => this.gotoPalette(palette.id)} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);