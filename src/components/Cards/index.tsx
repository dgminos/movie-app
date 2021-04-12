import React, { FC } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component'
import { Movie } from '../../hooks/useFetch'
import './cards.css'

interface CardsProps {
  amount: number,
  results: Movie[],
  title: string
}

const Cards: FC<CardsProps> = ({ amount, results, title }) => {

  const cards = results.slice(0, amount).map((item: Movie) => {
    return (
      <div className='cards h-100 mt-4' style={{ width: 250 }} key={item.id}>
        <a href='/detail'>
          <Card >
            <Card.Img variant='top' src={item.poster_path} />
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
              <i className='bi bi-eye text-center'></i>
            </Card.Footer>
          </Card>
        </a>
      </div>
    )
  })
  return (
    <div className='cards-container'>
      <h2>{title}</h2>
      <CardDeck>
        {cards}
      </CardDeck>
    </div>
  )
}

export { Cards }
