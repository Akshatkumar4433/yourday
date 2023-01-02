import Image from 'next/image'

export default function weather({weatherObject}) {
    return (
        <div>
            <p>Can you see this: {weatherObject} ...</p>
        </div>
    )

}

export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c3109b6b5msh329f55f6a3e6c75p10ffebjsn28fd97160287',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    const weatherObject  = await fetch('https://open-weather13.p.rapidapi.com/city/Toronto', options)
    
    const weatherTemp = 55;

    console.log(weatherObject)

    return {
        props: {
            weatherTemp,
        }
    }
}