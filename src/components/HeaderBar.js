import { AppBar, Button, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import InternalLink from "./InternalLink";

const nummiLogo = "https://www.nummirock.fi/2017/images/Otsikon_grafiikat_Alasivu_1_2021.png";

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.main,
        '&:hover': {
            background: theme.palette.primary.light,
        }
    }
}));

function HeaderBar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const texts = [
        "Uutiset",
        "Ohjelma",
        "Info",
    ];

    const theme = useTheme();
    const classes = useStyles();
    const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    };

    const components = texts.map((txt, idx) => {
        const lower = txt.toLowerCase();
        return (
            <InternalLink
                to={lower}>
                <MenuItem key={idx} className={classes.root}>
                    <Typography variant="h6">
                        {txt}
                    </Typography>
                </MenuItem>
            </InternalLink>
        );
    });

    const buttons = (() => {
        if (!bigScreen) {
            return (
                <div>
                    <Button onClick={handleOpen}>
                        <MenuIcon></MenuIcon>
                    </Button>
                    <Menu
                        disableScrollLock={true}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center"
                        }}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        {components}
                    </Menu>
                </div>
            );
        } else {
            return components;
        }
    })();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <InternalLink to="">
                    <MenuItem>
                        <img src={nummiLogo} style={{
                            height: "32px"
                        }} alt="Home">
                        </img>
                    </MenuItem>
                </InternalLink>
                <div style={{ flex: 1 }}></div>
                {buttons}
            </Toolbar>
        </AppBar>
    );
}

export default HeaderBar;
