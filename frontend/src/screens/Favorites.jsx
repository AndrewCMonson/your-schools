import { GET_ME } from "../utils/queries"
import { REMOVE_FAVORITE } from "../utils/mutations"
import { useQuery, useMutation } from '@apollo/client'
import Auth from '../utils/auth'

const Favorites = () => {
    const { loading, data } = useQuery(GET_ME)
    const [removeFavorite] = useMutation(REMOVE_FAVORITE)
    const userData = data?.me || {}


    if (loading) {
        return <div>Loading...</div>
    }

    const handleRemoveFavorite = async (schoolId) => {
        try {
            await removeFavorite({
                variables: { schoolId },
                refetchQueries: [{ query: GET_ME }]
            })
        } catch (e) {
            console.error(e)
        }
    }

  return (
    <div>
      <h2>{userData.username}'s Favorites</h2>
      <div>
        {userData.favorites.map((school) => (
          <div key={school.id}>
            <p>{school.name}</p>
            <button onClick={() => handleRemoveFavorite(school.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Favorites