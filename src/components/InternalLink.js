import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
    root: {
        textDecoration: "none",
        color: theme.palette.text.primary
    }
}));

function InternalLink(props) {

    const classes = useStyles();

    return (
        <Link
            className={classes.root}
            underline="none"
            {...props}>
            {props.children}
        </Link>

    );
}

export default InternalLink;