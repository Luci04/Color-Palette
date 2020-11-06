import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { ChromePicker } from 'react-color';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    picker: {
        width: "100% !important",
        marginTop: "2rem",
    },
    addColor: {
        width: "350px",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "2rem",
        color: "white"
    },
    colorNameInput: {
        width: "100%",
        height: "70px"
    }
}


class ColorPickerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentColor: "teal",
            newColorName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatecurrentColor = this.updatecurrentColor.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique",
            value => this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        )

        ValidatorForm.addValidationRule("isColorUnique",
            value => this.props.colors.every(
                ({ color }) => color !== this.state.currentColor)
        );
    }


    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };

        this.props.addNewColor(newColor);
        this.setState({ newColorName: "" });
    }

    updatecurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex });
    }

    render() {

        const { paletteFull, classes } = this.props;
        const { currentColor, newColorName } = this.state

        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChange={this.updatecurrentColor}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        placeholder="Color Name"
                        variant="filled"
                        className={classes.colorNameInput}
                        value={newColorName}
                        margin="normal"
                        name="newColorName"
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["Enter a Color Name", "Enter a Unique Name", "Color already Selected"]}
                        label="Color Name"
                    />
                    <Button
                        className={classes.addColor}
                        variant="contained"
                        type="submit"
                        disabled={paletteFull}
                        style={{ backgroundColor: paletteFull ? "grey" : currentColor }}>
                        {paletteFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div >
        )
    }
}

export default withStyles(styles)(ColorPickerForm);



