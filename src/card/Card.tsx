import './Card.css';
import { Article } from '../util/interface';
import { Link } from 'react-router-dom';

function Card({ article }: Article) {

    return (
        <Link to={`/article/${article.title}`}>
            <div className='single-art'>
                <h4>{article.title}</h4>
                <img src={article.urlToImage} alt={`Picture of ${article.title}`} className='single-img' />
            </div>
        </Link>
    )
}

export default Card;