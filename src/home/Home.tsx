import './Home.css';
import Card from '../card/Card';
import { NewsProp } from '../util/interface';
import { Link } from 'react-router-dom';

function Home({ articles, newsReel }: NewsProp) {
    const newsCards = newsReel?.map(news => {
        return (
            <Card article={news} key={news.title} />
        )
    })

    return (
        <>
        { articles &&
            <main className='main-page'>
                <section className='main-story'>
                    <Link to={`/article/${articles[0].title}`}><h2>{articles[0].title}</h2></Link>
                    <h3>{articles[0].publishedAt}</h3>
                    <Link to={`/article/${articles[0].title}`}><img src={articles[0].urlToImage} alt={articles[0].title} className='main-img' /></Link>
                    <h3>{articles[0].description}</h3>
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