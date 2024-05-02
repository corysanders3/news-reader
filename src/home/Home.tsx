import './Home.css';
import Card from '../card/Card';
import { NewsProp } from '../util/interface';
import { Link } from 'react-router-dom';

function Home({ articles, newsReel }: NewsProp) {
    const newsCards = newsReel?.map(news => {
        return (
            <Card article={news} />
        )
    })

    return (
        <>
        { articles &&
            <main className='main-page'>
                <section className='main-story'>
                    <h2>{articles[0].title}</h2>
                    <h3>{articles[0].publishedAt}</h3>
                    <img src={articles[0].urlToImage} alt={articles[0].title} className='main-img' />
                    <h4>{articles[0].description}</h4>
                </section>
                <section className='news-reel'>
                    {newsCards}
                </section>
            </main>
        }
        </>
    )
}

export default Home;