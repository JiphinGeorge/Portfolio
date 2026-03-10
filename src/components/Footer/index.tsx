import Link from 'next/link'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FooterContainer, FooterContent } from './styles'

export function Footer() {


  return (
    <FooterContainer>
      <FooterContent>
        <h4> &copy; {new Date().getFullYear()} Jiphin George</h4>
        <div className="footer_links">
        <Link href={'/privacypolicy'} aria-label="Privacy Policy" legacyBehavior>
          Privacy Policy
        </Link>
        <Link href={'/terms&condition'} aria-label="Terms & Conditions" legacyBehavior>
          Terms & Conditions
        </Link>
        </div>
      </FooterContent>
      <div className="links">
        <Link
          href={'https://github.com/JiphinGeorge'}
          target="_blank"
          aria-label="Link to Github"
        >
          <FiGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/jiphin-george-89315b295/'}
          target="_blank"
          aria-label="Link to Linkedin"
        >
          <FiLinkedin />
        </Link>
        <Link
          href={'https://www.instagram.com/jiphin_george?igsh=eWpiNGtlemdiZGJz'}
          target="_blank"
          aria-label="Instagram"
        >
          <FiInstagram />
        </Link>
      </div>
    </FooterContainer>
  );
}