import React, { PureComponent } from 'react';
import styles from './styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete'

class MiniPalette extends PureComponent {

    constructor(props) {
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    deletePalette(evt) {
        evt.stopPropagation();
        this.props.handleDelete(this.props.id);
    }

    handleClick() {
        this.props.goToPalette(this.props.id);
    }

    render() {

        const { classes, paletteName, emoji, colors } = this.props;

        const miniColorsBoxes = colors.map(color => {
            return <div className={classes.miniColor}
                key={color.name}
                style={{ backgroundColor: color.color }}>
            </div>
        })
        return (
            <div className={classes.root} onClick={this.handleClick}>
                <div className={classes.delete}>
                    <DeleteIcon
                        className={classes.deleteIcon}
                        onClick={this.deletePalette}
                    />
                </div>
                <div className={classes.colors}>
                    {/* {Mini Colors Boxes} */}
                    {miniColorsBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName}<span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        );
    }
}


export default withStyles(styles)(MiniPalette);
