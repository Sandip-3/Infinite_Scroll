import MovieCard from '../MovieCard'

interface MovieProps {
    movieInfo : Info[]
}

interface Info{
    title: string
    id: string
    description : string
}

const MovieComponent = ({movieInfo} : MovieProps) => {
  return (
      <div className='movie_container'>
          <h1 className='text-center m-12'>List of Movies</h1>
          <div className='grid grid-cols-3 gap-12'>
              {movieInfo.map((movie, index) => {
                  return <MovieCard key={index} MyData = {movie} />
              }) }
          </div>
    </div>
  )
}

export default MovieComponent