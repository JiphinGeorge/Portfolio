import Head from "next/head";
import { About } from "../components/CardAbout";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Experience";
import { CardContact } from "../components/CardContact";
import { LoadingScreen } from "../components/Animations/LoadingScreen";
import { Education } from "../components/Education";
import { Certifications } from "../components/Certifications";
import { Section } from "../styles/styles";


import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'

import { useLoading } from '../hooks/useLoading';
import RouteTransition from '../components/Animations/RouteTransition';
import FadeInAnimation from '../components/Animations/FadeInAnimation';

export default function Home() {
  const router = useRouter();
  const isLoading = useLoading(3000);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => {}} />;
  }

  return (
    <RouteTransition>
      <Head>
        <title>Jiphin George's Portfolio</title>
      </Head>
      <ScrollTop />
      <Section>
        <FadeInAnimation>
          <HomeHero />
        </FadeInAnimation>
        <FadeInAnimation>
          <About />
        </FadeInAnimation>
        <FadeInAnimation>
          <Skills />
        </FadeInAnimation>
        <FadeInAnimation>
          <Education />
        </FadeInAnimation>
        <FadeInAnimation>
          <Experience />
        </FadeInAnimation>
        <FadeInAnimation>
          <Projects />
        </FadeInAnimation>
        <FadeInAnimation>
          <Certifications />
        </FadeInAnimation>
        <FadeInAnimation>
          <CardContact />
        </FadeInAnimation>
      </Section>
      <Footer />
    </RouteTransition>
  );
}

