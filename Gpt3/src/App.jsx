import { Article , Cta , Navbar , Brand} from "./components";
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
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
        <Article/>
        
        
      </div>
    </>
  )
}

export default App