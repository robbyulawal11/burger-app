import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { listOfAllPostsSet, listOfFavoritePostsSet } from "../../lib/store/slice/posts.slice";
import ListOfAllPosts from "./listOfPosts";
import ListOfFavoritePosts from "./listOfFavoritePosts";


const Post = () => {
    const {listOfAllPosts, listOfFavoritePosts} = useSelector((state)=> state.posts);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const {data} = await axios.get(`${import.meta.env.VITE_ENDPOINT_URL}/posts`);
          console.log(data)
          dispatch(listOfAllPostsSet(data));
          const filterFavorite = data.filter(data => data.id % 2 === 0);
          dispatch(listOfFavoritePostsSet(filterFavorite));
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    console.log(listOfAllPosts);
    console.log(listOfFavoritePosts);
    return ( 
        <div className="container">
            <ListOfAllPosts/>
            <ListOfFavoritePosts/>
        </div>
     );
}
 
export default Post;