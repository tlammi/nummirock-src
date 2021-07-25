import { makeStyles } from "@material-ui/core";
import HeaderedSection from "./HeaderedSection";
import Grid from '../util/Grid';
import NewsGrid from "./NewsGrid";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
    }
}
);


function NewsPreview() {
    const classes = useStyles();
    return (
        <HeaderedSection className={classes.root} header="Uutiset">
            <Grid item container>
                <Grid item xs={1}></Grid>
                <NewsGrid no={3} />
                <Grid item xs={1}></Grid>
            </Grid>
        </HeaderedSection>
    );
};

export default NewsPreview;
