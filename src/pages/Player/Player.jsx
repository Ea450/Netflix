import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        type: ''
    })


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDkxMmE2Y2ZmZjVlZDA3NjNiZDQyMDhjYTczZmQ4ZiIsIm5iZiI6MTczMjg5NTIzOS4zMTUsInN1YiI6IjY3NDllMjA3MDkzNmI2ZTRmYjlmYTQxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v3JdZnFZwvbkXbRfUza6qmoYVunzeGuK5KfTdF2w1c'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.error(err));
    }, [])
    return (
        <div className='player'>
            <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe
                width='90%' height='90%' title='trailer' frameBorder='0' allowFullScreen
                src={`https://www.youtube.com/embed/${apiData.key}`} ></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player