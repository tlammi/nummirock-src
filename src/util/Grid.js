import { Box, Grid as RGrid } from "@material-ui/core";

function Grid(props) {
    if (props.children) {
        return <RGrid {...props}>
            {props.children}
        </RGrid>
    } else {
        return (
            <RGrid {...props}>
                <Box width="100%" height="100%" bgcolor="background">
                </Box>
            </RGrid>
        );
    }
}

export default Grid;