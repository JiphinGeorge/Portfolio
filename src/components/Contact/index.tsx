/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'



export function Contact() {

  return (
    <Section>
      <Title>
        <p>../contact</p>
        Contact Form
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        So if you are looking for someone hardworking, authentic and always up for a good challenge, look no further than yours truly! Lets connect and see how we can make a difference together:)
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <LinkedinLogo size={22} color="#00fffb" /> Linkedin{' '}
            </h4>
            <Link href="https://www.linkedin.com/in/jiphin-george-89315b295/" target="_blank">
              <span>JiphinGeorge</span>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:jiphingeorge80@gmail.com" target="_blank">
              <span>jiphingeorge80@gmail.com</span>
            </Link>
          </div>
        </ContactContent>
        <Form />
      </ContainerContact>
    </Section>
  );
}