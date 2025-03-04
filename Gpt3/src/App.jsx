import { Article , Feature , Cta , Navbar , Brand} from "./components";
import { Blog , Features , Footer , Header , Possibility , WhatGPT3} from "./containers";
import './App.css';

const App = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Possibility/>
        <Blog/>
        <Footer/>
        <Features/>
        <Article/>
        <Feature/>
        <Cta/>
        <Brand/>
      </div>
    </>
  )
}

export default App