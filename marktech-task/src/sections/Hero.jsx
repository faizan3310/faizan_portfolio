import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import {statistics} from "../constants/index"

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full 
      flex xl:flex-row flex-col 
      justify-center min-h-screen 
      gap-10 max-container"
    >

    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"> 
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading=[82px] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Innovate </span>
        <br />

        <marquee behavior="" direction="">
        <span className="text-coral-red inline-block m-8">Technology</span> 
        </marquee>

      </h1>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
      Your IT challenges, our expertise
      </p>
      <Button id='services' label="Explore" iconURL={arrowRight}></Button>

      <div className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'>
          {
              statistics.map((stat) => (
                <div key={stat.value}>
                  <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                  <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                </div>
              ))
          }
      </div>
    </div>
    </section>
  )
}

export default Hero