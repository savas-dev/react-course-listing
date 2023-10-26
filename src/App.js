import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Courses from './components/Courses';
import Loading from './components/Loading';

function App() {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  const handleDeleteCourse = (id) =>{
    const afterDeleted = courses.filter((course) => course.id !== id)
    setCourses(afterDeleted)
  }

  const fetchCourses = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://mocki.io/v1/160780ff-7876-4244-8755-919f99f25b59')
      setCourses(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  return (
    <div className='App'>
      {loading ? (
        <Loading />
      ): (
        <>
        {courses.length === 0 ? (
          <div>
            <h2>You delete all courses</h2>
            <button className='cardRefreshButton' onClick={()=> {fetchCourses()}}>Refresh courses</button>
          </div>
        ) : 
        (<Courses propsCourses={courses} propsLoading={loading} removeCourse={handleDeleteCourse} />)}
        </>
      )
      }
      
    </div>
  );
}

export default App;
