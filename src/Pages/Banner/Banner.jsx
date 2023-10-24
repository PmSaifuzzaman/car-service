import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full " />
                <div className="absolute py-5 pl-20 lg:w-1/2 transform lg:top-40 top-10 space-y-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn  bg-[#FF3811] text-white">Discover More</button>
                    <button className="btn btn-outline text-white ml-5">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform left-10 right-10 top-3/4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle ml-5 bg-[#FF3811] text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute py-5 pl-20 lg:w-1/2 transform lg:top-40 top-10 space-y-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn  bg-[#FF3811] text-white">Discover More</button>
                    <button className="btn btn-outline text-white ml-5">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform left-10 right-10 top-3/4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle ml-5 bg-[#FF3811] text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute py-5 pl-20 lg:w-1/2 transform lg:top-40 top-10 space-y-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn  bg-[#FF3811] text-white">Discover More</button>
                    <button className="btn btn-outline text-white ml-5">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform left-10 right-10 top-3/4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle ml-5 bg-[#FF3811] text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute py-5 pl-20 lg:w-1/2 transform lg:top-40 top-10 space-y-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn  bg-[#FF3811] text-white">Discover More</button>
                    <button className="btn btn-outline text-white ml-5">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform left-10 right-10 top-3/4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle ml-5 bg-[#FF3811] text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;