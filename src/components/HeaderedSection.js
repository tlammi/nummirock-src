import { Grid, Typography } from "@material-ui/core";


function HeaderedSection(props) {
    return (
        <Grid item container {...props} direction="column">
            <Grid item style={{
                textAlign: "center"
            }}>
                <Typography variant="h2" style={{
                    fontFamily: "nummirock_2013_custom_3Rg",
                }}>
                    {props.header}
                </Typography>
            </Grid>
            {props.children}
        </Grid>
    );
}


export default HeaderedSection;
