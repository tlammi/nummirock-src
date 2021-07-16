import { Grid, makeStyles } from "@material-ui/core";
import { useMemo } from "react";
import { fetchBandInfo } from "../api/resources";
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
    const components = useMemo(() => {
        const bandInfo = fetchBandInfo();
        var out = [];
        bandInfo["big"].forEach((item, idx) => {
            const delay = (0.2 * idx).toString() + "s";
            out.push(<BandEntry
                key={idx} delay={delay}
                variant="small" img={item.src}
                link={item.link} />);
        });
        return out;
    }, []);

    return (
        <HeaderedSection header="Ohjelma" className={classes.root}>
            <Grid item container direction="row" justifyContent="space-between">
                <Grid item xs={1}></Grid>
                <Grid item container xs={10} justifyContent="center" spacing={4}>
                    {components}
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </HeaderedSection>
    );
};

export default BandPreview;
