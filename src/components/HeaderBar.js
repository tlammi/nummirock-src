import { AppBar, Button, Toolbar } from "@material-ui/core"

import HomeIcon from "@material-ui/icons/Home";


function HeaderBar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Button href="/"><HomeIcon /></Button>
                <div style={{ flex: 1 }}></div>
                <Button href="/#/uutiset">Uutiset</Button>
                <Button href="/#/ohjelma">Ohjelma</Button>
                <Button href="/#/info">Info</Button>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderBar;
