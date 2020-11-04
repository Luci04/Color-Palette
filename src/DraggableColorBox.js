import React, { Component } from 'react';
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5.0px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    }, boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "black",
        letterSpacing: "1px",
        fontSize: "12px",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s "
    }
}

const DraggableColorBox = SortableElement((props) => {
    const { classes, handleClick, name, color } = props;
    return (
        <div className={props.classes.root} style={{ backgroundColor: props.color }}>
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={handleClick}
                />
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox);
