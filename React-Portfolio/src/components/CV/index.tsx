import Image from 'next/image'
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles"
import { FiDownload } from 'react-icons/fi'

export function CV() {


  return (
    <Container>
      <CVContainer>
        <Title>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className="aspas">&ldquo;</div>
            <p>
              Here you can download my professional resume by clicking on the download button.
            </p>
            <div className="profile">
              <Image src="https://github.com/JiphinGeorge.png" alt="Profile" width={80} height={80} />
              <div className="name">
                <h3>Jiphin George</h3>
                <span>Developer</span>
              </div>
            </div>
          </CVDescription>
          
          <Curriculum>
            <Image src="/cv.png" alt="Resume" width={300} height={400} />
            <a href="#" download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20}  />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>        
      </CVContainer>
    </Container>
  )
}