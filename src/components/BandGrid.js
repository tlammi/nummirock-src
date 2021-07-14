import { Grid } from "@material-ui/core";
import BandEntry from "./BandEntry.js";

/*
    Represent a grid of band images on a page

    props:
        perLineXs - How many entries are placed on a line. Extra small screen
*/
function BandGrid(props) {
    const xs = Math.floor(12 / props.perLineXs);
    const entries = [];
    for (let i = 0; i < Math.max(props.perLineXs, 3); ++i) {
        entries.push(<BandEntry xs={xs} delay={`${i * .2}s`} />);
    }
    return (<Grid item container justifyContent="center" spacing={4}>
        {entries}
    </Grid>);
}

export default BandGrid;
