function getNews(type: string, location: string) {
    return fetch(`https://newsapi.org/v2/top-headlines?${type}=${location}&apiKey=381853cd07704bd1ab96ccc8bf16942a`)
        .then(res => {
            if(!res.ok) {
                throw new Error('Unable to get latest news. Try again later.')
            }
            return res.json()
        })
}

export { getNews };