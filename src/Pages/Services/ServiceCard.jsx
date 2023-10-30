import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, img, title, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl h-96">
            <figure className="px-10 pt-10">
                <img src={img} alt="Service Photo" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center text-[#FF3811]">
                    <p>Price: ${price}</p>
                    <Link className="" to={`/book/${_id}`}><FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;


ServiceCard.propTypes = {
    service: PropTypes.object,
}