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
      <title>{currentLang === 'ta' ? 'பற்றி | சரவணகுமார்' : 'About | Saravanakumar'}</title>
      <meta
        name="description"
        content={currentLang === 'ta' ? 'நான் சரவணகுமார், வேலம்மல் பொறியியல் கல்லூரியின் மாணவர், எலக்ட்ரானிக்ஸ் மற்றும் கம்யூனிகேஷன் இன்ஜினியரிங் படித்து வருகிறேன் மற்றும் தொழில்நுட்பத்தில் ஒரு வலுவான அடித்தளத்தை உருவாக்குகிறேன்.' : 'I am Saravanakumar, a proud student of Velammal Engineering College, where I am pursuing a Bachelors degree in Electronics and Communication Engineering and building a solid foundation in technology.'}
      />
      <meta property="og:title" content={currentLang === 'ta' ? 'பற்றி | சரவணகுமார்' : 'About | Saravanakumar'} />
      <meta
        property="og:description"
        content={currentLang === 'ta' ? 'நான் சரவணகுமார், வேலம்மல் பொறியியல் கல்லூரியின் மாணவர், எலக்ட்ரானிக்ஸ் மற்றும் கம்யூனிகேஷன் இன்ஜினியரிங் படித்து வருகிறேன் மற்றும் தொழில்நுட்பத்தில் ஒரு வலுவான அடித்தளத்தை உருவாக்குகிறேன்.' : 'I am Saravanakumar, a proud student of Velammal Engineering College, where I am pursuing a Bachelors degree in Electronics and Communication Engineering and building a solid foundation in technology.'}
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
              src="/Saravana.jpg"
              alt="Saravanakumar"
              width={400}
              height={400}
              priority
            />

            <div className="links">
              <ul>
                <Link
                  href={'https://github.com/Saravanakumar2003'}
                  target="_blank"
                  aria-label="Github">

                  <AiFillGithub size={25} />@Saravanakumar2003
                </Link>
                <Link
                  href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
                  target="_blank"
                  aria-label="Linkedin">

                  <BsLinkedin size={25} />@saravanaramaswamy2003
                </Link>
                <Link
                  href={'https://api.whatsapp.com/send?phone=918838416187'}
                  target="_blank"
                  aria-label="WhatsApp">

                  <RiWhatsappFill size={25} />+91 8838416187
                </Link>
                <Link
                  href={'mailto:saravanaramaswamy2003@gmail.com'}
                  className="email"
                  target="_blank"
                  aria-label="email">

                  <GrMail size={25} />saravanaramaswamy2003@gmail.com
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
              {currentLang === 'ta' ? '👋 வணக்கம்! நான் சரவணகுமார், 🎓 வேலம்மல் பொறியியல் கல்லூரியின் பெருமைமிக்க பட்டதாரி, எலக்ட்ரானிக்ஸ் மற்றும் கம்யூனிகேஷன் இன்ஜினியரிங் படித்து வருகிறேன் மற்றும் தொழில்நுட்பத்தில் ஒரு வலுவான அடித்தளத்தை உருவாக்குகிறேன்.' : '👋 Hey there! I am Saravanakumar, 🎓 a proud graduate of Velammal Engineering College, where I am pursuing a Bachelors degree in Electronics and Communication Engineering and building a solid foundation in technology.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta' ? '💻 நான் ஒரு ஆர்வமுள்ள டெவலப்பர், ஆர்வமுள்ள தன்னார்வலர் மற்றும் பொது பேச்சாளர், மேலும் புதிய வாய்ப்புகள் மற்றும் வழிகளை ஆராய்வதில் நான் ஆர்வமாக இருக்கிறேன்.' : '💻 I am also an avid developer, enthusiastic volunteer, and public speaker, and I love exploring new opportunities and avenues.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta' ? '🎮 ஒரு சுய கற்றல் டெவலப்பராக, என் திறன்களை மேம்படுத்த மற்றும் என் யோசனைகளை உயிர்ப்பிக்க புதிய நுட்பங்களை கற்றுக்கொள்வதில் நான் எண்ணற்ற மணிநேரங்களை செலவிட்டுள்ளேன்.' : '🎮 As a self-taught developer, I have spent countless hours sharpening my skills and learning new techniques to bring my ideas to life.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta' ? '🎉 பள்ளி மற்றும் கல்லூரியில் இரண்டாம் ஆண்டு வரை 100% வருகையாளராக இருப்பதில் நான் பெருமைப்படுகிறேன். நான் என் கல்வியை மிகவும் முக்கியமாக எடுத்துக்கொள்கிறேன் மற்றும் புதிய தலைப்புகளை கற்றுக்கொள்வதில் நான் விரும்புகிறேன், குறிப்பாக அணு தொழில்நுட்பம் 💥.' : '🎉 I am proud to be a 100% attendance holder in both school and college, till 2nd year. I take my education seriously and love learning about new topics, especially when it comes to nuclear technology 💥.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta' ? '🧩 என் நேரத்தில், புதிர்கள் மற்றும் மூளைக்கவசங்களை தீர்க்க நான் விரும்புகிறேன், இது எனக்கு கூர்மையாகவும் என் பிரச்சினை தீர்க்கும் திறன்களை சரியாக வைத்திருக்கவும் உதவுகிறது. உலகம் முழுவதும் புராணங்கள் மற்றும் புராணங்களை கற்றுக்கொள்வதில் நான் பெரிய ரசிகன், இது எனக்கு பல்வேறு கலாச்சாரங்கள் மற்றும் பாரம்பரியங்களைப் பற்றிய ஒரு பார்வையை அளிக்கிறது 🌍.' : '🧩 In my free time, I love to solve puzzles and brain teasers, which helps me stay sharp and keep my problem-solving skills on point. I am also a big fan of learning myths and legends from around the world 🌍, which gives me a glimpse into different cultures and traditions.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta' ? '🙌 என் தனிப்பட்ட முயற்சிகளைத் தவிர, என் சமூகத்தில் நேர்மறையான தாக்கத்தை ஏற்படுத்த நான் உறுதியாக இருக்கிறேன். உள்ளூர் அமைப்புகளுடன் தன்னார்வலராக இருப்பதில் நான் விரும்புகிறேன் மற்றும் பின்தங்கிய குழந்தைகளுக்கு கல்வி வளங்களை வழங்குகிறேன் 📚 . சில நேரம் மற்றும் முயற்சிகள் ஒருவரின் வாழ்க்கையில் ஏற்படுத்தும் தாக்கத்தை காண்பது அற்புதமானது.' : '🙌 Beyond my personal pursuits, I am committed to making a positive impact in my community. I love volunteering with local organizations and provide educational resources to underprivileged kids 📚 . Its amazing to see the impact that even a small amount of time and effort can have on someones life.'}
            </p>
            <p style={{ textAlign: 'justify' }}>
              {currentLang === 'ta' ? '💪 எனவே நீங்கள் கடினமாக உழைக்கும், உண்மையான மற்றும் நல்ல சவாலுக்கு எப்போதும் தயாராக இருக்கும் ஒருவரைத் தேடுகிறீர்கள் என்றால், உண்மையானவர்களைத் தவிர வேறு எதையும் பார்க்க வேண்டாம்! நாம் இணைந்து எப்படி மாற்றத்தை ஏற்படுத்த முடியும் என்று பார்க்கலாம் 🤝.' : '💪 So if you are looking for someone who is hardworking, authentic and always up for a good challenge, look no further than yours truly! Lets connect and see how we can make a difference together 🤝.'}
            </p>
          </S.AboutDescription>
        </S.AboutContent>
      </S.AboutContainer>

      {/* Social Begins */}

      <Title>
        {currentLang === 'ta' ? 'LinkedIn பதிவு' : 'LinkedIn Post'}
        <span>
          <BsLinkedin /> {currentLang === 'ta' ? 'சமீபத்திய' : 'Latest'}
        </span>
      </Title>
      <S.InBox>
        <Linkedin />
      </S.InBox>
      <Title>
        {currentLang === 'ta' ? 'இன்ஸ்டாகிராம் பதிவு' : 'Instagram Post'}
        <span>
          < InstagramLogo /> {currentLang === 'ta' ? 'சமீபத்திய' : 'Latest'}
        </span>
      </Title>
      <S.InBox>
        <Instagram />
      </S.InBox>
      <a style={{ textAlign: 'center' }}>
        {currentLang === 'ta' ? 'உங்கள் ❤️ ஐ காட்டுங்கள், விரும்பி கருத்து தெரிவிப்பதன் மூலம், மேலும் புதுப்பிப்புகளுக்கு எனது இன்ஸ்டாகிராமில் என்னை பின்தொடருங்கள்.' : 'Show your ❤️ by liking and commenting, Follow me on Instagram for more updates.'}
      </a>

      {/* Social Ends */}

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