import background from "../assets/background_purple.jpg"
import photoMarce from "../assets/photoMarce.jpg"


const Home = () => {
  return (
    <div className="sm:h-[60vh] w-full h-[85vh] overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row items-center justify-around" style={{ backgroundImage: `url(${background})`, padding: 0 }} >
               
        <img src={photoMarce} className="sm:w-1/3 sm:transform sm:-translate-x-1/2 sm:top-[20%] absolute left-[50%] top-[180px] rounded-full" />

        <div className="sm:top-[45%] sm:left-[28%] sm:flex flex-col items-center justify-center absolute left-[8%] top-[40%] text-blue">
          <p className="text-[25px] sm:text-[10px] font-normal">Hi! I`m </p> 
          <p className="text-[45px] sm:text-[25px] font-normal">Marcela Niño</p>
          <p className="text-[25px] sm:text-[10px] font-normal">Engineer and Web Full Stack Developer</p>   
        </div>
      
    </div>
  )
};

export default Home