import { useEffect, useState } from "react";
import { fetchBandInfo } from "../api/resources.js";
import BandEntry from "./BandEntry.js";
import Grid from '../util/Grid';


function parseBandInfo(info) {
    var bands = [];
    ["big", "mid", "small"].forEach(size => {
        info[size].forEach((item, idx) => {
            bands.push(<BandEntry key={idx + size} img={item.src} link={item.link} variant={size}
                delay={`${idx * .05}s`} />)
        });
    });
    return bands;
}

/*
    Represent a grid of band images on a page
*/
function BandGrid() {

    const [components, setComponents] = useState();
    useEffect(() => fetchBandInfo().then(bands => setComponents(parseBandInfo(bands))), []);

    return (
        <Grid container item direction="row" style={{
            backgroundColor: "black"
        }}>
            <Grid item xs={false} md={1} lg={2} />
            <Grid xs={12} md={10} lg={8} item container justifyContent="center" spacing={4}>
                {components}
            </Grid>
            <Grid item xs={false} md={1} lg={2} />
        </Grid>
    );
}

export default BandGrid;
