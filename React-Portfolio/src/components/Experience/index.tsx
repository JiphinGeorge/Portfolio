import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import Link from 'next/link';
import { Button } from '../../styles/styles';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Title } from '../../styles/styles';
import { ExperienceContainer, ExperienceContent } from './styles';
import { Books } from 'phosphor-react';

import experience from '../../data/experiences';

export function Experience() {
  const theme = useTheme();


  return (
    <Container>
      <Title>
        Experience  
        <span>
          <Books /> Internship
        </span>
      </Title>

      <div>
        <VerticalTimeline lineColor={theme.firstColor}>
          {experience &&
            experience.map(exp => {
              const description = exp.description;
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
                  date={exp.date}
                  icon={
                    <Image
                      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60%' }}
                      width={60}
                      height={60}
                      src={exp.img}
                      alt={exp.title} 
                      loading="lazy"
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.backgroundAlt,
                    color: theme.firstColor
                  }}
                  key={exp.id}
                >
                  <ExperienceContainer>
                    <ExperienceContent>
                      <h1>{exp.title}</h1>
                      <h2>{exp.subTitle}</h2>
                      <span>{exp.office}</span>
                      <p>{description ? description.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      )) : 'Description not available'}</p>
                      <div style={{ display: 'flex', gap: "1rem", marginTop: "1rem", marginBottom: "1rem" }}>
                        <Button>
                          <Link legacyBehavior href={exp.certificate ?? ''}>
                            <a target="_blank">Certificate</a>
                          </Link>
                        </Button>
                        <Button>
                          <Link legacyBehavior href={exp.link2 ?? ''}>
                            <a target="_blank">Website</a>
                          </Link>
                        </Button>
                      </div>
                      <div>
                        <h3>Techs:</h3>
                        <div className="tag">
                          {exp.tags.map(tag => (
                            <Image style={{ margin: '0.2rem' }}
                              key={tag.name}
                              width={50}
                              height={50}
                              src={tag.icon}
                              alt={tag.name}
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </div>
                    </ExperienceContent>
                  </ExperienceContainer>
                </VerticalTimelineElement>
              );
            })}
        </VerticalTimeline>
      </div>
    </Container>
  );
}