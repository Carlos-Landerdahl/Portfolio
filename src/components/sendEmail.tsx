'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  useDisclosure,
} from '@nextui-org/react'

import React, { useState } from 'react'
import { SendHorizonal, SendHorizonalIcon } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

export default function SendButtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [nameUser, setNameUser] = useState('')
  const [emailUser, setEmailUser] = useState('')
  const [messageUser, setMessageUser] = useState('')

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    },
  })

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const templateParms = {
      from_name: nameUser,
      message: messageUser,
      email: emailUser,
    }

    emailjs
      .send(
        'service_wbfikwi',
        'template_bu48wpv',
        templateParms,
        '4BWSo8Y4BoDZLe-dE',
      )
      .then(
        (response) => {
          console.log('Email enviado', response.status, response.text)
          Toast.fire({
            icon: 'success',
            title: 'Email enviado',
          })
          setNameUser('')
          setEmailUser('')
          setMessageUser('')
        },
        (err) => {
          console.log('Erro: ', err)
          Toast.fire({
            icon: 'error',
            title: 'Erro ao enviar',
          })
        },
      )
  }

  return (
    <div className="dark text-[--title] flex flex-col gap-2">
      <button
        onClick={onOpen}
        className="px-4 py-2 rounded bg-[--bg-button] animate-pulse"
      >
        <SendHorizonal size={15} />
      </button>
      <Modal
        isOpen={isOpen}
        placement="auto"
        onOpenChange={onOpenChange}
        className="bg-[--bg-button]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <h2 className="flex text-2xl items-center gap-2 text-[--title]">
                  Entrar em contato <SendHorizonalIcon size={15} />
                </h2>
                <p className="text-sm text-[--subtitle]">
                  Envie uma mensagem diretamente para o meu e-mail
                </p>
              </ModalHeader>
              <ModalBody>
                <form onSubmit={sendEmail} className="flex flex-col gap-2">
                  <Input
                    isRequired
                    placeholder="Digite o seu nome"
                    value={nameUser}
                    onChange={(e) => setNameUser(e.target.value)}
                    label="Nome:"
                    radius="sm"
                    className="font-bold dark text-white"
                  />
                  <Input
                    isRequired
                    type="email"
                    placeholder="Digite o seu email"
                    value={emailUser}
                    onChange={(e) => setEmailUser(e.target.value)}
                    label="Email:"
                    radius="sm"
                    className="font-bold dark text-white"
                  />
                  <Textarea
                    isRequired
                    placeholder="Digite a sua mensagem"
                    value={messageUser}
                    onChange={(e) => setMessageUser(e.target.value)}
                    label="Corpo do email:"
                    radius="sm"
                    className="font-bold dark text-white"
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  disabled={!nameUser || !emailUser || !messageUser}
                  className="disabled:opacity-20 disabled:cursor-not-allowed"
                  onClick={() => {
                    document.querySelector('form')?.requestSubmit()
                  }}
                >
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
