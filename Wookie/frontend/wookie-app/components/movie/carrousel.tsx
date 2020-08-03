import Slider from "react-slick";


const Carrousel = (props) => {

    const { imgSliders } = props

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
    };

    return (
        <Slider {...settings}>
            {
                imgSliders && imgSliders.map((i, index) => (
                    <img  key={index} src={i.backdrop} className="img-fluid rounded wookie-slider-item" alt="..."/>
                ))
            }
        </Slider>
    )
}

export default Carrousel