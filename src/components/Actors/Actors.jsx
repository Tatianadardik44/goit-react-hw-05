const Actors = ({actors}) => {
    return (
        <div>
               {actors.map((actor) => (
                     <li key={actor.cast_id}>
                       <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} height={320} width={200}/>
                       <p>{actor.original_name}</p>
                       <p>Character:{ actor.character}</p>
                    </li>
                )
                   
                )}
        </div>
    )
}
export default Actors