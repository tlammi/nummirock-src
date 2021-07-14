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
        <Grid item container justifyContent="center" spacing={4} className={classes.root}>
            <BandEntry xs={3} delay="0.2s"></BandEntry>
            <BandEntry xs={3} delay="0.4s"></BandEntry>
            <BandEntry xs={3} delay="0.6s"></BandEntry>
            <BandEntry xs={3} delay="0.8s"></BandEntry>
        </Grid>
    );

};

export default BandPreview;
