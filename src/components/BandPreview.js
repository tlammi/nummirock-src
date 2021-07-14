import { Grid, makeStyles } from "@material-ui/core";
import BandEntry from "./BandEntry";


const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
    }
});

function BandPreview() {

    const classes = useStyles();

    return (
        <Grid item container className={classes.root} direction="row">
            <Grid item xs={1}></Grid>
            <Grid item container xs={10} justifyContent="center" spacing={4}>
                <BandEntry delay="0.2s"></BandEntry>
                <BandEntry delay="0.4s"></BandEntry>
                <BandEntry delay="0.6s"></BandEntry>
                <BandEntry delay="0.8s"></BandEntry>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );

};

export default BandPreview;
