
import photoMarce from "../assets/img/photoMarce.jpg"


const Home = () => {

  return (
    
    <div className="sm:h-[60vh] w-full h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row items-center justify-around bg-customCobalt">
        <img src={photoMarce} className="sm:w-1/3 sm:transform sm:-translate-x-1/2 sm:top-[18%] absolute left-[50%] top-[180px] rounded-full" />   
        <div className="sm:top-[48%] sm:pl-[8%] sm:flex flex-col items-center justify-center absolute left-[10%] top-[45%] text-customWhite">
            <p className="text-[25px] sm:text-[15px] ">Hi! I`m</p> 
            <p className="text-[45px] sm:text-[30px] l">Marcela Niño</p>
            <p className="text-[25px] sm:text-[15px] ">Engineer and Web Full Stack Developer</p>   
        </div>
    </div>

  )
};

export default Home