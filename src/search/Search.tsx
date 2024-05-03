import './Search.css';
import { Dropdown } from '../util/interface';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Search({ articles }: Dropdown) {
    const [input, setInput] = useState<string>('')
    const [error, setError] = useState<string>('')
    
    function foundTitle(title: string) {
        setInput(title)
    }

    function checkInput(e: React.MouseEvent) {
        setError('')
        
        if(input.trim().length < 3) {
            e.preventDefault();
            setError('Input must be at least 3 characters long.');
        } else {
            setInput('');
        }
    }

    return (
        <>
            <form className='form-container'>
                <div>
                    <label htmlFor='search' className='form-label'>Search Here: </label>
                    <input 
                        type='text'
                        name='search'
                        id='search'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <Link to={`/article/${input}`}><button onClick={e => checkInput(e)}className='search-btn'>Search</button></Link>
                </div>
                <div className='dropdown'>
                    { Array.isArray(articles) && input && articles?.filter((art: {title: string}) => art.title.toLowerCase().includes(input.toLowerCase()) && art.title.toLowerCase() !== input.toLowerCase())
                    .map((filterArt: {title: string}) => (
                        <div key={filterArt.title} className='dropdown-item' onClick={() => foundTitle(filterArt.title)}>
                            {filterArt.title}
                        </div>
                    ))}
                </div>
            </form>
            { error && <p className='error'>{error}</p>}
        </>
    )
}

export default Search;