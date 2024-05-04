import './Detailed.css';
import { NewsProp } from '../util/interface';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Articles } from '../util/interface';

function Detailed({ articles }: NewsProp) {
    const title = useParams<string>().title
    const [foundArt, setFoundArt] = useState<Articles | null>(null)

    useEffect(() => {
        if(title) {
            const foundArticle = articles?.find(article => article.title.toLowerCase().includes(title.toLowerCase()))
            if(foundArticle) {
                setFoundArt(foundArticle)
            }
        }
    })

    return (
        <>
            { foundArt &&
            <main className='detailed-section'>
                <h2>{foundArt.title}</h2>
                <h3>{foundArt.publishedAt}</h3>
                <img src={foundArt.urlToImage} alt={foundArt.title} className='detailed-img' />
                <h3>{foundArt.content}</h3>
            </main>
            }
        </>
    )
}

export default Detailed;