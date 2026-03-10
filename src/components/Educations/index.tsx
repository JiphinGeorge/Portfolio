/* eslint-disable @next/next/no-img-element */ 
import Image from 'next/image'
import Link from 'next/link'
import certificates from '../../data/certifications'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Title } from '../../styles/styles'
import * as S from './styles'
import { GraduationCap } from 'phosphor-react'

export function Educations() {

  return (
    <S.ContainerEducation>
      <Title>
        Highlights
        <span>
          <GraduationCap /> Certification
        </span>
      </Title>
      <S.EducationContent>
        <S.EducationList>
          {certificates &&
            certificates.map(cert => {
              return (
                <S.List key={cert.id}>
                  <S.ListImage>
                    <Image src={cert.logo} alt={cert.subTitle} width={80} height={80} />
                    <p>
                      Date: <span>{cert.level}</span>
                    </p>
                    <p>
                      Status: <span>{cert.status}</span>
                    </p>
                  </S.ListImage>

                  <S.ListContent>
                    <h2>{cert.title}</h2>
                    <h3>
                      <Link href={cert.link} target="_blank">
                        {cert.subTitle}
                      </Link>
                    </h3>
                    <p>{cert.description}</p>
                  </S.ListContent>
                </S.List>
              );
            })}
        </S.EducationList>

        <S.EducationImage>
          <Image
            className="education-logo"
            src="/education/education.svg"
            alt="boy on computer"
            width={300}
            height={300}
          />
        </S.EducationImage>
      </S.EducationContent>
    </S.ContainerEducation>
  );
}