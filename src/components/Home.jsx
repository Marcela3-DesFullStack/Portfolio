
import photoMarce from "../assets/img/photoMarce.jpg"


const Home = () => {

  return (
    
    <div className="flex flex-row sm:flex-col items-center justify-evenly bg-customCobalt h-[38rem] sm:h-[28rem]">
      
      <div className="top-1/2 left-1/2 transform -translate-x-4 -translate-y-4 text-center sm:text-center px-4 sm:-translate-y-1 sm:-translate-x-2">
          <p className="text-3xl sm:text-lg text-customWhite">Hi! I am</p>
          <p className="text-5xl sm:text-2xl font-bold text-customWhite">Marcela Niño</p>
          <p className="text-3xl sm:text-lg text-customWhite">Full Stack Web Developer and Engineer</p>
      </div>
      <div className="flex justify-center">
          <img src={photoMarce} className="w-[350px] h-auto object-cover rounded-full sm:w-[150px] sm:h-[150px]" />
      </div>
</div>

  )
};

export default Home