import './blog.css';
import {Article} from '../../components';
// import { blog1 , blog2 ,blog3,blog4 ,blog5} from "../../assets"
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" >
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Alot is happening  and we are blogging  about it
        </h1>        
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          {/* <img src={blog1} alt="blog1" /> */}
        </div>
        <div className='gpt3__blog-container__groupB'>
          {/* <img src={blog2} alt="blog2" />
          <img src={blog3} alt="blog3" />
          <img src={blog4} alt="blog4" />
          <img src={blog5} alt="blog5" /> */}
        </div>
      </div>
    </div>
  )
}

export default Blog;