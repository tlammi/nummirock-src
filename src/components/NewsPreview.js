import { makeStyles } from "@material-ui/core";
import HeaderedSection from "./HeaderedSection";
import { ExpandableNewsEntry } from "./NewsEntry";
import Grid from '../util/Grid';
import { fetchNewsInfo } from "../api/resources";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
    }
}
);


function parseNews(news) {
    const MAX_NEWS = 3;
    var components = [];
    news.slice(0, MAX_NEWS).forEach((item, idx) => {
        components.push(<ExpandableNewsEntry key={idx} url={item} delay={(idx + 1) * 0.2 + "s"} />);
    });
    return components;
}

function NewsPreview() {
    const classes = useStyles();

    const [news, setNews] = useState();

    useEffect(() => fetchNewsInfo().then(n => setNews(parseNews(n))), []);

    return (
        <HeaderedSection className={classes.root} header="Uutiset">
            <Grid item container>
                <Grid item xs={1}></Grid>
                <Grid container item xs={10} spacing={2} justifyContent="center">
                    {news}
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </HeaderedSection>
    );
};

export default NewsPreview;
