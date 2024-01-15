'use client'

import React from 'react'
import { Tabs, Tab, Card, CardBody, Chip } from '@nextui-org/react'
import { Building2, Calendar, Layers } from 'lucide-react'

interface ExperienciaProps {
  cargo: string
  empresa: string
  periodo: string
  ativo: boolean
  tabs: { id: string; label: React.ReactNode; content: React.ReactNode }[]
}

export default function Company({
  cargo,
  empresa,
  periodo,
  tabs,
  ativo,
}: ExperienciaProps) {
  const chipColor = ativo ? 'success' : 'danger'

  return (
    <div className="flex flex-col gap-1 py-2">
      <div className="flex items-center gap-3 text-lg">
        <Layers className="text-subtitle" size={20} />
        <span className="font-bold text-title text-2xl cursor-pointer">
          {cargo}
        </span>
      </div>
      <div className="flex items-center gap-3 text-subtitle">
        <Building2 size={20} />
        <span className="text-sm hover:text-white cursor-help">{empresa}</span>
      </div>
      <div className="flex items-center gap-3 text-subtitle pb-4">
        <Calendar size={20} />
        <Chip
          radius="sm"
          variant="dot"
          color={chipColor}
          className="text-subtext border-border1"
        >
          {periodo}
        </Chip>
      </div>
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody className="p-5">{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
      <div className="w-full m-auto border-b border-border1 px-5 my-8" />
    </div>
  )
}
