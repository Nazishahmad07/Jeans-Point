import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Jeans Point was born out of a passion for innovation and a desire to revolution the way people shop online. Our jorney began with a simple idea: to provide a platform where customers can easily discover, explore and punchase a wide range of products from the comfort of their homes</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronic and home essestials, we offer an extensive colletion sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Jeans Point, our mission is to deliver high-quality, trendy products with unmatched speed and reliability. We aim to provide a seamless shopping experience, ensuring our customers feel valued and stylish with every purchase.</p>
          </div>
        </div>
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>

        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-cols gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At Jeans Point, we guarantee premium products through rigorous quality checks, customer-driven improvements, and eco-friendly practices. Our focus is on delivering durable, stylish, and reliable items you can trust.</p>  
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-cols gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>At Jeans Point, we offer fast delivery, secure payments, easy navigation, and hassle-free returns, ensuring a seamless and stress-free shopping experience.</p>  
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-cols gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>At Jeans Point, we are committed to delivering outstanding support at every step of your shopping journey. Our dedicated team is available 24/7 to assist with any inquiries or concerns, ensuring quick and effective resolutions.</p>  
          </div>
        </div>
        <NewsletterBox/>
      </div>
  )
}

export default About
