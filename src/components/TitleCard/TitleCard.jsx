import { useRef, useEffect, useState } from 'react'
// import cards_data from '../../assets/cards/Cards_data.js'
import './TitleCard.css'
import { Link } from 'react-router-dom'


const TitleCard = ({ title, catogrey }) => {
    const [dataApi, setDataApi] = useState([])
    const cardsRef = useRef()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDkxMmE2Y2ZmZjVlZDA3NjNiZDQyMDhjYTczZmQ4ZiIsIm5iZiI6MTczMjg5NTU2Ny43NDkzMzU4LCJzdWIiOiI2NzQ5ZTIwNzA5MzZiNmU0ZmI5ZmE0MWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FDW5q3kpLYg88GhCiGSH2w3qs0CXXXZLsjcjeHtNqXQ'
        }
    };

    const handelWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${catogrey ? catogrey : 'now_playing'}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setDataApi(res.results))
        cardsRef.current.addEventListener('wheel', handelWheel)
    }, [])
    return (
        <div className='title-card'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {dataApi.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCard