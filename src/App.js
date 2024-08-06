import './App.css';

import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faPhoneSquare,
	faFileDownload,
} from '@fortawesome/free-solid-svg-icons';

import profile from './profile.jpg';

import { education, experience, projects, skills } from './resume';

import { Education, Experience, Projects, Skills } from './Components';

library.add(fab, faEnvelope, faPhoneSquare, faFileDownload);

function App() {
	return (
		<div className="App">
			<Navbar
				bg="dark"
				expand="lg"
				variant="dark"
				fixed="top"
				collapseOnSelect="True"
			>
				<Navbar.Brand href="#home">
					<span className="nicholas-brand">NICHOLAS</span>BENNET
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="justify-content-center">
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#education">Education</Nav.Link>
						<Nav.Link href="#experience">Experience</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
						<Nav.Link href="#skills">Skills</Nav.Link>
						<Nav.Link href="/resume.pdf" target="_blank">
							Resume
						</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="header" id="home">
				<div className="inner">
					<img src={profile} alt="Profile" className="profile-pic"></img>
					<h1 className="inner-text">
						<span role="img" aria-label="Hi">
							👋
						</span>{' '}
						I'M NICHOLAS
					</h1>
					<span className="inner-text">
						<a
							href="https://github.com/nicholasbennet"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={['fab', 'github']} />
						</a>
						<a
							href="https://www.linkedin.com/in/nicholasbennet/"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={['fab', 'linkedin']} />
						</a>
						<a
							href="mailto:hire@nicholasben.net"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon="envelope" />
						</a>
						<a href="tel:+13479710488" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon="phone-square" />
						</a>
					</span>
				</div>
			</div>
			<Container id="about">
				<Row>
					<Col className="heading">
						<h1>About Me</h1>
					</Col>
				</Row>
				<Row>
					<Col className="about-text">
						<p>
							I'm Nicholas Bennet, a 25 year old Security Engineer/Architect who
							is currently working with New York University. I am excited about
							everything software, networking and security related and love to
							use my knowledge and careful research to help solve real world
							problems. I am also a self taught Web Developer with a good eye
							for detail.
							<br />
							<br />
							In my free time you would usually find me tinkering with my
							Raspberry Pi HomeLab or cycling and exploring the beautiful New
							York City.
						</p>
					</Col>
				</Row>
			</Container>
			<Container id="experience">
				<Row>
					<Col className="heading">
						<h1>Experience</h1>
					</Col>
				</Row>
				<Experience experience={experience} />
			</Container>
			<Container id="education">
				<Row>
					<Col className="heading">
						<h1>Education</h1>
					</Col>
				</Row>
				<Education education={education} />
			</Container>
			<Container id="projects">
				<Row>
					<Col className="heading">
						<h1>Projects</h1>
					</Col>
				</Row>
				<Projects projects={projects} />
			</Container>
			<Container id="skills">
				<Row>
					<Col className="heading">
						<h1>Technical Skills</h1>
					</Col>
				</Row>
				<Skills skills={skills} />
			</Container>
			<Container id="contact">
				<Row>
					<Col className="heading">
						<h1>Contact Me</h1>
					</Col>
				</Row>
				<Row>
					<Col className="contact-det">
						<div className="contact-phone">
							<FontAwesomeIcon icon="phone-square" />{' '}
							<a href="tel:+13479710488" target="_blank" rel="noreferrer">
								+1-(347)-971-0488
							</a>
						</div>
						<div className="contact-email">
							<FontAwesomeIcon icon="envelope" />{' '}
							<a
								href="mailto:hire@nicholasben.net"
								target="_blank"
								rel="noreferrer"
							>
								hire@nicholasben.net
							</a>{' '}
							,{' '}
							<a
								href="mailto:nicholas.bennet@nyu.edu"
								target="_blank"
								rel="noreferrer"
							>
								nicholas.bennet@nyu.edu
							</a>
						</div>
						<div className="resume-download-btn">
							<a href="/resume.pdf" download="Nicholas-Bennet-Resume.pdf">
								<Button variant="dark">
									<FontAwesomeIcon icon="file-download" /> Download my Resume
								</Button>
							</a>
						</div>

						<span className="contact-text">
							<a
								href="https://github.com/nicholasbennet"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={['fab', 'github']} />
							</a>
							<a
								href="https://www.linkedin.com/in/nicholasbennet/"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={['fab', 'linkedin']} />
							</a>
							<a
								href="mailto:hire@nicholasben.net"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon="envelope" />
							</a>
							<a href="tel:+13479710488" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon="phone-square" />
							</a>
						</span>
					</Col>
				</Row>
			</Container>
			<Row className="footer">
				<Col>
					<div>
						Made using{' '}
						<a
							href="https://reactjs.org/"
							target="_blank"
							rel="noreferrer"
							className="react"
						>
							ReactJS
						</a>{' '}
						and{' '}
						<a
							href="https://react-bootstrap.github.io/"
							target="_blank"
							rel="noreferrer"
							className="react"
						>
							React Bootstrap
						</a>
					</div>
					<div>&copy; 2021 Nicholas Bennet</div>
				</Col>
			</Row>
		</div>
	);
}

export default App;
