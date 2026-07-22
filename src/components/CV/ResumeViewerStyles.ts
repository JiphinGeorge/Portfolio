import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
  width: 100%;
  max-width: 900px;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const DocumentWrapper = styled.div`
  position: relative;
  background: rgba(10, 15, 30, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 240, 255, 0.1);
  padding: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  &:hover {
    border: 1px solid rgba(0, 240, 255, 0.6);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 240, 255, 0.2);
  }

  .react-pdf__Document {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .react-pdf__Page {
    background-color: transparent !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    border-radius: 4px;
    overflow: hidden;
    max-width: 100%;
  }
  
  .react-pdf__Page canvas {
    border-radius: 4px;
    max-width: 100%;
    height: auto !important;
  }
`;

export const ControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  background: rgba(10, 15, 30, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(189, 0, 255, 0.3);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
`;

export const NavButton = styled.button`
  background: transparent;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  
  svg {
    font-size: 1.5rem;
    color: #00f0ff;
  }

  &:hover:not(:disabled) {
    background: rgba(0, 240, 255, 0.1);
    transform: scale(1.1);
    
    svg {
      color: #bd00ff;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const PageIndicator = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #e2e8f0;
  letter-spacing: 1px;
  min-width: 100px;
  text-align: center;
`;

export const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: #00f0ff;
  font-size: 1.2rem;
  gap: 1rem;
  
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
  
  animation: pulse 1.5s infinite ease-in-out;
`;

export const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: #ff4d4f;
  font-size: 1.2rem;
`;
