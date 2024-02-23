import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const {id, name, img} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle:{name}</h3>
            <p>id: {id}</p>
            <img src={img} alt="" />
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;