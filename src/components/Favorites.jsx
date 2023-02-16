import React from 'react'
import '../App'
import { useAppContext } from './context/appContext'

const Favorites = () => {
  const {favorites, addToFavorites, removeFromFavorites} = useAppContext()

  console.log('FAVORITES ARE FAVORITES', favorites)

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id)
    return boolean
  }

  return (
    <div className='favorites'>
      {favorites.length > 0 ? favorites.map((book) => (
        <div key={book.id} className='book'>
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img src={book.image_url} alt={book.title} />
          </div>
          <div>
            {
              favoritesChecker(book.id) ?

              <button onClick={() => removeFromFavorites(book.id)}>Remove From Favorites</button>
              :

              <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
            }
          </div>
        </div>
      )): <h1>Favorite List Is Empty</h1>}
    </div>
  )
}

export default Favorites
