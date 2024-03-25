import React, { useState } from 'react';
import { FaRegStar as StarOutline, FaStar as StarSolid } from 'react-icons/fa';
import './Article.css'

const Article = ({ article, click }) => {
  const [likes, setLikes] = useState(article.likes);
  const [isLiked, setIsLiked] = useState(article.isLiked);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <article className='blog-article'>
      <img src={article.image} alt={article.title} className='article-img'/>
      <div className='article-header'>
      <p>{article.date}</p>
      <button onClick={handleLikeClick} className='start-button'>
          {likes} {isLiked ? <StarSolid /> : <StarOutline />}
        </button>
      </div>
      <h2>{article.title}</h2>
      <p>{article.intro}</p>
      <button onClick={click}>Leggi di più</button>
    </article>
  );
};

export default Article;
