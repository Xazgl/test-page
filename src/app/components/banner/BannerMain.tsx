
import banner from '/public/background.png';
import logo from '/public/logo.png';
import boxes from '/public/boxes.png';
import leftHero from '/public/MafiaCostume_2022_1.png';
import rightHero from '/public/MafiaCostume_2022_2.png';
import glow from '/public/glow.png';
import Image from 'next/image';
import styles from './banner.module.css'; 

export function BannerMain() {


    return (
        <>
      
            <section className='relative w-full h-[892px]'>
                <img
                    src={leftHero.src}
                    alt="Left Hero"
                    className=" hidden xl:block  absolute h-90% max-w-28% bottom-0 left-0  bg-no-repeat z-10  xl:max-w-[28%] xl:h-[90%]  "
                />
                <img
                    src={rightHero.src}
                    alt="Right Hero"
                    className="hidden  xl:block absolute h-90% max-w-28% bottom-0 right-0  bg-no-repeat z-10"
                />

                <div className='flex flex-col items-center w-full text-center  justify-center xl:justify-start h-full w-full bg-cover bg-no-repeat' style={{ backgroundImage: `url(${banner.src})` }}>
                    <div className='flex w-[60%]  h-[30%]  sm:w-[40%]  sm:h-[30%]   md:w-[40.27%]  md:h-[40%]  lg:w-[35.27%]  lg:h-[50%] xl:w-[18.72%] xl:h-[30%] justify-center h-[38.97%] bg-no-repeat z-20 bg-contain' style={{ backgroundImage: `url(${logo.src})` }}>
                    </div>
                    <div className='flex  w-[80%]  h-[30%] sm:w-[80.27%] sm:h-[40.88%]  md:w-[60.27%]  md:h-[40.88%]   lg:w-[50.27%]  lg:h-[58.88%] xl:w-[38.27%] xl:h-[58.88%] justify-center  bg-no-repeat z-20 bg-contain relative' style={{ backgroundImage: `url(${boxes.src})` }}>
                          
                    </div>
                    <div className='flex flex-col w-full h-[18.88%] items-center gap-4 z-20 p-2'>
                        <h1  id={styles.neonEffect} className='flex justify-center text-center  font-semibold text-2xl sm:text-4xl text-white'>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</h1>
                        <h3 id={styles.neonEffect} className='flex  justify-center text-center font-normal text-base leading-[23.44px] text-white'>Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</h3>
                    </div>
                    <img
                        src={glow.src}
                        alt="Glow"
                        className="absolute  opacity-[0.5] inset-0 w-full h-full bg-no-repeat xl:opacity-[0.7]"
                    />
                </div>
            </section>
        </>
    )
}