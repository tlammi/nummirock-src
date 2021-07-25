import { useEffect, useState } from "react";
import { fetchBandInfo } from "../api/resources";
import BandEntry from "./BandEntry";
import HeaderedSection from "./HeaderedSection";
import Grid from '../util/Grid';


function parseBandInfo(bands) {
    const MAX_BANDS = 4;
    const joined = bands["big"].concat(bands["mid"]).concat(bands["small"]);
    return joined.slice(0, MAX_BANDS).map((item, idx) => {
        const delay = (0.2 * idx).toString() + "s";
        return (<BandEntry
            key={idx} delay={delay}
            variant="small" img={item.src}
        ></BandEntry>)
    });
}

function BandPreview() {
    const [components, setComponents] = useState();
    useEffect(() => fetchBandInfo().then(bands => setComponents(parseBandInfo(bands))), []);

    return (
        <HeaderedSection header="Ohjelma">
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
