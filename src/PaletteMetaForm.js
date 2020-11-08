import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { render } from '@testing-library/react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class PaletteMetaForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newPaletteName: "",
            stage: "form"
        }
        this.handleChange = this.handleChange.bind(this);
        this.showemojiPicker = this.showemojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);

    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {

        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !==
                value.toLowerCase()
            )
        );
    }

    showemojiPicker() {
        this.setState({ stage: "emoji" })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    savePalette(evt) {
        console.log(evt.native);
        this.props.handleSubmit({
            paletteName: this.state.newPaletteName,
            emoji: evt.native
        });
    }



    render() {

        const { newPaletteName } = this.state;

        return (
            <div>
                <Dialog
                    open={this.state.stage === "emoji"}
                    onClose={this.props.hideForm}>
                    <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
                    <Picker title="Pick Emoji Palette" onSelect={this.savePalette} />
                </Dialog>

                <Dialog open={this.state.stage === "form"}
                    onClose={this.props.hideForm}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>

                    <ValidatorForm onSubmit={() => this.showemojiPicker()}>
                        <DialogContent>
                            <DialogContentText>
                                Please Enter a Name for your Custom Palette make sure it is Unique
                            </DialogContentText>

                            <TextValidator
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter a Color Name", "Palette Name is Taken"]}
                                label="Palette Name"
                                name="newPaletteName"
                                fullWidth
                                margin="normal"
                                onChange={this.handleChange}
                                value={newPaletteName}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.props.hideForm} color="primary">
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit">
                                Save Palette
                        </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div >
        );
    }

}

export default PaletteMetaForm;