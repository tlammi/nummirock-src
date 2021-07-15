
import HeaderBar from './HeaderBar';


function Page(props) {
    return (
        <div>
            <HeaderBar />
            {props.children}
        </div>
    );
}

export default Page;
