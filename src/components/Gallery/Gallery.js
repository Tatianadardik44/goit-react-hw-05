
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchList = async () => {
    try {
        const { data } = await axios.get('/trending/movie/day', {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2E4YmIxYWYzNTg1MzZiNGFmNGVkOTA5Mjg5YzFmZCIsInN1YiI6IjY2NjBiNzNkNWM0NGQ4ZDg2YTYwNjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xLskyr5GWLNClE8EbOrFk1qe0ygGo6RDYmAdBh2OdI',
            },
            params: {
                api_key: 'eca8bb1af358536b4af4ed909289c1fd',
                language: 'en-US',
            },
           
        });
        
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};


export const fetchMovieById = async (id) => {
    const { data } = await axios.get(`/movie/${id}`,
         {headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2E4YmIxYWYzNTg1MzZiNGFmNGVkOTA5Mjg5YzFmZCIsInN1YiI6IjY2NjBiNzNkNWM0NGQ4ZDg2YTYwNjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xLskyr5GWLNClE8EbOrFk1qe0ygGo6RDYmAdBh2OdI',
            },
            params: {
                api_key: 'eca8bb1af358536b4af4ed909289c1fd',
                language: 'en-US',
            },}
    )
 
    return data;
}
export const FetchMovieActors = async (id) => {
    const {data} = await axios.get(`/movie/${id}/credits`, {headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2E4YmIxYWYzNTg1MzZiNGFmNGVkOTA5Mjg5YzFmZCIsInN1YiI6IjY2NjBiNzNkNWM0NGQ4ZDg2YTYwNjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xLskyr5GWLNClE8EbOrFk1qe0ygGo6RDYmAdBh2OdI',
            },
            params: {
                api_key: 'eca8bb1af358536b4af4ed909289c1fd',
                language: 'en-US',
        },
    })
    return data
}
export const FetchMovieReviews = async (id) => {
    const { data } = await axios.get(`/movie/${id}/reviews`,
         {headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2E4YmIxYWYzNTg1MzZiNGFmNGVkOTA5Mjg5YzFmZCIsInN1YiI6IjY2NjBiNzNkNWM0NGQ4ZDg2YTYwNjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xLskyr5GWLNClE8EbOrFk1qe0ygGo6RDYmAdBh2OdI',
            },
            params: {
                api_key: 'eca8bb1af358536b4af4ed909289c1fd',
                language: 'en-US',
            },}
    )
    
    return data
}
export const FetchMovie = async (searchQuery) => {
    const { data } = await axios.get(`/search/movie`,
         {headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2E4YmIxYWYzNTg1MzZiNGFmNGVkOTA5Mjg5YzFmZCIsInN1YiI6IjY2NjBiNzNkNWM0NGQ4ZDg2YTYwNjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xLskyr5GWLNClE8EbOrFk1qe0ygGo6RDYmAdBh2OdI',
            },
             params: {
                query: searchQuery,
                api_key: 'eca8bb1af358536b4af4ed909289c1fd',
                language: 'en-US',
            },}
    )
    return data
}