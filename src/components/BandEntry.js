
import { Grid, makeStyles } from "@material-ui/core";
import placeHolder from "../resources/band_placeholder.png";



const useStyles = makeStyles({
    img: {
        maxWidth: "100%",
    },
});
/*
    Represents a band image on the page

    props:
        xs: xs forwarded to material-ui
*/
function BandEntry(props) {
    const classes = useStyles();
    return (
        <Grid item container justifyContent="center" xs={props.xs}>
            <img src={placeHolder} className={classes.img} />
        </Grid>
    )
}


export default BandEntry;
