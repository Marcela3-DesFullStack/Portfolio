import TailwindIcon from "../assets/img/TailwindIcon.png"
import MySQLicon from "../assets/img/MySQLicon.png"
import jsonIcon from "../assets/img/jsonIcon.png"
import jiraIcon from "../assets/img/jiraIcon.svg"
import javascriptIcon from "../assets/img/javascriptIcon.png"
import htmlIcon from "../assets/img/htmlIcon.png"
import figmaIcon from "../assets/img/figmaIcon (1).png"
import cssIcon from "../assets/img/cssIcon.png"
import bootstrapIcon from "../assets/img/bootstrapIcon.png"


function About() {
  return (
    <div className="container mx-auto sm:p-4 lg:p-20 bg-customCoolgray p-[5%]">

        <div className="container mx-auto  gap-12 space-x-6 sm:grid sm:grid-cols-1 sm:gap-3 sm:space-2 ">
           
            <div id="about" className=" pt-4 sm:pt-0 text-customCobalt ">
                <p className="mb-3  text-bold text-3xl text-customCobalt sm:text-[25px]">Providing Web Solutions</p>
                <p className="text-lg text-justify leading-8 text-customCobalt sm:text-[15px] sm:leading-5 sm:pb-1">
                    Hello there! I am a full stack web junior developer an engineer. I am very passionate, creative and dedicated to my
                    work.
                    I have acquired during my professional experience the skills and knowledge necessary to make your                        project a success.
                    I enjoy every step of the development process, from discussion and collaboration.

                </p>
            </div> 
            <div className="flex flex-col items-left pl-4 pt-[20px] space-x-8 sm:space-x-1 sm:ml-0 sm:pl-0 sm:leading-4 sm:pt-0">  
                <p className="mb-4 text-bold text-3xl text-customCobalt sm:text-[25px] ">Education</p> 
                
                <div className="sm:grid sm:grid-col text-lg sm:text-[13px] sm:space-y-1 sm:space-x-1  sm: items-left  ">
                    <div className="flex flex-row items-center text-customCobalt  ">
                    
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="mr-2 h-8 w-10 bg-blue-50 sm:h-6 sm:w-8">        
                                <path 
                                    d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
                                
                        </svg>

                            Bootcamp Full Stack Web Develop
                    </div>
                    <div className="flex flex-row items-center text-customCobalt">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-2 h-8 w-10 bg-blue-500 sm:h-6 sm:w-8">
                                <path
                                        d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                <path
                                        d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                <path
                                        d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                        Master Develop and Project Management
                    </div>
                    <div className="flex flex-row items-center text-customCobalt">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-2 h-8 w-10 bg-blue-500 sm:h-6 sm:w-8">
                            <path
                                    d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                            <path
                                    d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                            <path
                                    d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                            FP Financial and Administration
                    </div>
                    <div className="flex flex-row items-center text-customCobalt">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-2 h-8 w-10 bg-blue-500 sm:h-6 sm:w-8">
                            <path
                                    d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                            <path
                                    d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                            <path
                                    d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                        Engineer
                    </div>
                    <div className="flex flex-col ">
                        <div>
                            <p className="mt-2 mb-4 text-bold text-3xl text-customCobalt sm:text-[25px] ">Languages and Tools</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mx-auto sm:grid sm:grid-cols-5">
                            <img src={htmlIcon} alt="html Icon" className="h-10 w-10"/>
                            <img src={cssIcon} alt="html Icon" className="h-10 w-10"/>
                            <img src={javascriptIcon} alt="html Icon" className="h-10 w-10"/>
                            <img src={bootstrapIcon} alt="html Icon" className="h-10 w-10"/>
                            <img src={TailwindIcon} alt="html Icon" className="h-10 w-10"/>
                            <img src={jsonIcon} alt="html Icon" className="h-10 w-10"/>
                            <img src={MySQLicon} alt="html Icon" className="h-10 w-10"/>
                            <img src={figmaIcon} alt="html Icon" className="h-10 w-10"/>
                            <img src={jiraIcon} alt="html Icon" className="h-10 w-10"/>
      
                        </div>

                    </div>




                </div>
            </div>
        </div>
    </div>

  )
}
export default About