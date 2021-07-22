import { useMemo } from "react";
import { fetchBandInfo } from "../api/resources.js";
import BandEntry from "./BandEntry.js";
import Grid from '../util/Grid';

/*
    Represent a grid of band images on a page
*/
function BandGrid() {

    const components = useMemo(() => {
        const bands = fetchBandInfo();
        var out = [];

        ["big", "mid", "small"].forEach((size) => {

            bands[size].forEach((item, idx) => {
                out.push(<BandEntry key={idx} img={item.src} link={item.link} variant={size}
                    delay={`${idx * .05}s`} />)
            });
        });

        return out;
    });

    return (
        <Grid container item direction="row" style={{
            backgroundColor: "black"
        }}>
            <Grid xs={false} md={1} lg={2} />
            <Grid xs={12} md={10} lg={8} item container justifyContent="center" spacing={4}>
                {components}
            </Grid>
            <Grid xs={false} md={1} lg={2} />
        </Grid>
    );
}

export default BandGrid;
