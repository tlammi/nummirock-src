import { Grid, makeStyles } from "@material-ui/core";
import HeaderedSection from "./HeaderedSection";
import { ExpandableNewsEntry } from "./NewsEntry";

const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        color: "white",
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
                <Grid container item xs={10} spacing={2} justifyContent="center">
                    <ExpandableNewsEntry delay="0.2s" />
                    <ExpandableNewsEntry delay="0.4s" />
                    <ExpandableNewsEntry delay="0.6s" />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </HeaderedSection>
    );
};

export default NewsPreview;
