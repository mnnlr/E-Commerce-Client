import { keyframes } from '@emotion/react'
import React from 'react'

const OurTeam = () => {

    const team = [
        {
            img: "https://i.pinimg.com/564x/fa/9c/4b/fa9c4bccfffa98a27009017c63c27d26.jpg",
            name: "coreno",
            work: "Production"
        },
        {
            img: "https://i.pinimg.com/564x/ca/cb/19/cacb196590d8f40c55d825902e8ab733.jpg",
            name: "josep",
            work: "Quality"
        },
        {
            img: "https://i.pinimg.com/564x/ca/cb/19/cacb196590d8f40c55d825902e8ab733.jpg",
            name: "universe",
            work: "delivary"
        },
        {
            img: "https://i.pinimg.com/564x/fa/9c/4b/fa9c4bccfffa98a27009017c63c27d26.jpg",
            name: "miss",
            work: "Ris"
        }
    ]
  return (
    <div>
        <div className='flex items-center justify-center flex-col mt-24'>

            <h4 className='text-red-800 font-bold'>OUR TEAM</h4>
            <h2 className='text-black text-6xl font-bold mt-6'>Meet Our Team</h2>
        </div>
        <div className='flex flex-row space-x-40'>
            {
                team.map((value, index)=>(
                    <>
                    <div className='flex flex-col mt-24'>
                    <img src={value.img} alt='img' key={index} className='w-60'/>
                    <h3 className='text-2xl'>{value.name}</h3>
                    <p className='text-lg text-gray-400'>{value.work}</p>
                    </div>
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default OurTeam;