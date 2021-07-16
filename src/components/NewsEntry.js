
import { Button, Grid, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import newsPlaceholder from '../resources/news_placeholder.md';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const SHORT_TEXT_LIMIT = 100;

const useStyles = makeStyles({
    root: {
        animation: `$fade-in 3s forwards`,
        opacity: 0,
    },

    md: {
        fontFamily: "nummirock_2013_custom_3Rg"
    },
    "@keyframes fade-in": {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    },
});

/**
 * Represents a news entry in the HTML.
 * 
 * props:
 *  url - URL to the markdown file represented 
    delay - Set animation delay
 */
function NewsEntry(props) {
    const [md, setMd] = useState("This is news");

    const url = props.url ? props.url : newsPlaceholder;
    const delay = props.delay ? props.delay : "0s";

    const classes = useStyles();

    fetch(url)
        .then(r => r.text())
        .then(text => setMd(text));

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
}

/**
 * Represents a news entry in the HTML.
 * 
 * props:
 *  url - URL to the markdown file represented 
    delay - Set animation delay
 */
function ExpandableNewsEntry(props) {
    const [brief, setBrief] = useState(true);

    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const url = props.url ? props.url : newsPlaceholder;
    const delay = props.delay ? props.delay : "0s";

    const split = (text) => {
        return [text.substr(0, SHORT_TEXT_LIMIT), text.substr(SHORT_TEXT_LIMIT)];
    };

    const classes = useStyles();
    const buttonIcon = (brief ? <ExpandMoreIcon /> : <ExpandLessIcon />);

    fetch(url)
        .then(r => r.text())
        .then(text => {
            const [a, b] = split(text);
            setStart(a);
            setEnd(b);
        });

    return (
        <Grid item xs={12} md={6} xl={4} className={classes.root}
            style={{
                animationDelay: delay
            }}>
            <Collapse in={!brief} collapsedSize="145px">
                <ReactMarkdown className={classes.md}>
                    {start + end}
                </ReactMarkdown>
            </Collapse>
            <Button onClick={() => setBrief(!brief)}
                style={{ color: "white" }}>{buttonIcon}</Button>
        </Grid>
    );
};

export { NewsEntry, ExpandableNewsEntry };
