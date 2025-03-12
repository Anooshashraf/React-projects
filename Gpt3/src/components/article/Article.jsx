import React from 'react'
import './article.css'

const Article = ({imgURL , date , title}) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-img'>
        <img src={imgURL} alt="" />
      </div>

      <div className='gpt3__blog-container__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>READ FULL ARTICLE</p>
      </div>
    </div>
  )
}

export default Article;