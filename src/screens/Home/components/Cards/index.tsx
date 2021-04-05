import React, { FC, useEffect, useState } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { fetchMovies, Movie } from '../../../../utils/api'
import './home-cards.css'

interface CardsProps {
  amount: number,
  dataPath: string,
  title: string
}

const Cards: FC<CardsProps> = ({ amount, dataPath, title }) => {

  const [movieResults, setMovieResults] = useState<Movie[]>([]);

  const posterWidthForCards = 500;

  useEffect(() => {

    const fetchData = async () => {
      setMovieResults(await fetchMovies(dataPath, posterWidthForCards))
    };
    fetchData();
  }, [dataPath]);

  console.log('movies: ' + JSON.stringify(movieResults));

  if (movieResults === undefined)
    // TODO: reemplazar loading
    return <p>Loading...</p>

  const cards = movieResults.slice(0, amount).map((item: Movie, index: number) => {
    return (
      <div className='cards' style={{ width: 250 }}>
        <Card>
          <Card.Img variant="top" key={index} src={item.poster_path} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    )
  })
  return (
    <div className='home-cards'>
      <h2>{title}</h2>
      <CardDeck>
        {cards}
      </CardDeck>
    </div>
  )
}

export { Cards }
