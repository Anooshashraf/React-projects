import './blog.css';
import {Article} from '../../components';
import { BLog1 , BLog2 ,BLog3,BLog4 ,BLog5} from "./imports";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" >
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Alot is happening, <br/> and we are blogging  about it
        </h1>        
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgURL={BLog4} date={'Sep 03,2004'} title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgURL={BLog2} date={'Sep 03,2004'} title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={BLog3} date={'Sep 03,2004'} title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={BLog1} date={'Sep 03,2004'} title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={BLog5} date={'Sep 03,2004'} title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog;