import { useEffect, useState } from "react";
import { fetchNewsInfo } from "../api/resources";
import Grid from "../util/Grid";
import { ExpandableNewsEntry } from "./NewsEntry";


function parseNews(news) {
    var components = [];
    news.forEach((item, idx) => {
        components.push(<ExpandableNewsEntry key={idx} url={item} delay={(idx) * 0.1 + "s"} />);
    });
    return components;
}

/*
    Collection of news in the webpage

    props:
        no - Max number of news entries. Inf with null
*/
function NewsGrid(props) {
    const [news, setNews] = useState([]);
    useEffect(() => {
        if (props.no === null)
            fetchNewsInfo().then(n => setNews(parseNews(n)));
        else
            fetchNewsInfo().then(n => setNews(parseNews(n.slice(0, props.no))));
    }, [props.no]);

    return (
        <Grid container item xs={10} spacing={2} justifyContent="center">
            {news}
        </Grid>
    );
}


export default NewsGrid;