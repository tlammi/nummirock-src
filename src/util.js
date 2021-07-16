import { useEffect } from "react";

import { withRouter } from "react-router-dom";


function ScrollToTopImpl({ history }) {
    useEffect(() => {
        const scroll = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => { scroll(); };
    }, []);
    return null;
}

const ScrollToTop = withRouter(ScrollToTopImpl);

export { ScrollToTop };
