import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteStyle';
import { withStyles } from '@material-ui/styles';


class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = { format: "hex" };
        this.changeformat = this.changeformat.bind(this);
    }
    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
    }


    changeformat(val) {
        this.setState({ format: val });
    }


    render() {

        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;

        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showingFullPalette={false}
            />
        ))

        return (
            <div className={classes.palette}>
                <Navbar
                    handleChange={this.changeformat}
                    showingAllColors={false} />
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>
                            Go back
                        </Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);
