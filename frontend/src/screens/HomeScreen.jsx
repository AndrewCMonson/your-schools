import { useState, useEffect } from 'react'
import axios from 'axios'

const HomeScreen = () => {
  const [schools, setSchools] = useState([])

  useEffect(() => {
    const fetchSchools = async () => {
      const { data } = await axios.get('/api')

      setSchools(data)
    }

    fetchSchools()
  }, [])

  return (
    <>
      <h1>Schools</h1>
        <div className='container mx-auto'>
          {schools.map((school) => (
          <div key={school.name} className='flex flex-row justify-around border-2 border-gray-200 rounded-lg p-4'>
            <h2>{school.name}</h2>
            <div>
              <p>{school.address}</p>
              <p>{school.phone}</p>
              <p>{school.email}</p>
            </div>
            <div>
            {
              school.days_open.map((day) => (
                <p key={day}>{day}</p>
              ))
            }
            </div>
          </div>
          ))}
        </div>
      
    </>
  )
}

export default HomeScreen