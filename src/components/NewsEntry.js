
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import newsPlaceholder from '../resources/news_placeholder.md';


const SHORT_TEXT_LIMIT = 100;

/**
 * Represents a news entry in the HTML.
 * 
 * props:
 *  url - URL to the markdown file represented 
    brief - If true, shorten too long text, otherwise show the whole text.
            Default is false
 */
function NewsEntry(props) {
    const [md, setMd] = useState("This is news");
    const url = props.url ? props.url : newsPlaceholder;
    const brief = props.brief ? props.brief : false;

    const maybe_shorten = (text) => {
        if (brief && text.length >= SHORT_TEXT_LIMIT) {
            return text.substr(0, SHORT_TEXT_LIMIT) + "...";
        }
        return text;
    };

    fetch(url)
        .then(r => r.text())
        .then(text => setMd(maybe_shorten(text)));
    return (
        <Grid item xs={6}>
            <ReactMarkdown>
                {md}
            </ReactMarkdown>
        </Grid>
    );
};

export default NewsEntry;
