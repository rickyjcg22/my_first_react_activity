import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import BlogPage from './pages/Blog'
import RootLayout from './layouts/RootLayout'

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/blog" element={<BlogPage/>}></Route>
      </Routes>
    </RootLayout>
    
  );
}

export default App;
    // <div className="App">
    //   <Header></Header>

    //   <Content></Content>

    //   <Footer></Footer>
    // </div>