import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { CV } from '../components/CV'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Resume() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Resume | Jiphin George</title>
        <meta
          name="description"
          content="This is my updated resume, you can see or download it."
        />
        <meta property="og:title" content="Resume | Jiphin George" />
        <meta
          property="og:description"
          content="This is my updated resume, you can see or download it."
        />
      </Head>

      <ScrollTop />
      <Section>
        <Title>
          <p>../curriculum</p>
          Curriculum Vitae
          <span>
            <BsFileText /> Resume
          </span>
        </Title>
        <Description style={{width:'100%', textAlign: 'center', marginBottom: '1px'}}>
          This is my updated resume. You can download my professional resume by clicking on the download button below.
        </Description>

        <PageSection>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <Image
              src="/cv.png"
              alt="Jiphin George Resume"
              width={740}
              height={1047}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
              priority
            />
          </div>

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  )
}