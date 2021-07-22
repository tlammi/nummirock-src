import { AppBar, Button, Toolbar } from "@material-ui/core"

const nummiLogo = "https://www.nummirock.fi/2017/images/Otsikon_grafiikat_Alasivu_1_2021.png";

function HeaderBar() {
    // environment variable for overriding the service path
    const url = process.env.PUBLIC_URL;

    const texts = [
        "Uutiset",
        "Ohjelma",
        "Info",
    ];

    const components = texts.map((txt, idx) => {
        const lower = txt.toLowerCase();
        return (
            <Button key={idx}
                href={url + "/#/" + lower}>
                {txt}
            </Button>)
    });

    return (
        <AppBar position="sticky">
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
