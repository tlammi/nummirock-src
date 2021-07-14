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
                <NewsEntry brief={true} />
                <NewsEntry brief={true} />
                <NewsEntry brief={true} />
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
};

export default NewsPreview;
