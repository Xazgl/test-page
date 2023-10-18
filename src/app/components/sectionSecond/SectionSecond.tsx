import background from '/public/section2/backgroundWall.png';
import blueLight from '/public/section2/Ellipse.png';
import dogCharacter from '/public/section2/vito.png';
import box from '/public/section2/box.png';
import lightRow from '/public/section2/lightRow.png';

import styles from './banner.module.css';
import { tableData } from './TableData';

export function SectionSecond() {


    return (
        <>
 
            <section
                className='flex flex-col lg:flex-row relative w-full h-full pt-[50px]'
                style={{ backgroundImage: `url(${background.src})` }}
            >

                <div className="flex flex-col  items-center justify-center xs:w-full lg:w-1/2  relative ">
                    <div
                        className='flex w-full h-full  lg:w-[686px] lg:h-[686px] bg-opacity-[20%] bg-contain bg-no-repeat items-center justify-center  overflow-hidden'
                        style={{
                            backgroundImage: `url(${blueLight.src})`
                        }}
                    >
                        <img
                            src={dogCharacter.src}
                            alt="Dog Character"
                            className="lg:absolute bg-contain  z-20"
                        />
                    </div>
                </div>

                <div className="flex items-center flex-col pt-7 pb-[100px] pl-5 pr-5 lg:pr-[10%] h-full lg:items-start justify-start xs:w-full lg:w-1/2 relative">

                    <h1 className='text-[#416DF4] text-2xl font-bold mb-4'>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h1>

                    <table className="w-full  mt-[50px]">
                        <thead>
                            <tr>
                                <th className="text-left text-xs" style={{ width: '60%' }}></th>
                                <th className="text-left text-xs" style={{ width: '20% ' }}>
                                    <h3 className='text-center text-[#671D00] whitespace-nowrap text-[8px] border-solid border-[1px]   border-[#671D00] p-1 cursor-pointer transition-[0.5s]  hover:bg-[#671D00] hover:text-white'>Бесплатные сервера</h3>
                                </th>
                                <th className="text-left text-xs" style={{ width: '20%' }}>
                                    <h3 className='text-center text-[#671D00] whitespace-nowrap text-[8px] border-solid border-[1px]  border-[#671D00] p-1 cursor-pointer transition-[0.5s]  hover:bg-[#671D00] hover:text-white' > Подписочный сервер</h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='mt-4'>
                            {tableData.map((row, index) => (
                                <tr key={row.id} className={'p-3 h-auto border-solid border-[1px]  hover:bg-[#671D00] hover:text-white transition-all border-[#671D00]'} >
                                    <td className="text-base p-1">
                                        <div className='flex gap-6 items-center'>
                                            <img
                                                src={row.img}
                                                alt={row.title}
                                                className="flex w-[62px] h-[65px]"
                                            />
                                            <h5>{row.title}</h5>
                                        </div>
                                    </td>
                                    <td className="text-base">{row.freeServer}</td>
                                    <td className="text-base">{row.subscriptionServer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className='flex flex-col items-center lg:flex-row lg:justify-start lg:items-start  w-full '>
                        <div className='flex column items-center  justify-center lg:justify-start w-full lg:w-[50%]'>
                            <img
                                src={box.src}
                                alt="game box"
                                className="bg-contain max-w-[100%]"
                            />
                        </div>
                        <div className='flex flex-col items-center lg:items-start justify-end w-full lg:w-[40%]'>
                            <h3 className='flex text-[50px] font-normal'>399 ₽</h3>
                            <button className='flex cursor-pointer transition-all bg-[#FCFF00]  hover:bg-[#671D00] hover:text-white  rounded-[7px]  w-[70%] lg:w-[180px] text-[16px] text-black h-[40px] justify-center text-center items-center'>ПРИОБРЕСТИ</button>
                        </div>
                    </div>

                </div>

                <img
                    src={lightRow.src}
                    alt={lightRow.src}
                    className="absolute h-[172px] w-full bottom-0 left-1/2 transform -translate-x-1/2 bg-no-repeat z-10"
                />
             
            </section >
        </>
    )
}