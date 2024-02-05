
import photoMarce from "../assets/img/photoMarce.jpg"


const Home = () => {

  return (
    
    <div className="sm:h-[80vh] w-full h-[80vh] overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row items-center justify-around bg-customCobalt sm:h-[50vh]">
        <img src={photoMarce} className="sm:w-1/2 sm:transform sm:-translate-x-1/2 sm:top-[15%] absolute left-[50%] top-[175px] rounded-full" />   
        <div className="sm:top-[40%] sm:pl-10 sm:pr-[5%] sm:flex sm:flex-col sm:items-center sm:justify-center absolute left-[10%] top-[45%] text-customWhite">
            <p className="text-[25px] sm:text-[15px] ">Hi! I`m</p> 
            <p className="text-[45px] sm:text-[25px] l">Marcela Niño</p>
            <p className="text-[25px] sm:text-[14px] ">Full Stack Web Developer and Engineer</p>   
        </div>
    </div>

  )
};

export default Home