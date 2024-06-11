const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
import css from "./Actor.module.css"
const Actors = ({ actors }) => {
    return (
        <div>
               {actors.map((actor) => (
                     <li key={actor.cast_id} className={css.card}>
                       <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`: defaultImg} alt={actor.name} height={320} width={200}/>
                       <p><b>Actor:</b>  {actor.original_name}</p>
                       <p><b>Character:</b>  { actor.character}</p>
                    </li>
                )
                   
                )}
        </div>
    )
}
export default Actors