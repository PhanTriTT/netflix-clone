import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie'
const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results))

    return () => {}
  }, [fetchURL])
  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex flex-row items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='left-0 cursor-pointer text-black z-10 bg-white rounded-full absolute opacity-50 hover:opacity-100 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='right-0 cursor-pointer text-black z-10 bg-white rounded-full absolute opacity-50 hover:opacity-100 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  )
}

export default Row
