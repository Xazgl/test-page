import Image from 'next/image'
import { BannerMain } from './components/banner/BannerMain'
import { SectionSecond } from './components/sectionSecond/SectionSecond'

export default function Home() {
  return (
 
    <main>
      <BannerMain />
      <SectionSecond/>
    </main>
  )
}
