import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { ArrowLeft, ChatCenteredText, Image as IconImage, YoutubeLogo, Hash, InstagramLogo } from 'phosphor-react'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title, ButtonSecondary } from '../styles/styles'
import { Instagram } from './api/Instagram'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'
import { Linkedin } from './api/Linkedin'

interface DashboardPageProps {
  fallback: any;
}
export default function About() {
  const { t, i18n } = useTranslation('common'); // Use the 'common' namespace
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return <>
    <Head>
      <title>{currentLang === 'ta' ? 'பற்றி | Jiphin George' : 'About | Jiphin George'}</title>
      <meta
        name="description"
        content={currentLang === 'ta' ? 'நான் Jiphin George, ஒரு ஆர்வமுள்ள டெவலப்பர்.' : 'I am Jiphin George, a passionate developer building a solid foundation in technology.'}
      />
      <meta property="og:title" content={currentLang === 'ta' ? 'பற்றி | Jiphin George' : 'About | Jiphin George'} />
      <meta
        property="og:description"
        content={currentLang === 'ta' ? 'நான் Jiphin George, ஒரு ஆர்வமுள்ள டெவலப்பர்.' : 'I am Jiphin George, a passionate developer building a solid foundation in technology.'}
      />
    </Head>

    <ScrollTop />
    <Section>
      <S.AboutContainer>
        <Title>
          <p>{currentLang === 'ta' ? '../பற்றி' : '../about'}  </p>
          {currentLang === 'ta' ? 'என்னைப் பற்றி!!' : 'About Myself!!'}
          <span>
            <BiUserPin /> {currentLang === 'ta' ? 'பற்றி' : 'About'}
          </span>
        </Title>

        <S.AboutContent>
          <S.AboutImage>
            <Image
              className="AboutImg"
              src="/jiphin.jpg"
              alt="Jiphin George"
              width={400}
              height={400}
              priority
            />

            <div className="links">
              <ul>
                <Link
                  href={'https://github.com/JiphinGeorge'}
                  target="_blank"
                  aria-label="Github">

                  <AiFillGithub size={25} />@JiphinGeorge
                </Link>
                <Link
                  href={'#'}
                  target="_blank"
                  aria-label="Linkedin">

                  <BsLinkedin size={25} />Linkedin
                </Link>
                <Link
                  href={'#'}
                  target="_blank"
                  aria-label="WhatsApp">

                  <RiWhatsappFill size={25} />WhatsApp
                </Link>
                <Link
                  href={'#'}
                  className="email"
                  target="_blank"
                  aria-label="email">

                  <GrMail size={25} />Email Contact
                </Link>
              </ul>
            </div>

            <S.AboutContact>
              <h3>
                {currentLang === 'ta' ? 'நாம் பேசலாம், ஒருவேளை ஒரு அற்புதமான திட்டத்தை உருவாக்கலாம்?' : 'Lets talk, maybe create an amazing project together?'}
              </h3>
              <p>{currentLang === 'ta' ? 'எனக்கு ஒரு செய்தி அனுப்புங்கள்! 😉' : 'Send me a message! 😉'}</p>
              <Link href={'/contact'}>

                <ButtonAlt>{currentLang === 'ta' ? 'தொடர்பு கொள்ளவும்' : 'Contact'}</ButtonAlt>

              </Link>
            </S.AboutContact>
          </S.AboutImage>
          <S.AboutDescription>
            <p style={{ textAlign: 'justify' }}>
              👋 I am Jiphin George, an MCA student at Mar Athanasius College of Engineering (MACE), Kothamangalam, with a strong interest in software development, AI-powered applications, and innovative tech solutions. I completed my Bachelor of Computer Applications (BCA) from St. Joseph&apos;s College, Devagiri, where I built a solid foundation in programming and software development.
            </p>
            <p style={{ textAlign: 'justify' }}>
              💻 I enjoy transforming ideas into practical digital solutions. My technical interests include Flutter app development, web development, artificial intelligence, and UI/UX design. I have completed certification courses in Flutter, Python Django, and UI/UX designing, which have helped me build projects that focus on both functionality and user experience.
            </p>
            <p style={{ textAlign: 'justify' }}>
              🚀 One of my key projects is “Xplora”, a Kerala Tourism chatbot that uses deep learning and natural language processing to provide travel recommendations and assist users interactively. I have also participated in hackathons and tech events, working collaboratively to build creative solutions under time constraints.
            </p>
            <p style={{ textAlign: 'justify' }}>
              ✨ Beyond academics, I served as an IEDC Core Member (2023–2024), where I actively engaged in innovation-driven activities and tech events. I enjoy exploring emerging technologies, building experimental projects, and continuously improving my development skills.
            </p>
            <p style={{ textAlign: 'justify' }}>
              🎯 My goal is to become a skilled software developer who creates impactful and intelligent applications that solve real-world problems.
            </p>
          </S.AboutDescription>
        </S.AboutContent>
      </S.AboutContainer>



      <Link href={'/#home'} legacyBehavior>
        <ButtonSecondary>
          <a>
            <ArrowLeft
              style={{ marginBottom: '-0.2rem' }}
              weight="bold"
              size={18}
            />{' '}
            {currentLang === 'ta' ? 'திரும்பி செல்' : 'Go Back'}
          </a>
        </ButtonSecondary>
      </Link>
    </Section>
    <Footer />
  </>;
}