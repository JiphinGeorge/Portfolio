import Image from 'next/image'
import { useTheme } from 'styled-components'
import certifications from '../../data/certifications'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Button, Container, Title } from '../../styles/styles'
import { CertificationsContainer, CertificationsContent } from './styles'
import { Medal } from 'phosphor-react'
import Link from 'next/link'

export function Certifications() {
  const theme = useTheme()

  return (
    <Container>
      <Title>
        Certificates
        <span>
          <Medal /> Certifications
        </span>
      </Title>

      <div>
        <VerticalTimeline lineColor={theme.firstColor}>
          {certifications &&
            certifications.map(certification => {
              return (
                <VerticalTimelineElement
                  contentStyle={{
                    background: theme.backgroundAlt,
                    borderBottom: `7px solid ${theme.backgroundAlt}`,
                    boxShadow: `0px 5px 0px 0px ${theme.firstColor}`
                  }}
                  contentArrowStyle={{
                    borderRight: `10px solid ${theme.backgroundAlt}`
                  }}
                  date={certification.level}
                  icon={
                    <Image
                      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60%' }}
                      width={60}
                      height={60}
                      src={certification.logo}
                      alt={certification.title}
                      loading="lazy"
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.backgroundAlt,
                    color: theme.firstColor
                  }}
                  key={certification.id}
                >
                  <CertificationsContainer>
                    <CertificationsContent>
                      <h1>{certification.title}</h1>
                      <h2>{certification.subTitle}</h2>
                      <span>{certification.status}</span>
                      <p>{certification.description.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}</p>
                      <div style={{ display: 'flex', gap:"1rem", marginTop:"1rem" }}>
                        <Button>
                          <Link legacyBehavior href={certification.link}>
                            <a target="_blank">View</a>
                          </Link>
                        </Button>
                      </div>
                    </CertificationsContent>
                  </CertificationsContainer>
                </VerticalTimelineElement>
              )
            })}
        </VerticalTimeline>
      </div>
    </Container>
  )
}
