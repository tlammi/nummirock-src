import { Grid, makeStyles, Typography } from "@material-ui/core";
import BandEntry from "./BandEntry";
import HeaderedSection from "./HeaderedSection";


const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        color: "white"
    }
});

function BandPreview() {

    const classes = useStyles();

    return (
        <HeaderedSection header="Ohjelma" className={classes.root}>
            <Grid item container direction="row" justifyContent="space-between">
                <Grid item xs={1}></Grid>
                <Grid item container xs={10} justifyContent="center" spacing={4}>
                    <BandEntry delay="0.2s" variant="small" img="https://nummirock.fi/2017/images/bandit_2021/WEB_VIRTUAL-69eyes.png"></BandEntry>
                    <BandEntry delay="0.4s" variant="small" img="https://nummirock.fi/2017/images/bandit_2021/WEB_VIRTUAL-Ensiferum.png"></BandEntry>
                    <BandEntry delay="0.6s" variant="small" img="https://nummirock.fi/2017/images/bandit_2021/WEB_VIRTUAL-FearOfDomination.png"></BandEntry>
                    <BandEntry delay="0.8s" variant="small" img="https://nummirock.fi/2017/images/bandit_2021/WEB_VIRTUAL-NooraLouhimoExperience.png"></BandEntry>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </HeaderedSection>
    );
};

export default BandPreview;
