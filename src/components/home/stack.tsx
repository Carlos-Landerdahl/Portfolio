import Image from 'next/image'
import { GrApps } from 'react-icons/gr'
import { Tooltip } from '@nextui-org/react'

export default function Stack() {
  return (
    <div className="w-full my-10 flex flex-col gap-9 px-4">
      <h2 className="text-2xl font-bold flex justify-center items-center gap-2 md:justify-normal">
        Stack <GrApps size={20} className="text-[--subtitle]" />
      </h2>
      <div className="flex gap-3 w-full flex-wrap justify-center md:justify-normal">
        <Tooltip content="Next.js" className="bg-[--bg-card] text-white">
          <div className="bg-[--bg-button] w-[120px] h-[70px] rounded flex flex-col justify-center items-center hover:bg-white transition-all ease-linear">
            <Image src="/next.svg" alt="" width={70} height={70} />
          </div>
        </Tooltip>
        <Tooltip content="React.js" className="bg-[--bg-card] text-white">
          <div className="bg-[--bg-button] w-[120px] h-[70px] rounded flex flex-col justify-center items-center hover:bg-white transition-all ease-linear">
            <Image src="/react.svg" alt="" width={50} height={50} />
          </div>
        </Tooltip>
        <Tooltip content="React Query" className="bg-[--bg-card] text-white">
          <div className="bg-[--bg-button] w-[120px] h-[70px] rounded flex flex-col justify-center items-center hover:bg-white transition-all ease-linear">
            <Image src="/react-query.svg" alt="" width={50} height={50} />
          </div>
        </Tooltip>
        <Tooltip content="Typescript" className="bg-[--bg-card] text-white">
          <div className="bg-[--bg-button] w-[120px] h-[70px] rounded flex flex-col justify-center items-center hover:bg-white transition-all ease-linear">
            <Image src="/types.svg" alt="" width={40} height={40} />
          </div>
        </Tooltip>
        <Tooltip content="Java" className="bg-[--bg-card] text-white">
          <div className="bg-[--bg-button] w-[120px] h-[70px] rounded flex flex-col justify-center items-center hover:bg-white transition-all ease-linear">
            <Image src="/java.svg" alt="" width={50} height={50} />
          </div>
        </Tooltip>
        <Tooltip content="Spring Boot" className="bg-[--bg-card] text-white">
          <div className="bg-[--bg-button] w-[120px] h-[70px] rounded flex flex-col justify-center items-center hover:bg-white transition-all ease-linear">
            <Image src="/spring.svg" alt="" width={50} height={50} />
          </div>
        </Tooltip>
        <Tooltip content="Docker" className="bg-[--bg-card] text-white">
          <div className="bg-[--bg-button] w-[120px] h-[70px] rounded flex flex-col justify-center items-center hover:bg-white transition-all ease-linear">
            <Image src="/docker.svg" alt="" width={50} height={50} />
          </div>
        </Tooltip>
      </div>
    </div>
  )
}
