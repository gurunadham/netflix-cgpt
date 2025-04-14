import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
     return (
       <div className="w-48 pr-4 hover:scale-125 hover:w-55">
         <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
       </div>
     );
   };
   export default MovieCard;