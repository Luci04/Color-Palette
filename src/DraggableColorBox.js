import React from 'react';
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBox';



const DraggableColorBox = SortableElement((props) => {
    const { classes, handleClick } = props;
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
