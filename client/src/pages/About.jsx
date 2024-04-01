// Desc: About page
import React from 'react'

export default function About() {
  return (
    <div className='max-w-8xl mx-auto bg-cover bg-center' style={{
      backgroundImage: `url('https://www.itl.cat/pngfile/big/8-85371_ultra-hd-wallpapers.jpg')`,
      minHeight:"90vh", padding:"2vh 10vw"}}>
      <h1 className='text-7xl font-bold mb-4 text-slate-300 pt-5'>About PalatialEstate</h1>
      <p className='mb-4 text-slate-50 font-bold' style={{fontSize:"1.2vw"}}>PalatialEstate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-slate-200 font-bold' style={{fontSize:"1.2vw"}}>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-50 font-bold' style={{fontSize:"1.2vw"}}>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    </div>
  )
}
