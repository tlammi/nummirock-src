import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "60vh",
        color: theme.palette.text.primary,
    },
    spacer: {
        minHeight: "10vh"
    }
}));


function HeaderedSection(props) {
    const classes = useStyles();
    return (
        <Grid item container
            className={classes.root} direction="column"
            justifyContent="center">
            <Grid item style={{
                textAlign: "center"
            }}>
                <Typography variant="h2" style={{
                    fontFamily: "nummirock_2013_custom_3Rg",
                }}>
                    {props.header}
                </Typography>
            </Grid>
            <Grid item className={classes.spacer}></Grid>
            {props.children}
        </Grid>
    );
}


export default HeaderedSection;
