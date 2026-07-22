import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { CaretLeft, CaretRight, DownloadSimple } from 'phosphor-react';
// CSS imports removed temporarily to isolate Next.js global CSS issues
import {
  ViewerContainer,
  DocumentWrapper,
  ControlBar,
  NavButton,
  PageIndicator,
  LoadingState,
  ErrorState,
  DownloadContainer
} from './ResumeViewerStyles';
import { ButtonSecondAlt } from '../../styles/styles';

// Configure PDF.js worker safely
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

interface ResumeViewerProps {
  pdfUrl: string;
}

export function ResumeViewer({ pdfUrl }: ResumeViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(800);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const updateWidth = () => {
      // Calculate width based on window size to maintain aspect ratio and fit
      const windowWidth = window.innerWidth;
      if (windowWidth < 600) {
        setPageWidth(windowWidth - 40);
      } else if (windowWidth < 900) {
        setPageWidth(windowWidth - 100);
      } else {
        setPageWidth(800);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  // isClient check removed since we use next/dynamic with ssr: false
  return (
    <ViewerContainer>
      <h1 style={{ color: 'white' }}>DEBUG: ResumeViewer is mounting</h1>
      <DocumentWrapper>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<LoadingState>Loading Resume...</LoadingState>}
          error={<ErrorState>Failed to load PDF. Please try again or download it directly.</ErrorState>}
        >
          <Page 
            pageNumber={pageNumber} 
            width={pageWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </DocumentWrapper>

      <ControlBar>
        <NavButton 
          type="button" 
          disabled={pageNumber <= 1} 
          onClick={previousPage}
          aria-label="Previous page"
        >
          <CaretLeft weight="bold" />
        </NavButton>
        
        <PageIndicator>
          Page {pageNumber} of {numPages || '--'}
        </PageIndicator>
        
        <NavButton 
          type="button" 
          disabled={numPages !== null && pageNumber >= numPages} 
          onClick={nextPage}
          aria-label="Next page"
        >
          <CaretRight weight="bold" />
        </NavButton>
      </ControlBar>

      <DownloadContainer>
        <a href={pdfUrl} download="Jiphin_George_Resume.pdf">
          <ButtonSecondAlt>
            <b>Download PDF</b> <DownloadSimple size={20} weight="bold" />
          </ButtonSecondAlt>
        </a>
      </DownloadContainer>
    </ViewerContainer>
  );
}

export default ResumeViewer;
