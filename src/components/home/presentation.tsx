import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import { Fragment } from 'react'
import { FaArtstation, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Presentation() {
  return (
    <Fragment>
      <div className="w-full flex-col mt-[40px] flex gap-6 items-center md:h-[200px] md:flex-row">
        <section className="w-full flex gap-6 justify-center flex-wrap sm:justify-normal">
          <div className="flex items-center justify-center m-auto md:flex-none md:m-unit-0">
            <Image
              src="https://github.com/carlos-landerdahl.png"
              className="w-[150px] h-[150px] rounded"
              width={150}
              height={150}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-xl font-bold">
              Carlos Roberto Landerdahl Neto
            </h1>
            <p className="text-subtitle px-[2px] text-sm mb-3">
              Desenvolvedor de software. Especializado <br /> em NextJS e Java
            </p>
            <p className="text-subtitle flex items-center gap-2 text-sm">
              <MapPin size={15} /> Uberlândia - Minas Gerais, Brasil
            </p>
            <p className="text-subtitle flex items-center gap-2 text-sm">
              <GraduationCap size={15} /> UFU - Sistemas de informação
            </p>
          </div>
        </section>
        <section>
          <ul className="text-white flex flex-wrap px-2 justify-center gap-2 pt-3 md:flex-col">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/carloslanderdahl/"
                className="flex gap-2 w-[117px] items-center text-subtitle border border-transparent p-1 px-2 rounded bg-bgButton hover:text-textHover hover:border-hoverButton transition-all"
              >
                <FaLinkedin />
                Linkedin
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/Carlos-Landerdahl"
                className="flex gap-2 w-[117px] items-center text-subtitle border border-transparent p-1 px-2 rounded bg-bgButton hover:text-textHover hover:border-hoverButton transition-all"
              >
                <FaGithub />
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="mailto:carloslanderdahl27@gmail.com"
                className="flex gap-2 w-[117px] items-center text-subtitle border border-transparent p-1 px-2 rounded bg-bgButton hover:text-textHover hover:border-hoverButton transition-all"
              >
                <MdEmail />
                Email
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://u64d07a8d.artstation.com/"
                className="flex gap-2 w-[117px] items-center text-subtitle border border-transparent p-1 px-2 rounded bg-bgButton hover:text-textHover hover:border-hoverButton transition-all"
              >
                <FaArtstation />
                Artstation
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="max-w-[calc(100vw-40px)] m-auto border-b border-border2 px-5 pt-8" />
    </Fragment>
  )
}
