import React from 'react'
// import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id="contact" className="bg-black text-white py-20" >
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-12 text-transparent 
      bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Contact</h2>
      <div id='Contact' className="m-8 p-10 flex rounded-3xl rounded-md rounded-lg flex-col
      bg-slate-800 md:flex-row items-center md:space-x-12">
        
        <div className="flex-1">
        <h3 className='text-xl font-bold'>Let's Talk</h3>
        <p className='text-xl font-bold'>I'm open to discussing web development project or partnership opportunities</p>
           <div className='mb-4 mt-8'>
                <div className='inline-block text-green-400 mr-2'><span class="material-symbols-outlined">
                mail
</span></div>
                <a  href="mailto:youremail@example.com" className='text-lg hover:underline'>
                    fr.alfarra12@gmail.com
                </a>
            </div>
           <div className='mb-4 mt-8'>
                <div className='inline-block text-green-400 mr-2'> <i class="fab fa-linkedin" style={{fontSize : "25px"}} ></i></div>
                <a  href="mailto:youremail@example.com" className='text-lg hover:underline'>
                www.linkedin.com/in/mohamed-firas-130b01274
                </a>
            </div>
            <div className='mb-4'>
                 <div className='inline-block text-green-400 mr-2'><span class="material-symbols-outlined">
mail
</span></div>
                <span className='text-lg'>+963940319051</span>
            </div>
           


<div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full  rounded-3xl p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Name'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input type="text" 
                    className='w-full rounded-3xl p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full rounded-3xl p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
                <button className='bg-gradient-to-r rounded-3xl from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>

        <div className='flex-1 w-full'></div>
      </div>
    </div>
  </div>
  )
}

export default Contact