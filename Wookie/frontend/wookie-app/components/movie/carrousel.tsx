import Slider from "react-slick";
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./card";


const Carrousel = (props) => {

    const { imgSliders } = props

    const settings = {
        infinite: true,
        speed: 1800,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        // centerMode: true,
    };

    return (
        <Slider {...settings}>
            {
                imgSliders && imgSliders.map((i, index) => (

                        <div key={index}>
                            <Link  href={"/movie/[id]"} as={`/movie/${i.slug}`}>
                                <img   src={i.backdrop} className="img-fluid rounded wookie-slider-item" alt="..."/>
                            </Link>
                        </div>

                ))
            }
        </Slider>
    )
}

Carrousel.propTypes = {
    imgSliders: PropTypes.array,
};

// Same approach for defaultProps too
Carrousel.defaultProps = {
    imgSliders: null,
};

export default Carrousel