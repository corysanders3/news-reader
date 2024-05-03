interface News {
    status: string,
    totalResults: number,
    articles: Articles[]
}

interface Articles {
    source: Source,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

interface Source {
    id: string,
    name: string
}

interface NewsProp {
    articles: Articles[] | null,
    newsReel?: Articles[] | null
}

interface Article {
    article: Articles
}

interface Dropdown {
    articles: Articles[] | null | React.ReactNode,
}

export type { News, NewsProp, Articles, Article, Dropdown };