import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// Dynamically import the ResumeViewer to avoid SSR window/document issues with pdf.js
const ResumeViewer = dynamic(() => import('../components/CV/ResumeViewer'), {
  ssr: false,
  loading: () => <h3 style={{ color: '#00f0ff', textAlign: 'center', margin: '5rem 0' }}>Loading Resume Engine...</h3>,
});

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


      <Section>
        <Title>
          <p>../curriculum</p>
          Resume
          <span>
            <BsFileText /> Curriculum Vitae
          </span>
        </Title>
        <Description>
          This is my updated resume. You can preview it below or download a copy.
        </Description>
        
        <PageSection>
          <ResumeViewer pdfUrl="/pdf/Jiphin_George_Resume.pdf" />
        </PageSection>
      </Section>
      <Footer />
      <ScrollTop />
    </>
  )
}