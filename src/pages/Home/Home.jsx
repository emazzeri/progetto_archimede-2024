// components/Home.js
import React from 'react';
import articles from "../../article.json";
import './Home.css'
import Article from '../../common/Article/Article';

const Home = () => {
  const funzioneClick = () => {
    console.log('Hello!')
  }
  
  return (
    <div id="home" className='wrapper'>
      <h1>Article Homepage</h1>
      <section className='section-one'>
        <div className="left-section">
        {articles.map(article => (
          <Article
            key={article.id}
            article={article}
            click={funzioneClick}
          />
        ))}
        </div>
        <div className="right-section">
          <h2>Right Column</h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
