import styled from 'styled-components';

export const LabsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  padding: 0 1rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.firstColor}30;
  border-radius: 16px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;

  h4 {
    color: ${({ theme }) => theme.white};
    margin-right: 1rem;
    font-size: 1rem;
    min-width: 80px;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) => 
    active ? theme.firstColor : 'rgba(255, 255, 255, 0.05)'};
  color: ${({ active, theme }) => 
    active ? theme.background : theme.text};
  border: 1px solid ${({ active, theme }) => 
    active ? theme.firstColor : 'rgba(255, 255, 255, 0.1)'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active, theme }) => 
      active ? theme.firstColor : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const Card = styled.div`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.firstColor}20;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

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
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    border-color: ${({ theme }) => theme.firstColor}50;

    &::before {
      opacity: 1;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;

    h3 {
      color: ${({ theme }) => theme.white};
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }

  .subject {
    color: ${({ theme }) => theme.secondColor};
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .description {
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    span {
      background: rgba(255, 255, 255, 0.05);
      color: ${({ theme }) => theme.firstColor};
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: monospace;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    .date {
      color: ${({ theme }) => theme.text};
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    a {
      color: ${({ theme }) => theme.firstColor};
      font-size: 0.9rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.white};
      }
    }
  }
`;

export const Badge = styled.span<{ variant?: 'primary' | 'secondary' }>`
  background: ${({ variant, theme }) => 
    variant === 'primary' ? `${theme.firstColor}20` : `${theme.secondColor}20`};
  color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.firstColor : theme.secondColor};
  border: 1px solid ${({ variant, theme }) => 
    variant === 'primary' ? `${theme.firstColor}40` : `${theme.secondColor}40`};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const LatestUpdateSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(2, 6, 23, 0.8) 100%);
  border-left: 4px solid ${({ theme }) => theme.firstColor};
  border-radius: 0 16px 16px 0;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);

  h3 {
    color: ${({ theme }) => theme.white};
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .latest-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .latest-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);

    .name {
      color: ${({ theme }) => theme.firstColor};
      font-weight: 600;
      font-size: 0.95rem;
    }

    .time {
      color: ${({ theme }) => theme.text};
      font-size: 0.8rem;
    }
  }
`;

export const StatusMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  gap: 1rem;

  .loader {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.firstColor};
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
