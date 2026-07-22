import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollTop } from '../components/ScrollTop';
import { Section, Title, Description } from '../styles/styles';
import { BookOpen, GithubLogo, Clock, FileCode, CheckCircle, WarningCircle } from 'phosphor-react';
import {
  LabsContainer,
  FilterContainer,
  FilterGroup,
  FilterButton,
  GridContainer,
  Card,
  Badge,
  LatestUpdateSection,
  StatusMessage
} from '../styles/academic-labs';
import { labProgramsConfig, LabProgramConfig } from '../data/labPrograms';
import { formatDistanceToNow } from 'date-fns';

interface RepoData {
  config: LabProgramConfig;
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
  stargazers_count: number;
  extractedDescription: string | null;
  detectedLanguages: string[];
}

export default function AcademicLabs() {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Filters
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
        // Fetch all repos for user
        const reposRes = await fetch('https://api.github.com/users/JiphinGeorge/repos?per_page=100');
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const allRepos = await reposRes.json();

        const fetchedData: RepoData[] = [];

        // For each config repo, find it and fetch extra info
        for (const config of labProgramsConfig) {
          const repo = allRepos.find((r: any) => r.name === config.repository);
          
          if (repo) {
            let extractedDescription = null;
            let detectedLanguages: string[] = [];

            try {
              // Fetch Languages
              const langRes = await fetch(repo.languages_url);
              if (langRes.ok) {
                const langs = await langRes.json();
                detectedLanguages = Object.keys(langs);
              }

              // Fetch README
              const readmeRes = await fetch(`https://api.github.com/repos/JiphinGeorge/${repo.name}/readme`, {
                headers: { Accept: 'application/vnd.github.v3.raw' }
              });
              if (readmeRes.ok) {
                const readmeText = await readmeRes.text();
                // Simple extraction: find first paragraph not starting with #
                const lines = readmeText.split('\n');
                for (let line of lines) {
                  line = line.trim();
                  if (line.length > 30 && !line.startsWith('#') && !line.startsWith('!') && !line.startsWith('[')) {
                    extractedDescription = line.length > 150 ? line.substring(0, 150) + '...' : line;
                    break;
                  }
                }
              }
            } catch (err) {
              console.warn(`Could not fetch extra data for ${repo.name}`);
            }

            fetchedData.push({
              config,
              name: repo.name,
              description: repo.description,
              html_url: repo.html_url,
              updated_at: repo.updated_at,
              stargazers_count: repo.stargazers_count,
              extractedDescription,
              detectedLanguages
            });
          }
        }

        // Sort by updated descending
        fetchedData.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setRepos(fetchedData);
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  // Filter Logic
  const filteredRepos = repos.filter(repo => {
    const matchCategory = categoryFilter === 'All' || repo.config.category === categoryFilter;
    const matchSemester = semesterFilter === 'All' || repo.config.semester === semesterFilter;
    const matchTech = techFilter === 'All' || repo.config.technologies.includes(techFilter) || repo.detectedLanguages.includes(techFilter);
    return matchCategory && matchSemester && matchTech;
  });

  const latestRepos = repos.slice(0, 3); // top 3 updated

  return (
    <>
      <Head>
        <title>Academic Labs | Jiphin George</title>
        <meta name="description" content="Academic coding archive featuring lab programs and exercises from BCA and MCA." />
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
          This section acts as a continuously updated academic coding archive fetched directly from my GitHub repositories. It showcases my programming journey and lab exercises from BCA to MCA.
        </Description>

        <LabsContainer>
          {loading && (
            <StatusMessage>
              <div className="loader"></div>
              Fetching latest lab repositories...
            </StatusMessage>
          )}

          {error && !loading && (
            <StatusMessage>
              <WarningCircle size={48} color="#ff5555" />
              Unable to fetch GitHub data. Please try again.
            </StatusMessage>
          )}

          {!loading && !error && repos.length > 0 && (
            <>
              {/* Latest Updates Section */}
              <LatestUpdateSection>
                <h3><Clock weight="bold" /> Recently Updated</h3>
                <div className="latest-items">
                  {latestRepos.map(repo => (
                    <div className="latest-item" key={repo.name + '-latest'}>
                      <CheckCircle weight="fill" color="#64ffda" />
                      <div>
                        <div className="name">{repo.name}</div>
                        <div className="time">Updated {formatDistanceToNow(new Date(repo.updated_at))} ago</div>
                      </div>
                    </div>
                  ))}
                </div>
              </LatestUpdateSection>

              {/* Filtering */}
              <FilterContainer>
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

              {/* Lab Cards Grid */}
              <GridContainer>
                {filteredRepos.map(repo => (
                  <Card key={repo.name}>
                    <div className="header">
                      <h3>{repo.config.repository.replace(/-/g, ' ')}</h3>
                      <div className="badges">
                        <Badge variant="primary">{repo.config.category}</Badge>
                        <Badge variant="secondary">{repo.config.semester}</Badge>
                      </div>
                    </div>

                    <div className="subject">
                      <FileCode size={18} /> {repo.config.subject}
                    </div>

                    <div className="description">
                      {repo.extractedDescription 
                        ? repo.extractedDescription 
                        : (repo.description || `Collection of implementations for ${repo.config.subject} during ${repo.config.category} ${repo.config.semester}.`)}
                    </div>

                    <div className="tech-stack">
                      {Array.from(new Set([...repo.config.technologies, ...repo.detectedLanguages])).map(tech => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="footer">
                      <div className="date">
                        <Clock size={14} /> {formatDistanceToNow(new Date(repo.updated_at))} ago
                      </div>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        View Repository <GithubLogo size={20} />
                      </a>
                    </div>
                  </Card>
                ))}
              </GridContainer>

              {filteredRepos.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: '3rem', color: '#8892b0' }}>
                  No repositories match the selected filters.
                </div>
              )}
            </>
          )}
        </LabsContainer>
      </Section>
      <Footer />
      <ScrollTop />
    </>
  );
}
