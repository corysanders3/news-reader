import './Card.css';
import { Article } from '../util/interface';

function Card({ article }: Article) {

    return (
        <div className='single-art'>
            <h4>{article.title}</h4>
            <img src={article.urlToImage} alt={article.title} className='single-img' />
        </div>
    )
}

export default Card;