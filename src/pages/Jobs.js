import React from 'react';
import Cards from './Cards/Cards'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import JobPosting from '../images/job_posting.jpg';

function Jobs() {
  var jobsList = [
    {
      name: "Software Developer",
      company: "Google",
      description: "As a software developer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward. With your technical expertise you will manage project priorities, deadlines, and deliverables. You will design, develop, test, deploy, maintain, and enhance software solutions.",
      salary: "120k/yr",
      location: "Boston"
    },
    {
      name: "Software Engineer",
      company: "Meta",
      description: "We are the teams who create all of Facebook’s product used by more than 1.5 billion people around the world. Want to build new features and improve existing products like Commerce, Ads, Video, Groups, News Feed, Search, and more? Want to solve unique, large scale, highly complex technical problems? Facebook is seeking experienced full-stack software engineers to join our product teams. You can help build products that help us connect the next billion people, create new features that have billions of interactions per day, and be a part of our team",
      salary: "140k/yr",
      location: "California"
    },
    {
      name: "Senior Software Engineer",
      company: "Amazon",
      description: "A day in the life As a Software Developer within Alexa AI's Web-Based Q&A team, you help us to deliver on our mission to build, operate and scale our highly distributed services and machine learning models. You work with native AWS to enable our large customer base across the world to interact with Alexa devices. You partner with stakeholders and dive deep into an ambiguous problem space to design and deliver innovative solutions with direct customer impact.",
      salary: "130k/yr",
      location: "Seattle"
    }
  ];

  var cardStyle = {
    margin: "80px",
    padding: 0
  };

  var cardBody = {
    color:"blue"
  };

  return (
    <div>
      <br />
      <h1 className="text-center">JOBS</h1>'
      <br />
      <Card className="text-center" style={cardStyle}>
        <Card.Header>Featured Jobs for You</Card.Header>
        <Card.Body>
          <Card.Title>Software Engineer Intern</Card.Title>
          <Card.Text>
            You’ll work alongside the best and the brightest engineering talent in the industry. We have opportunities in a wide range of areas including development, design, search, platform, test, quality, big data, front end and back end. As a core participant of your team, you’ll estimate engineering efforts, design your changes, implement and test your changes, push to live, and triage production issues. You need to be dynamic, collaborative, and curious as we build new experiences, improve existing products, and develop distributed systems powering the world’s largest e-commerce and payments websites at a scale only a few companies can match.
          </Card.Text>
          <Button variant="primary">Apply Now</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Job Posted: 2 days ago</Card.Footer>
      </Card>
      <br /><br /><br />
      <h2>Recent Jobs:</h2>
      <Row xs={1} md={2} className="g-4" style={cardStyle}>
        {jobsList.map((jobsList) => (
          <Col>
            <Card border="success" style={cardBody}>
              <Card.Img variant="top" src={JobPosting} />
              <Card.Body>
                <Card.Title>{jobsList.name} - {jobsList.company}</Card.Title>
                <Card.Text>
                  {jobsList.company}
                </Card.Text>
                <Card.Text>
                  {jobsList.description}
                </Card.Text>
                <Button variant="primary" href='https://www.linkedin.com'>Apply Now</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <Cards id='Jobs'></Cards>
    </div>
  )
}

export default Jobs;