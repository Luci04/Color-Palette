import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFotter from './PaletteFooter';
import styles from './styles/PaletteStyle';
import { withStyles } from '@material-ui/styles';

class Palette extends Component {

    constructor(props) {
        super(props)
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeformat = this.changeformat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }


    changeformat(val) {
        this.setState({ format: val });
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state;
        const colorBoxes = colors[this.state.level].map(color => {
            return <ColorBox
                background={color[format]}
                key={color.id}
                id={color.id}
                name={color.name}
                onAfterChange={this.changeLevel}
                paletteId={id}
                showingFullPalette={true}
            />
        })
        return (
            <div className={classes.palette}>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeformat}
                    showingAllColors={true}
                />
                {/* Navbar goes here */}
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFotter paletteName={paletteName} emoji={emoji} />
                {/* footer eventually */}
            </div>
        )
    }
}

export default withStyles(styles)(Palette);
