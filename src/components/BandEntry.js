
import { Grid, makeStyles } from "@material-ui/core";
import placeHolder from "../resources/band_placeholder.png";


const defaultLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";

const useStyles = makeStyles({
    img: {
        maxWidth: "100%",
        animation: `$fade-in 1s forwards`,
        opacity: 0,
    },
    "@keyframes fade-in": {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    }
});

/*
    Represents a band image on the page

    props:
        xs: Relative size of the image, 0-12
        img: image shown in the item. Default is a placeholder
        link: Link where the image points to. A default is used if not specified.
*/
function BandEntry(props) {
    const classes = useStyles();
    const link = props.link ? props.link : defaultLink;
    const img = props.img ? props.img : placeHolder;
    const delay = props.delay ? props.delay : "0s";

    return (
        <Grid item container justifyContent="center" xs={props.xs}>
            <a href={link}>
                <img src={img} style={{ animationDelay: delay }}
                    className={classes.img} alt="Band"
                />
            </a>
        </Grid>
    )
}


export default BandEntry;
