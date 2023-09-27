import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const resume = () => {
  return (
    <>
      <Head>
        <title>Abhishek | Resume</title>
        <meta
          name="description"
          content="I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/logo4.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center dark:text-black">
          <h2 className="text-center ">Abhishek Bajaj</h2>
          <div className="flex">
            <a href={`tel:${7692810574}`} target="_blank" rel="noreferrer">
              <AiFillPhone size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-bajaj-0514781a7/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/jainsahabb"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="py-6 text-xl font-bold underline">
          <span>CAREER SUMMARY</span>
        </div>
        <p>
        A Web developer with a year of experience, seeking a challenging role that allows me to utilize 
        my skills in web development to create high-quality websites and web applications.
        </p>

        {/* Skills */}
        <h5 className="underline text-[20px] py-6">Skills</h5>
        <div>
          <p className="md:line-clamp-3">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">
              | Linux/Unix | Shell Scripting | HTML | CSS| Javascript | React | Next JS
              | SQL | Node.js | Express.js | Django | Python| Tailwind | Bootstrap |
          
            </span>
          </p>
          
        </div>

        <h5 className="py-6 underline text-[20px]">Work Experience</h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">TATA Consultancy Services Limited</span>
            <span className="px-2">|</span>Mumbai,M.H.
          </p>
          <p className="py-1 italic">
            Developer (Aug 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
            • Windows job scheduling tool Hands-on Experience with Oracle Database, SQL,
             Basic Linux commands,and Oracle Web Logic Server. Involved in requirement 
             gathering with business and providing support based on requirements.
            </li>
            <li>
            • More than a years of experience in Application and production support solutions 
            using Unix, Shell, Oracle Database, SQL, Basic Linux 
            commands and Oracle technologies.
            </li>
            <li>
            • Create a variety of codes to make work easier, which will decrease errors in 
            daily work, save time, and ultimately boost efficiency.
            </li>
        
            <li>
            • Continually provide vital assistance for ongoing services throughout vital times.
            </li>
            
          </ul>
        </div>


      
      

        <h5 className="py-6 underline text-[20px]">Certifications</h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Google Cloud Certified Associate Cloud Engineer</span>
            <span className="px-2">|</span>
          </p>
          <p className="py-1 italic">
          Google (Aug 2023)
          </p>
        
        </div>
        <h5 className="py-6 underline text-[20px]">Certifications</h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Google IT Automation with Python</span>
            <span className="px-2">|</span>
          </p>
          <p className="py-1 italic">
          Google (Aug 2022)
          </p>
        
        </div>
        

        {/*  */}
        <h5 className="underline text-[20px] py-6">Education</h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              {" "}
              Bachelor of Mechanical Engineering
            </span>
            <span className="px-2">|</span>Bhopal, M.P
          </p>
          <p className="py-1 italic">
            Sagar Institute Of Resarch & Tecnology (2016-2020)
          </p>
          <p className="italic">
            <span className="font-bold"> Higher education</span>
            <span className="px-2">|</span>Bhopal, M.P
          </p>
          <span>
          Graduated in Class XII with 83.4%
          MODEL HIGHER SECONDARY SCHOOL (2016 - 2020)
          </span>
        </div>
        
        {/* Personal Profile */}
        <h5 className="underline text-[20px] py-6">Personal Profile</h5>
        <div>
          <p>
            <span className="font-bold">Name</span>
            <span className="px-12"></span>Arish khan
          </p>
       
          <p>
            <span className="font-bold">Date Of Birth</span>
            <span className="px-4"></span>18-10-1998
          </p>
          <p>
            <span className="font-bold">Nationality</span>
            <span className="px-6"></span>Indian
          </p>
          <p>
            <span className="font-bold">Adress</span>
            <span className="px-10"></span>D-98 Sainath colony kolar, Bhopal, MP,
            India
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
