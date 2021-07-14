import { Grid, makeStyles } from "@material-ui/core";
import NewsEntry from "./NewsEntry";

const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        color: "white"
    }
}
);

function NewsPreview() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={1}></Grid>
            <Grid container item xs={10} spacing={2} justifyContent="center">
                <NewsEntry brief={true} delay="0.2s" />
                <NewsEntry brief={true} delay="0.4s" />
                <NewsEntry brief={true} delay="0.6s" />
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
};

export default NewsPreview;
