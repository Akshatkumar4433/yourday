import Link from "next/link";

export default function Test({newsData}) {
    return (
        <div>
            <ul>
        {
        newsData.map((new1) => (
            <li>
                <p>{new1.name}</p>
                <p>{new1.description}</p>
            </li>
        ))
        }
        </ul>
        </div>
    )
}


export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '6c3109b6b5msh329f55f6a3e6c75p10ffebjsn28fd97160287',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
    
    const newsObject = await res.json();
    const newsData = newsObject['value']

    return {
        props: {
            newsData,
        },
    }
}