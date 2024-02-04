
import photoMarce from "../assets/img/photoMarce.jpg"


const Home = () => {

  return (
    
    <div className="sm:h-[60vh] w-full h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row items-center justify-around bg-customCobalt">
        <img src={photoMarce} className="sm:w-1/2 sm:transform sm:-translate-x-1/2 sm:top-[25%] absolute left-[55%] top-[175px] rounded-full" />   
        <div className="sm:top-[50%] sm:pl-[1%] sm:pr-[5%] sm:flex sm:flex-col sm:items-center justify-center absolute left-[10%] top-[45%] text-customWhite">
            <p className="text-[25px] sm:text-[15px] ">Hi! I`m</p> 
            <p className="text-[45px] sm:text-[30px] l">Marcela Niño</p>
            <p className="text-[25px] sm:text-[15px] ">Engineer and Full Stack Web Junior Developer</p>   
        </div>
    </div>

  )
};

export default Home