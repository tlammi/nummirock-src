import { AppBar, Button, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

const nummiLogo = "https://www.nummirock.fi/2017/images/Otsikon_grafiikat_Alasivu_1_2021.png";

const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        color: "white"
    }
});
function HeaderBar() {
    // environment variable for overriding the service path
    const url = process.env.PUBLIC_URL;
    const classes = useStyles();

    const texts = [
        "Uutiset",
        "Ohjelma",
        "Info",
    ];

    const components = texts.map((txt, idx) => {
        const lower = txt.toLowerCase();
        return (
            <Button key={idx}
                href={url + "/#/" + lower}
                className={classes.root}>
                {txt}
            </Button>)
    });

    return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar>
                <Button href={url + "/#/"}>
                    <img src={nummiLogo} style={{
                        height: "32px"
                    }} alt="Home" />
                </Button>
                <div style={{ flex: 1 }}></div>
                {components}
            </Toolbar>
        </AppBar>
    );
}

export default HeaderBar;
