import React, { FC, useEffect, useState } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import StarRatingComponent from 'react-star-rating-component'
import { fetchMovies, Movie } from '../../fetch/fetchMovies'
import './cards.css'

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

    return (
      <Spinner animation='grow' variant='primary' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    )

  const cards = movieResults.slice(0, amount).map((item: Movie) => {
    return (
      <div className='cards mt-4' style={{ width: 250 }}>
        <Card>
          <Card.Img variant='top' key={item.id} src={item.poster_path} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              <p>Rated: {item.vote_average}</p>
              <StarRatingComponent
                name={`rate` + item.id}
                starCount={10}
                value={item.vote_average}
                starColor={'#0066ff'}
              >
              </StarRatingComponent>
            </Card.Text>

          </Card.Body>
          <Card.Footer>
            <a href='/detail'>
              <i className='bi bi-eye text-center'></i>
            </a>
          </Card.Footer>
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
