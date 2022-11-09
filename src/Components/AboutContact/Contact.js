import React from "react";
import ContactData from './Contact.json';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillPersonCheckFill } from 'react-icons/bs'



function Contact() {
  return (
    <>
      <div className="w-8/12 m-auto py-10 pb-10  ">
        <h1 className="text-3xl px-20 opacity-4 shadow-md text-purple-900 inline-block">
          Contact Us
        </h1>
      </div>
      <div className="  text-center w-8/12 m-auto mb-10 h-auto bg-gray-100 rounded-xl shadow-md overflow-hidden grid   ">
      <div className="grid gap-20">
        {
          ContactData.map(({ id, github, linkden, name, portfolio, profileImage, role }) => {
            return (
              <div key={id} className='grid  bg-white rounded-xl shadow-md overflow-hidden '>
                <div className="grid grid-cols-2 mb-5 mt-5  ">
                  
                  <div className=" self-center  ">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-sm font-semibold">({role})</p>

                  </div>
                  <div className="  self-center ">
                    <div className="grid grid-cols-3">
                      <a href={github} target='_blank' rel="noreferrer">
                        <div className="grid place-content-center ">
                          <BsGithub className="w-12 h-12" />
                          <p className="text-sm text-sky-500 font-semibold">Github </p>
                        </div>
                      </a>
                      <a href={linkden} target='_blank' rel="noreferrer">
                        <div className="grid place-content-center ">
                          <AiFillLinkedin className="w-12 h-12" />
                          <p className="text-sm text-sky-500 font-semibold">Linkden </p>
                        </div>
                      </a>
                      <a href={portfolio} target='_blank' rel="noreferrer">
                        <div className="grid place-content-center ">
                          <BsFillPersonCheckFill className="w-12 h-12" />
                          <p className="text-sm text-sky-500 font-semibold">Portfolio</p>
                        </div>

                      </a>
                    </div>


                  </div>

                 


                </div>


              </div>
            )
          })
        }
      </div>

      </div> 
    

    </>
  );
}

export default Contact;
