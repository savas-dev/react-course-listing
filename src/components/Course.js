import React from 'react'

function Course({propsCourseDetail, removeOneCourse}) {

    const handleDelete = ()=>{
        removeOneCourse(propsCourseDetail.id)
    }

  return (
    <div className='card'>
        <div className=''>
            <h2 className='card-title'>{propsCourseDetail.title}</h2>
            <h4 className='card-price'>{propsCourseDetail.price} ₺</h4>
        </div>
        <p className='card-content'>
            {propsCourseDetail.content}
        </p>

        <button className='cardDeleteButton' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Course