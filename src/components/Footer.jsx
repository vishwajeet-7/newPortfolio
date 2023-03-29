import React from 'react'
import { FaGithub,FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=" flex justify-center gap-8 bg-black-100" >
        <a href="https://github.com/vishwajeet-7" target={'_blank'}>
        <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          <FaGithub className="w-9 h-9" />
        </button></a>
        <a href="https://www.linkedin.com/in/vishady7/" target={'_blank'}>
        <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          <FaLinkedinIn className="w-9 h-9" />
        </button></a>
      </div>
  )
}

export default Footer
