import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

interface CertificadosCarouselProps {
  certificados: string[]
}

const CertificadosCarousel: React.FC<CertificadosCarouselProps> = ({
  certificados,
}) => {
  const settings: Settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: 'ease',
    pauseOnHover: false,
  }

  return (
    <div className="max-w-7xl text-center m-auto overflow-hidden pt-[95px]">
      <Slider {...settings}>
        {certificados.map((certificado, index) => (
          <div key={index} className="rounded-lg overflow-hidden max-w-[100px]">
            <Image
              src={certificado}
              width={100}
              height={100}
              quality={100}
              alt={`Certificado ${index + 1}`}
              className="w-[100px] h-auto block"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CertificadosCarousel
