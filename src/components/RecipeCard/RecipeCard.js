import { deleteFavoriteOp } from 'redux/favorite/operation'
import { useDispatch } from 'react-redux';


const RecipeCard = ({ id, title, description, preview, time }) => {
    const dispatch = useDispatch();
    const onClick = id => {
        dispatch(deleteFavoriteOp(id));
    };
    return (<li
        size={600}
        key={id}
    >
        <h2 > {title}</h2>
        <div >
            <img
                src={preview}
                alt=""
            />
            <div >
                <p> {description} </p>
                <p>{time}</p>
            </div>

            <div >
                <button
                    type="button"
                    key={id}
                    onClick={() => onClick(id)}
                >
                    Delete</button>

                <button>See recipe</button>
            </div>
        </div>
    </li>)
}

export default RecipeCard;