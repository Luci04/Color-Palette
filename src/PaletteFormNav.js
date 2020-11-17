import React, { Component } from "react";
import PaletteMetaForm from "./PaletteMetaForm";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button } from "@material-ui/core";
import styles from "./styles/PaletteFormNavStyle";



class PaletteFormNav extends Component {

    constructor(props) {
        super(props);
        this.state = { formSowing: false }
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    showForm() {
        this.setState({ formShowing: true });
    }

    hideForm() {
        this.setState({ formShowing: false });
    }

    render() {

        const { classes, open, palettes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    color="default"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}>
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}>
                            <ChevronRightIcon />
                        </IconButton>
                        <Typography
                            variant='h6'
                            color='inherit'
                            noWrap>
                            Create A Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to="/Color-Palette" className={classes.link}>
                            <Button
                                className={classes.button} variant="contained"
                                color="secondary">
                                Go Back
                            </Button>
                        </Link>
                        <Button className={classes.button} variant="contianed" color="primary" onClick={this.showForm}>
                            Save
                         </Button>
                    </div>
                </AppBar>
                {this.state.formShowing && (<PaletteMetaForm palettes={palettes} showForm={this.showForm} hideForm={this.hideForm} handleSubmit={this.props.handleSubmit} />)}

            </div>
        )
    }
}


export default withStyles(styles, { withTheme: true })(PaletteFormNav);
