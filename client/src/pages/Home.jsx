import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    'https://free4kwallpapers.com/uploads/originals/2016/12/23/skyscrapers-in-night-city-wallpaper.jpg',
    'https://wallup.net/wp-content/uploads/2019/09/978768-cityscape-beautiful-sky-city-night-lights.jpg',
    'https://www.teahub.io/photos/full/242-2424939_photo-wallpaper-the-sky-trees-landscape-night-nature.jpg',
    'https://www.pixel4k.com/wp-content/uploads/2018/09/night-city-city-lights-tokyo-tower-4k_1538065175.jpg',
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000); // Change background every 4 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div className='bg-slate-800'>
      {/* top */}
      <div 
      className='flex flex-col gap-6 p-28 px-3 max-w-8xl mx-auto bg-cover bg-center'
      style={{
        backgroundImage: `url('${backgrounds[backgroundIndex]}')`,
        width: '100vw',
        padding: '10vh 12vw',
        paddingBottom: '15vh',
      }}
      >
        <h1 className='text-slate-300 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-50'>perfect</span>  
          <br />
          place with ease
        </h1>
        <div className='text-gray-200 text-md md:text-md'>
          Sahand Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-3xl 3xl:text-3xl text-orange-600 font-bold hover:underline'
        >
          Let's get started....
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover', display: 'none'
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-8xl mx-auto p-3 flex flex-col gap-8' style={{padding:"3vh 12vw", margin:"0"}}>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='font-semibold text-slate-300' style={{fontSize:"2.5vw"}}>Recent offers</h2>
              <Link className='text-lg italic text-orange-600 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='font-semibold text-slate-300' style={{fontSize:"2.5vw"}}>Recent places for rent</h2>
              <Link className='text-lg italic text-orange-600 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='font-semibold text-slate-300' style={{fontSize:"2.5vw"}}>Recent places for sale</h2>
              <Link className='text-lg italic text-orange-600 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
