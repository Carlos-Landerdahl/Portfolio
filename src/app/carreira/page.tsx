import ExperienciaEmpresa from '@/components/career/company'
import { CornerRightDown } from 'lucide-react'
import React from 'react'
import { experienciasProfissionais } from '../data/experiencia-profissional'

export default function Carreira() {
  return (
    <div className="text-center pt-[95px] max-w-7xl m-auto px-4">
      <h1 className="flex items-end gap-2 text-start text-title text-3xl font-bold pb-8">
        Experiências
        <CornerRightDown className="text-[--subtitle]" />
      </h1>
      {experienciasProfissionais.map((experiencia, index) => (
        <ExperienciaEmpresa key={index} {...experiencia} />
      ))}
    </div>
  )
}
