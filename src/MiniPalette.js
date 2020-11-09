import React, { Component } from 'react';
import styles from './styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete'

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors } = props;
    const miniColorsBoxes = colors.map(color => {
        return <div className={classes.miniColor}
            key={color.name}
            style={{ backgroundColor: color.color }}>
        </div>
    })
    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.delete}>
                <DeleteIcon className={classes.deleteIcon} />
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


export default withStyles(styles)(MiniPalette);
