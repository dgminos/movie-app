import React, { FC } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component'
import { Link } from 'react-router-dom'
import imagenotfound from '../../assets/imagenotfound.png'
import { Movie } from '../../types'
import { CardsProps } from '../../types'
import './cards.css'


const Cards: FC<CardsProps> = ({ amount, results, title }) => {

  const cards = results.slice(0, amount).map((item: Movie) => {
    const posterAvailable = (item.poster_path !== null && !item.poster_path.includes('null'))
    const cardImage = <Card.Img variant='top' src={item.poster_path!} />
    const placeholder = <Card.Img variant='top' src={imagenotfound} />

    return (
      <div className='cards h-100 mt-4' style={{ width: 300 }} key={item.id}>
        <Link to={'/movie/?id=' + item.id}>
          <Card >
            {posterAvailable ? cardImage : placeholder}
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
        </Link>
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
