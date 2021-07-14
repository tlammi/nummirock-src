
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import newsPlaceholder from '../resources/news_placeholder.md';


const SHORT_TEXT_LIMIT = 100;

const useStyles = makeStyles({
    root: {
        animation: `$fade-in 3s forwards`,
        opacity: 0,
    },

    "@keyframes fade-in": {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    }
});
/**
 * Represents a news entry in the HTML.
 * 
 * props:
 *  url - URL to the markdown file represented 
    brief - If true, shorten too long text, otherwise show the whole text.
            Default is false
    delay - Set animation delay
 */
function NewsEntry(props) {
    const [md, setMd] = useState("This is news");
    const url = props.url ? props.url : newsPlaceholder;
    const brief = props.brief ? props.brief : false;
    const delay = props.delay ? props.delay : "0s";

    const maybe_shorten = (text) => {
        if (brief && text.length >= SHORT_TEXT_LIMIT) {
            return text.substr(0, SHORT_TEXT_LIMIT) + "...";
        }
        return text;
    };

    const classes = useStyles();

    fetch(url)
        .then(r => r.text())
        .then(text => setMd(maybe_shorten(text)));
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}
            style={{
                animationDelay: delay
            }}>
            <ReactMarkdown>
                {md}
            </ReactMarkdown>
        </Grid>
    );
};

export default NewsEntry;
