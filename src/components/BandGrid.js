import { Grid } from "@material-ui/core";
import BandEntry from "./BandEntry.js";

/*
    Represent a grid of band images on a page

    props:
        perLineXs - How many entries are placed on a line. Extra small screen
*/
function BandGrid(props) {
    const xs = Math.floor(12 / props.perLineXs);
    return (<Grid container justifyContent="center">
        <BandEntry xs={xs} />
        <BandEntry xs={xs} />
        <BandEntry xs={xs} />
    </Grid>);
}

export default BandGrid;
