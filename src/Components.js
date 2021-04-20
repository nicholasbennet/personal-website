import './Components.css';

import { Row, Col } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Education(props) {
	const education = props.education;
	const educationList = education.map((education) => (
		<Col md={6} className="educationList">
			<Row>
				<Col xs={4} className="edu-img-cont">
					<img
						src={education.img}
						alt={education.school}
						className="edu-img"
					></img>
				</Col>
				<Col xs={8}>
					<div className="edu-year">
						{education.year}, {education.location}
					</div>
					<div className="edu-uni">{education.school}</div>
					<div className="edu-degree">{education.degree}</div>
					<div className="edu-gpa">{education.gpa}</div>
				</Col>
			</Row>
		</Col>
	));
	return <Row>{educationList}</Row>;
}

function Experience(props) {
	const experience = props.experience;
	const experienceList = experience.map((experience) => (
		<Col md={6} className="experienceList">
			<div>
				<img src={experience.img} alt="" className="exp-img"></img>
			</div>
			<div className="exp-year">
				{experience.year}, {experience.location}
			</div>
			<div className="exp-comp">{experience.company}</div>
			<div className="exp-pos">{experience.position}</div>
			<div className="exp-stat">{experience.status}</div>
		</Col>
	));
	return <Row>{experienceList}</Row>;
}

function Projects(props) {
	const projects = props.projects;
	const projectsList = projects.map((projects) => (
		<Col md={6} className="projectsList">
			<div className="proj-year">{projects.year}</div>
			<div className="proj-name">{projects.name}</div>
			<div className="proj-tools">{projects.tools}</div>
			<div className="proj-link">
				<a href={projects.link} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={['fab', 'github']} />
					&nbsp;Github
				</a>
			</div>
		</Col>
	));
	return <Row>{projectsList}</Row>;
}

function Skills(props) {
	const skills = props.skills;
	const skillsList = skills.map((skills) => (
		<Col md={3} sm={6} className="skillsList">
			<div className="skill-name">{skills.name}</div>
			<div className="skill-tools">{skills.tools}</div>
		</Col>
	));
	return <Row>{skillsList}</Row>;
}

export { Experience, Education, Projects, Skills };
