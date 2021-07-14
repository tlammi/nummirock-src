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
        <Grid container item spacing={2}
            justifyContent="center" className={classes.root}>
            <NewsEntry brief={true} />
            <NewsEntry brief={true} />
            <NewsEntry brief={true} />
        </Grid>
    )
};

export default NewsPreview;
