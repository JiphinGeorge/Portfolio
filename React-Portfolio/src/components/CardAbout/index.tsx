import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function About() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={200}
            height={200}
            className="AboutImg"
            src="/jiphin.jpg"
            alt="Jiphin's Image"
            loading="lazy"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Little About Me!!</h2>
            <li>
              I am an MCA student at Mar Athanasius College of Engineering (MACE), with a strong interest in software development, AI, and innovative tech solutions. I completed my BCA from St. Joseph&apos;s College, Devagiri, building a solid foundation in programming.
            </li>
            <li>
              I enjoy transforming ideas into practical digital solutions. My technical interests cover Flutter app development, web development, AI, and UI/UX design. I love exploring emerging technologies, building experimental projects, and continuously improving my skills to create impactful applications.
            </li>
          </div>

          <div className='aboutButton'>
            <Link href={'/resume'}>
              <Button>
                {currentLang === 'ta' ? 'சுயவிவரம்' : 'Resume'}
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>
            </Link>
            <Link href={'/about'}>
              <ButtonAlternatives>
                {currentLang === 'ta' ? 'மேலும் வாசிக்க' : 'Read more'}
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}