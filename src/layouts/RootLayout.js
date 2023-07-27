import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

const RootLayout = ({children}) => {
    return(

        <div className="root-main">
            <Header></Header>
            <Main cdata = {children}></Main>
            <Footer></Footer>
        </div>

    )
}

export default RootLayout