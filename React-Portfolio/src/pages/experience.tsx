import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import experiences from '../data/experiences'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { Section, Title, Description, Button } from '../styles/styles'
import { TabButton, TabContent, TabsContainer } from '../styles/experience'
import { Briefcase } from 'phosphor-react'
import works from '../data/experiences'
import { Education } from '../components/Education'
import { ScrollTop } from '../components/ScrollTop'
import React from 'react'


export default function Experience() {
  const [tabIndex, setTabIndex] = useState(0);
  let numbering = 0;
  const [query, setQuery] = useState("");

  return (
    <div>
      <Head>
        <title>Experience | Jiphin George</title>
      </Head>

      <ScrollTop />
      <Section>
        <Title>
          <p>../experience</p>
          Experience
          <span>
            <Briefcase /> Work
          </span>
        </Title>

        <Description>
          <p>
            I have been working as a developer for over 2 years. I have worked on many projects, from small to large scale, and I have experience working with many different technologies.
          </p>
        </Description>

        <TabsContainer>
          <Tabs
            className="tabs"
            selectedIndex={tabIndex}
            onSelect={index => setTabIndex(index)}
            selectedTabClassName={'is-active'}
            selectedTabPanelClassName={'is-active'}
          >
            <TabButton>
              <TabList className="tab__list">
                {works &&
                  works.map(exp => {
                    const description = exp.description;
                    if (exp.id) {
                      numbering += 1;
                      return (
                        <React.Fragment key={exp.id}>
                          <h2>
                            {numbering >= 0 && numbering <= 10
                              ? `0${numbering - 1}`
                              : `${numbering - 1}`}
                          </h2>
                          <Tab className="tab">
                            <button>{exp.title}</button>
                          </Tab>
                        </React.Fragment>
                      );
                    }
                    return null;
                  })}
              </TabList>
            </TabButton>
            <TabContent>
                {works.map(exp => (
                  <TabPanel className="tab__panel" key={exp.id}>
                    <div className="title-container">
                      <div className="title-content">
                        <div className="title">
                          <h1>{exp.title}</h1>
                          <div className="sub"></div>
                          <h2>{exp.subTitle}</h2>
                        </div>
                      </div>
                      <div className="office">
                        <h3>{exp.office}</h3>
                        <h4>{exp.date}</h4>
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: '1rem',
                        textAlign: 'justify',
                        marginBottom: '1rem'
                      }}
                    >
                      {exp.description ? exp.description.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      )) : 'Description not available'}
                    </p>
                    <div
                      style={{
                        marginTop: '1rem',
                        marginBottom: '1rem'
                      }}
                      className="links"
                    >
                      <a href={exp.link} target="_blank" rel="noreferrer">
                        <Button>View Report</Button>
                      </a>
                    </div>

                    <div className="techs">
                      <h3>Techs:</h3>
                      <ul>
                        {exp.tags.map(tag => (
                          <div className="tags" key={tag.name}>
                            <Image
                              width={50}
                              height={50}
                              src={tag.icon}
                              alt={tag.name}
                            />
                            <h4>{tag.name}</h4>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </TabPanel>
                ))}
            </TabContent>
          </Tabs>
        </TabsContainer>

      </Section>
      <Footer />
    </div>
  );
}