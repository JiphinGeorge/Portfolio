/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { Button, ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText, Card, Announcement, Logo, Box } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react';
import Modal from 'react-modal';
import { useRef, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import Confetti from 'react-confetti';
import { useOptimizedScroll } from '../../hooks/useOptimizedScroll';

const GOOGLE_FORM_ACTION_URL2 = process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL2;
const NAME_ENTRY_ID2 = process.env.NEXT_PUBLIC_NAME_ENTRY_ID2;

Modal.setAppElement('#__next');

export function HomeHero() {


  function openModal2() {
    setModalIsOpen2(true);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollY = useOptimizedScroll();

  useEffect(() => {
    // Fetch the current date using JavaScript's built-in Date object
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    setDate(currentDate);
  }, []);

  function closeModal2() {
    setModalIsOpen2(false);
  }

  async function handleGenerate() {
    if (userName.trim() === '') {
      alert('Please enter a name!');
      return;
    }

    setShowCard(true);

    try {
      if (!GOOGLE_FORM_ACTION_URL2) {
        console.error('Google Form action URL is not defined');
        return;
      }

      const formData = new FormData();
      formData.append(NAME_ENTRY_ID2 || '', userName);

      const response = await fetch(GOOGLE_FORM_ACTION_URL2, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      if (response) {
        setUserName('');
      } else {
        console.error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }

    // Trigger confetti
    setShowConfetti(true);

    // Stop confetti after 3 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  }

  async function downloadCard() {
    if (cardRef.current) {
      try {
        const dataUrl = await htmlToImage.toPng(cardRef.current); // Convert the card to PNG
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'business-card.png'; // Set the download filename
        link.click(); // Trigger the download
      } catch (error) {
        console.error('Failed to generate the business card image:', error);
      }
    }
  }

  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello, my name is
          </p>
          <h1>
            Jiphin George
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['MCA Student | Full Stack Developer | AI Enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="button">
            <Link legacyBehavior href="#projects">
              <ButtonPrimary>
                <b>See Portfolio</b>
                <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
              </ButtonPrimary>
            </Link>

            {/* <ButtonPrimary onClick={openModal2}>
              <b>{currentLang === 'ta' ? 'அட்டை உருவாக்கவும்' : 'Generate your card'}</b>
              <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
            </ButtonPrimary> */}

            <Modal
              isOpen={modalIsOpen2}
              onRequestClose={closeModal2}
              contentLabel="Card Modal"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '10px',
                  width: '70%', // Adjust width for responsiveness
                  maxWidth: '600px', // Limit the maximum width
                  height: 'auto',
                },
              }}
            >
              <h2 style={{ textAlign: 'center', color: 'black' }}>
                Generate Card
              </h2>
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  margin: '10px 0',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
              <Button
                onClick={handleGenerate}
                style={{
                  marginBottom: '10px',
                  backgroundColor: 'blue',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  color: 'white',
                  margin: '0 auto',
                }}
              >
                Generate
              </Button>
              <div
                ref={cardRef}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  aspectRatio: '3 / 2',
                  margin: '20px auto',
                  padding: '20px',
                  border: '1px solid #000',
                  borderRadius: '10px',
                  textAlign: 'center',
                  backgroundColor: '#f9f9f9',
                }}
              >
                {showCard && (
                  <Box>
                    <Card>
                      <header>
                        <span>{date || 'Loading...'}</span>
                        <Logo>
                          <Image
                            width={50}
                            height={50}
                            src="/Logo1.png"
                            alt="logo"
                            loading="lazy"
                          />
                        </Logo>
                        <span>DEV CARD</span>
                      </header>
                      <Announcement>
                        <h3>Yo! </h3>
                        <h1>{userName || 'Error'}</h1>
                        <h3 className="italic">thanks for stopping by my world</h3>
                      </Announcement>
                      <span>https://github.com/JiphinGeorge</span>
                    </Card>
                  </Box>
                )}
              </div>
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'row' }}>
                <Button onClick={downloadCard} style={{
                  marginBottom: '10px',
                  backgroundColor: 'blue',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  margin: '0 auto',
                  color: 'white',
                }}>
                  Download
                </Button>
                <Button
                  onClick={closeModal2}
                  style={{
                    marginTop: '10px',
                    paddingTop: '10px',
                    backgroundColor: 'red',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    margin: '0 auto',
                    color: 'white',
                  }}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </div>
        </HomeText>

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={250}
            gravity={0.5}
            wind={0.05}
          />
        )}
        <ImgHome>
          <Image 
            className="home-img" 
            src="/home.png" 
            alt="Image Home" 
            width={400} 
            height={400} 
            priority 
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBBEFITFRYbHB0f/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />

          <div className="code">
            <Image
              width={150}
              height={50}
              src="/vectors/dino.svg"
              alt="dino"
              loading="lazy"
            />
          </div>
        </ImgHome>

      </Content >
    </Container >
  )
}