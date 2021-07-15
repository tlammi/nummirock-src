import { Grid } from "@material-ui/core";
import BandEntry from "./BandEntry.js";

/*
    Represent a grid of band images on a page

    props:
        variant: small, mid or big
*/
function BandGrid(props) {

    const entries = [];
    for (let i = 0; i < 6; ++i) {
        entries.push(<BandEntry
            img="https://nummirock.fi/2017/images/bandit_2021/WEB_VIRTUAL-69eyes.png"
            key={i} variant="big" delay={`${i * .2}s`}
        />);
    }

    for (let i = 0; i < 6; ++i) {
        entries.push(<BandEntry
            img="https://nummirock.fi/2017/images/bandit_2021/WEB_VIRTUAL-69eyes.png"
            key={i} variant="mid" delay={`${i * .2}s`}
        />);
    }
    for (let i = 0; i < 6; ++i) {
        entries.push(<BandEntry
            img="https://nummirock.fi/2017/images/bandit_2021/WEB_VIRTUAL-69eyes.png"
            key={i} variant="small" delay={`${i * .2}s`}
        />);
    }

    return (
        <Grid container item direction="row" style={{
            backgroundColor: "black"
        }}>
            <Grid xs={false} md={1} lg={2} />
            <Grid xs={12} md={10} lg={8} item container justifyContent="center" spacing={4}>
                {entries}
            </Grid>
            <Grid xs={false} md={1} lg={2} />
        </Grid>
    );
}

export default BandGrid;
