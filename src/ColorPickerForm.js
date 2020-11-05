import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { ChromePicker } from 'react-color';


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

        const { paletteFull } = this.props;
        const { currentColor, newColorName } = this.state

        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChange={this.updatecurrentColor} />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        value={newColorName}
                        name="newColorName"
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["Enter a Color Name", "Enter a Unique Name", "Color already Selected"]}
                        label="Color Name"
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={paletteFull}
                        style={{ backgroundColor: paletteFull ? "grey" : currentColor }}>
                        {paletteFull ? "PaletteFull" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div >
        )
    }
}

export default ColorPickerForm;



