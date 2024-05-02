import './Detailed.css';
import { NewsProp } from '../util/interface';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Articles } from '../util/interface';

function Detailed({ articles }: NewsProp) {
    const title = useParams<string>().title
    const [foundArt, setFoundArt] = useState<Articles | null>(null)

    useEffect(() => {
        const foundArticle = articles?.find(article => title === article.title)
        if(foundArticle) {
            setFoundArt(foundArticle)
        }
    }, [])

    return (
        <>
            { foundArt &&
            <main>
                <h2>{foundArt.title}</h2>
                <h3>{foundArt.publishedAt}</h3>
                <img src={foundArt.urlToImage} alt={foundArt.title} />
                <h3>{foundArt.description}</h3>
            </main>
            }
        </>
    )
}

export default Detailed;