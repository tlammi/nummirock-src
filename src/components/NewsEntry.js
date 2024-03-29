
import { Button, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import newsPlaceholder from '../resources/news_placeholder.md';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Grid from '../util/Grid';


const SHORT_TEXT_LIMIT = 100;

const useStyles = makeStyles(theme => ({
    root: {
        animation: `$fade-in 3s forwards`,
        opacity: 0,
        color: theme.palette.text.primary,
    },
    collapseButton: {
        color: theme.palette.text.primary,
    },
    "@keyframes fade-in": {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    },
}));

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

    useEffect(() => fetch(url)
        .then(r => r.text())
        .then(text => setMd(text)), [url]);

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

    useEffect(() => fetch(url)
        .then(r => r.text())
        .then(text => {
            const [a, b] = split(text);
            setStart(a);
            setEnd(b);
        }), [url]);

    return (
        <Grid item xs={12} md={6} xl={4} className={classes.root}
            style={{
                animationDelay: delay
            }}>
            <Collapse in={!brief} collapsedSize="145px">
                <ReactMarkdown>
                    {start + end}
                </ReactMarkdown>
            </Collapse>
            <Button onClick={() => setBrief(!brief)}
                className={classes.collapseButton}>{buttonIcon}</Button>
        </Grid>
    );
};

export { NewsEntry, ExpandableNewsEntry };
