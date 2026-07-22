import Head from 'next/head';
import React, { useState, useEffect, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollTop } from '../components/ScrollTop';
import { Section, Title, Description } from '../styles/styles';
import { 
  BookOpen, GithubLogo, Clock, FileCode, MagnifyingGlass, 
  Code, Star, FolderNotch, Student, Briefcase, SmileySad, WarningCircle
} from 'phosphor-react';
import {
  LabsContainer,
  TimelineContainer,
  TimelineDegree,
  DegreeHeader,
  SemesterBlock,
  FilterContainer,
  SearchBar,
  FilterGroup,
  FilterButton,
  GridContainer,
  Card,
  Badge,
  SkeletonCard,
  SkeletonLine,
  EmptyState
} from '../styles/academic-labs';
import { labProgramsConfig, LabProgramConfig } from '../data/labPrograms';
import { formatDistanceToNow } from 'date-fns';
import FadeInAnimation from '../components/Animations/FadeInAnimation';

interface RepoData {
  config: LabProgramConfig;
  name: string;
  html_url: string;
  updated_at: string | null;
  stargazers_count: number | null;
  primary_language: string | null;
  detectedLanguages: string[];
}

export default function AcademicLabs() {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiFailed, setApiFailed] = useState(false);
  
  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [semesterFilter, setSemesterFilter] = useState('All');
  const [techFilter, setTechFilter] = useState('All');

  const categories = ['All', 'BCA', 'MCA'];
  const semesters = ['All', 'Semester 1', 'Semester 2', 'Semester 3', 'Semester 5', 'Semester 6'];
  const technologies = ['All', 'Android', 'Java', 'PHP', 'HTML', 'Shell', 'Data Structures', 'Programming Languages', 'Web Development', 'OOP'];

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        setApiFailed(false);
        const reposRes = await fetch('https://api.github.com/users/JiphinGeorge/repos?per_page=100');
        
        if (!reposRes.ok) {
          throw new Error('Rate limit or network error');
        }
        
        const allRepos = await reposRes.json();
        const fetchedData: RepoData[] = [];

        for (const config of labProgramsConfig) {
          const repo = allRepos.find((r: any) => r.name === config.name);
          
          if (repo) {
            let detectedLanguages: string[] = [];
            try {
              const langRes = await fetch(repo.languages_url);
              if (langRes.ok) {
                const langs = await langRes.json();
                detectedLanguages = Object.keys(langs);
              }
            } catch (err) {}

            fetchedData.push({
              config,
              name: repo.name,
              html_url: repo.html_url,
              updated_at: repo.updated_at,
              stargazers_count: repo.stargazers_count,
              primary_language: repo.language,
              detectedLanguages
            });
          } else {
            // Repo not found in API but in config
            fetchedData.push(generateFallbackRepo(config));
          }
        }
        setRepos(fetchedData);
      } catch (err) {
        console.error('GitHub API Failed:', err);
        setApiFailed(true);
        // Fallback to static config
        setRepos(labProgramsConfig.map(generateFallbackRepo));
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  const generateFallbackRepo = (config: LabProgramConfig): RepoData => ({
    config,
    name: config.name,
    html_url: `https://github.com/JiphinGeorge/${config.name}`,
    updated_at: null,
    stargazers_count: null,
    primary_language: config.technologies[0] || null,
    detectedLanguages: []
  });

  // Filter Logic
  const filteredRepos = useMemo(() => {
    return repos.filter(repo => {
      const q = searchQuery.toLowerCase();
      const matchSearch = 
        repo.name.toLowerCase().includes(q) || 
        repo.config.subject.toLowerCase().includes(q) ||
        repo.config.technologies.some(t => t.toLowerCase().includes(q));

      const matchCategory = categoryFilter === 'All' || repo.config.degree === categoryFilter;
      const matchSemester = semesterFilter === 'All' || repo.config.semester === semesterFilter;
      const matchTech = techFilter === 'All' || repo.config.technologies.includes(techFilter) || repo.detectedLanguages.includes(techFilter);
      
      return matchSearch && matchCategory && matchSemester && matchTech;
    });
  }, [repos, searchQuery, categoryFilter, semesterFilter, techFilter]);

  return (
    <>
      <Head>
        <title>Academic Labs | Jiphin George</title>
        <meta name="description" content="Explore programming laboratory implementations completed during BCA and MCA covering Android development, Java, PHP, algorithms, web technologies, and more." />
      </Head>

      <Header />

      <Section style={{ paddingTop: '8rem' }}>
        <Title>
          <p>../academic-labs</p>
          Lab Programs
          <span>
            <BookOpen /> Academic Archive
          </span>
        </Title>
        <Description style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          My complete academic programming journey from BCA to MCA. This archive fetches live data from my GitHub repositories to showcase practical laboratory implementations, coursework projects, and algorithmic problem solving.
        </Description>

        <LabsContainer>

          {/* Academic Journey Timeline */}
          <TimelineContainer>
            <FadeInAnimation>
              <TimelineDegree>
                <DegreeHeader>
                  <div className="node"><Briefcase size={24} weight="fill" /></div>
                  <div>
                    <h3>MCA Journey</h3>
                    <span>2025 - Present</span>
                  </div>
                </DegreeHeader>
                <SemesterBlock>
                  <h4>Semester 3</h4>
                  <ul>
                    <li><FileCode size={18} /> Android Lab</li>
                  </ul>
                </SemesterBlock>
                <SemesterBlock>
                  <h4>Semester 2</h4>
                  <ul>
                    <li><FileCode size={18} /> Object Oriented Programming Lab</li>
                  </ul>
                </SemesterBlock>
                <SemesterBlock>
                  <h4>Semester 1</h4>
                  <ul>
                    <li><FileCode size={18} /> Advanced Data Structures</li>
                    <li><FileCode size={18} /> Programming Languages</li>
                    <li><FileCode size={18} /> Web Design Lab</li>
                  </ul>
                </SemesterBlock>
              </TimelineDegree>
            </FadeInAnimation>

            <FadeInAnimation>
              <TimelineDegree>
                <DegreeHeader>
                  <div className="node"><Student size={24} weight="fill" /></div>
                  <div>
                    <h3>BCA Journey</h3>
                    <span>2022 - 2025</span>
                  </div>
                </DegreeHeader>
                <SemesterBlock>
                  <h4>Semester 6</h4>
                  <ul>
                    <li><FileCode size={18} /> Shell Programming</li>
                    <li><FileCode size={18} /> Android Programming</li>
                  </ul>
                </SemesterBlock>
                <SemesterBlock>
                  <h4>Semester 5</h4>
                  <ul>
                    <li><FileCode size={18} /> Java Programming</li>
                    <li><FileCode size={18} /> PHP Programming</li>
                    <li><FileCode size={18} /> HTML Programming</li>
                  </ul>
                </SemesterBlock>
              </TimelineDegree>
            </FadeInAnimation>
          </TimelineContainer>

          {/* API Fallback Warning */}
          {apiFailed && !loading && (
            <div style={{ background: 'rgba(255, 85, 85, 0.1)', border: '1px solid #ff555550', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ff5555', marginBottom: '2rem', maxWidth: '1000px', width: '100%' }}>
              <WarningCircle size={24} />
              GitHub API limit reached. Showing offline static metadata. Latest statistics may be unavailable.
            </div>
          )}

          {/* Search & Filtering */}
          <FilterContainer>
            <SearchBar>
              <MagnifyingGlass size={22} />
              <input 
                type="text" 
                placeholder="Search by repository, subject, or technology..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBar>

            <FilterGroup>
              <h4>Category:</h4>
              {categories.map(cat => (
                <FilterButton key={cat} active={categoryFilter === cat} onClick={() => setCategoryFilter(cat)}>
                  {cat}
                </FilterButton>
              ))}
            </FilterGroup>

            <FilterGroup>
              <h4>Semester:</h4>
              {semesters.map(sem => (
                <FilterButton key={sem} active={semesterFilter === sem} onClick={() => setSemesterFilter(sem)}>
                  {sem}
                </FilterButton>
              ))}
            </FilterGroup>

            <FilterGroup>
              <h4>Technology:</h4>
              {technologies.map(tech => (
                <FilterButton key={tech} active={techFilter === tech} onClick={() => setTechFilter(tech)}>
                  {tech}
                </FilterButton>
              ))}
            </FilterGroup>
          </FilterContainer>

          {/* Skeletons */}
          {loading && (
            <GridContainer>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <SkeletonCard key={n}>
                  <div className="header">
                    <SkeletonLine height="1.8rem" width="70%" />
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <SkeletonLine height="1.2rem" width="40px" />
                      <SkeletonLine height="1.2rem" width="60px" />
                    </div>
                  </div>
                  <SkeletonLine height="4rem" mb="1.5rem" />
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <SkeletonLine height="1.5rem" width="50px" />
                    <SkeletonLine height="1.5rem" width="60px" />
                    <SkeletonLine height="1.5rem" width="40px" />
                  </div>
                  <SkeletonLine height="3rem" />
                </SkeletonCard>
              ))}
            </GridContainer>
          )}

          {/* Lab Cards Grid */}
          {!loading && (
            <GridContainer>
              {filteredRepos.map(repo => (
                <FadeInAnimation key={repo.name}>
                  <Card>
                    <div className="header">
                      <div className="title-row">
                        <FolderNotch weight="fill" size={24} />
                        <h3>{repo.name}</h3>
                      </div>
                      <div className="badges">
                        <Badge variant="primary">{repo.config.degree}</Badge>
                        <Badge variant="secondary">{repo.config.semester}</Badge>
                        <Badge variant="outline">{repo.config.subject}</Badge>
                      </div>
                    </div>

                    <div className="description">
                      {repo.config.description}
                    </div>

                    <div className="tech-stack">
                      {Array.from(new Set([...repo.config.technologies, ...repo.detectedLanguages])).map(tech => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="stats">
                      <div>
                        <Code size={16} /> {repo.primary_language || 'Mixed'}
                      </div>
                      <div>
                        <Star size={16} weight="fill" /> {repo.stargazers_count !== null ? repo.stargazers_count : '-'}
                      </div>
                      <div>
                        <Clock size={16} /> {repo.updated_at ? formatDistanceToNow(new Date(repo.updated_at)) + ' ago' : 'Offline'}
                      </div>
                    </div>

                    <div className="footer">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        View Source <GithubLogo size={20} />
                      </a>
                    </div>
                  </Card>
                </FadeInAnimation>
              ))}
            </GridContainer>
          )}

          {/* Empty State */}
          {!loading && filteredRepos.length === 0 && (
            <EmptyState>
              <SmileySad size={64} />
              <h3>No academic labs found matching your filters.</h3>
              <p>Try adjusting your search criteria or resetting the filters.</p>
            </EmptyState>
          )}

        </LabsContainer>
      </Section>
      <Footer />
      <ScrollTop />
    </>
  );
}
