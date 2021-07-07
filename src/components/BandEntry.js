
import { Grid, makeStyles } from "@material-ui/core";
import placeHolder from "../resources/band_placeholder.png";


const defaultLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";

const useStyles = makeStyles({
    img: {
        maxWidth: "100%",
    },
});
/*
    Represents a band image on the page

    props:
        xs: xs forwarded to material-ui
        img: image shown in the item. Default is a placeholder
        link: Link where the image points to. A default is used if not specified.
*/
function BandEntry(props) {
    const classes = useStyles();

    const link = props.link ? props.link : defaultLink;
    const img = props.img ? props.img : placeHolder;

    return (
        <Grid item container justifyContent="center" xs={props.xs}>
            <a href={link}>
                <img src={img} className={classes.img} />
            </a>
        </Grid>
    )
}


export default BandEntry;
