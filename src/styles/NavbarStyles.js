import sizes from './sizes';

export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        height: "6vh",
        justifyContent: "flex-start"
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        display: "flex",
        alignItems: "center",
        height: "100%",
        "& a": {
            textDecoration: "none",
            color: "black"
        },
        [sizes.down("md")]: {
            display: "none",
            width: "150px"
        }
    }, slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& rc-slider-track": {
            backgroundColor: "transparent",
        },
        "& rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, rc-slider-handle:focus": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
        }
    }, selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    }
}