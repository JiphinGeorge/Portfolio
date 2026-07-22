import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

export const LabsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  padding: 0 1rem;
`;

/* ==========================================================================
   TIMELINE SECTION
   ========================================================================== */

export const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TimelineDegree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 2rem;
    bottom: -2rem;
    left: 20px;
    width: 2px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
    z-index: 0;
  }
`;

export const DegreeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1;

  .node {
    width: 42px;
    height: 42px;
    background: ${({ theme }) => theme.background};
    border: 3px solid ${({ theme }) => theme.firstColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.firstColor};
    box-shadow: 0 0 15px ${({ theme }) => theme.firstColor}80;
    animation: ${pulse} 3s infinite;
  }

  h3 {
    color: ${({ theme }) => theme.background === '#F8FAFC' ? theme.textPrimary : theme.white};
    font-size: 1.8rem;
    font-weight: 800;
    margin: 0;
  }

  span {
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const SemesterBlock = styled.div`
  margin-left: 50px;
  background: ${({ theme }) => theme.backgroundAlt};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);

  &:hover {
    transform: translateX(5px);
    border-color: ${({ theme }) => theme.firstColor}50;
    box-shadow: 0 15px 35px rgba(15, 23, 42, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 2rem;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.firstColor}50;
  }

  h4 {
    color: ${({ theme }) => theme.firstColor};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    li {
      color: ${({ theme }) => theme.background === '#F8FAFC' ? theme.textPrimary : theme.text};
      font-weight: 500;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: ${({ theme }) => theme.background === '#F8FAFC' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.05)'};
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      
      svg {
        color: ${({ theme }) => theme.firstColor};
      }
    }
  }
`;

/* ==========================================================================
   SEARCH & FILTERS
   ========================================================================== */

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.backgroundAlt};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  gap: 1rem;
  margin-bottom: 1rem;

  svg {
    color: ${({ theme }) => theme.secondColor};
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textPrimary};
    width: 100%;
    font-size: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.firstColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.firstColor}30;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;

  h4 {
    color: ${({ theme }) => theme.textPrimary};
    margin-right: 1rem;
    font-size: 1rem;
    min-width: 80px;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) => active ? theme.firstColor : 'rgba(255, 255, 255, 0.05)'};
  color: ${({ active, theme }) => active ? theme.background : theme.text};
  border: 1px solid ${({ active, theme }) => active ? theme.firstColor : 'rgba(255, 255, 255, 0.1)'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active, theme }) => active ? theme.firstColor : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

/* ==========================================================================
   GRID & CARDS
   ========================================================================== */

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.backgroundAlt};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(124, 58, 237, 0.15);
    border-color: ${({ theme }) => theme.firstColor}50;
    &::before { opacity: 1; }
  }

  .header {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: 0.8rem;

    .title-row {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      
      svg {
        color: ${({ theme }) => theme.firstColor};
        min-width: 24px;
      }
      h3 {
        color: ${({ theme }) => theme.textPrimary};
        font-size: 1.3rem;
        font-weight: 700;
        margin: 0;
      }
    }

    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }

  .description {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    span {
      background: ${({ theme }) => theme.firstColor}10;
      color: ${({ theme }) => theme.firstColor};
      border: 1px solid ${({ theme }) => theme.border};
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: monospace;
      transition: all 0.2s ease;

      &:hover {
        background: ${({ theme }) => theme.secondColor}30;
        box-shadow: 0 0 8px ${({ theme }) => theme.secondColor}50;
      }
    }
  }

  .stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.backgroundAlt};
    padding: 0.8rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    border: 1px solid ${({ theme }) => theme.border};

    div {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: ${({ theme }) => theme.textSecondary};
      font-size: 0.8rem;

      svg { color: ${({ theme }) => theme.firstColor}; }
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.border};

    a {
      color: ${({ theme }) => theme.firstColor};
      font-size: 0.9rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.2s ease;

      &:hover { color: ${({ theme }) => theme.white}; }
    }
  }
`;

export const Badge = styled.span<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  background: ${({ variant, theme }) => 
    variant === 'primary' ? `${theme.firstColor}10` : 
    variant === 'secondary' ? `${theme.secondColor}10` : theme.backgroundAlt};
  color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.firstColor : 
    variant === 'secondary' ? theme.secondColor : theme.textPrimary};
  border: 1px solid ${({ variant, theme }) => 
    variant === 'primary' ? `${theme.firstColor}30` : 
    variant === 'secondary' ? `${theme.secondColor}30` : theme.border};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

/* ==========================================================================
   SKELETON LOADERS
   ========================================================================== */

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const SkeletonCard = styled(Card)`
  &::before { display: none; }
  pointer-events: none;
`;

export const SkeletonLine = styled.div<{ width?: string; height?: string; mb?: string }>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '1rem'};
  margin-bottom: ${({ mb }) => mb || '0.5rem'};
  border-radius: 4px;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.05) 25%, 
    rgba(255, 255, 255, 0.1) 50%, 
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  gap: 1rem;

  h3 { color: ${({ theme }) => theme.white}; }
  svg { color: ${({ theme }) => theme.secondColor}; }
`;
