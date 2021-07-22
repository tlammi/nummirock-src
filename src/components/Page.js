
import { makeStyles } from '@material-ui/styles';
import HeaderBar from './HeaderBar';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background,
    }
}));

function Page(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HeaderBar />
            {props.children}
        </div>
    );
}

export default Page;
