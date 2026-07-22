import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { ResumeViewer } from '../components/CV/ResumeViewer';

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
          This is my updated resume. You can preview it below or download a copy.
        </Description>

        <PageSection>
          <ResumeViewer pdfUrl="/pdf/Jiphin_George_Resume.pdf" />
        </PageSection>
      </Section>
      <Footer />
    </>
  )
}