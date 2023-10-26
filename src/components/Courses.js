import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Courses({ propsCourses, removeCourse }) {
    const [index, setIndex] = useState(0)
    const { content, title, price } = propsCourses[index]

    const checkIndex = (index) =>{
        if(index < 0 ){
            return propsCourses.length -1
        }
        if(index > propsCourses.length -1 ){
            return 0
        }
        return index
    }

    const prevCourse = () =>{
        setIndex((index)=>{
            let newIndex = index - 1
            return checkIndex(newIndex)
        })
    }

    const nextCourse = () =>{
        setIndex((index)=>{
            let newIndex = index + 1
            return checkIndex(newIndex)
        })
    }

    const getRandomContent = () =>{
        let randContent = Math.floor(Math.random() * propsCourses.length)

        setIndex((index)=>{
            if(randContent === index){
                randContent = index + 1
            }
        })
        setIndex(checkIndex(randContent))
    }

    return (
        <div>
            <div className='container'>
                <h2 className='title'>My Courses</h2>
                <button className='randomButton' onClick={getRandomContent}>Show Random Content</button>
            </div>

            <div className='course-list'>
                <button className='arrowIcon' onClick={prevCourse}>
                    <FaChevronLeft />
                </button>
                <div className='card'>
                    <div className=''>
                        <h2 className='card-title'>{title}</h2>
                        <h4 className='card-price'>{price} ₺</h4>
                    </div>
                    <p className='card-content'>
                        {content}
                    </p>

                    {/* <button className='cardDeleteButton' onClick={handleDelete}>Delete</button> */}
                </div>
                <button className='arrowIcon' onClick={nextCourse}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}

export default Courses