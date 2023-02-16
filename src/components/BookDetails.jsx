import { useState, useEffect } from 'react'
import '../App'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BOOK_DETAILS_URL } from '../API'

const BookDetails = () => {
  const {id} = useParams()

  const [book, setBook] = useState({})

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
    .then(res => {
      setBook(res.data)
    }).catch(err => console.log(err))
  }, [id])

  return (
    <div className='book-details'>
      <div>
        <h2 className='book-img'>{book?.title}</h2>
        <img src={book.image_url} alt={book?.title} />
      </div>
      <div className='book-description'>
        <h2>Description:</h2>
        <p>{book?.description}</p>
        <h2>Authors:</h2>
        <p>{book?.authors}</p>
        <h2>Genre:</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  )
}

export default BookDetails