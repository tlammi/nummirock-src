import { Box } from "@material-ui/core";


function Img(props) {
    return (<Box bgcolor="background">
        <img alt="" {...props} />
    </Box>);
}

export default Img;