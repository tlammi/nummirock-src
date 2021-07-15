import { AppBar, Button, Toolbar } from "@material-ui/core"

import HomeIcon from "@material-ui/icons/Home";


function HeaderBar() {
    // environment variable for overriding the service path
    const url = process.env.PUBLIC_URL;

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Button href={url + "/"}><HomeIcon /></Button>
                <div style={{ flex: 1 }}></div>
                <Button href={url + "/#/uutiset"}>Uutiset</Button>
                <Button href={url + "/#/ohjelma"}>Ohjelma</Button>
                <Button href={url + "/#/info"}>Info</Button>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderBar;
