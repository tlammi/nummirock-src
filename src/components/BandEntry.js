
import { Grid, makeStyles } from "@material-ui/core";
import placeHolder from "../resources/band_placeholder.png";


const defaultLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";

const useStyles = makeStyles({
    imgWrapper: {
        animation: `$fade-in 1s forwards`,
        opacity: 0,
    },
    img: {
        maxWidth: "100%",
        transition: "all 0.2s ease-out",
        "&:hover": {
            opacity: 0.7,
            transition: "all 0.2s ease-out",
        },
    },
    "@keyframes fade-in": {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    },

});

/*
    Represents a band image on the page

    props:
        img: image shown in the item. Default is a placeholder
        link: Link where the image points to. A default is used if not specified.
        variant: One of small, mid or big
*/
function BandEntry(props) {
    const variant = props.variant ? props.variant : "big";
    const classes = useStyles();
    const link = props.link ? props.link : defaultLink;
    const img = props.img ? props.img : placeHolder;
    const delay = props.delay ? props.delay : "0s";

    const calc_sizes = (v) => {
        if (v === "small") {
            return [12, 6, 3];
        }
        if (v === "mid") {
            return [12, 6, 4];
        }
        if (v === "big") {
            return [12, 12, 6];
        }
        console.error("Invalid variant " + v);
        return [12, 12, 6];
    };

    const [xs, sm, md] = calc_sizes(variant);

    return (
        <Grid item container justifyContent="center"
            xs={xs} sm={sm} md={md}
            className={classes.imgWrapper}
            style={{ animationDelay: delay }}>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img}
                    className={classes.img} alt="Band"
                />
            </a>
        </Grid>
    )
}


export default BandEntry;
