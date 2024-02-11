import React from 'react';
import { Link } from 'gatsby';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap';
import Image from "gatsby-image";

interface Data {
    title: string;
    date: string;
    description: string;
    body: string;
    path: string;
    fluid: any;
}

const Post: React.FC<Data> = ({ title, date, description, body, path, fluid }) => {
  return (
    <Row className="justify-content-center">
      <Col md="6">
        <Link to={path} className="text-decoration-none">
          <Card className="blog-card mb-4">
            <div className="thumbnail-container">
              <Image fluid={fluid} className="thumbnail-image" />
            </div>
            <CardBody className="d-flex flex-column align-items-center" style={{ zIndex: 1 }}>
              <div className="text-center">
                <CardTitle className="blog-card-title mb-2" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</CardTitle>
                <CardSubtitle className="blog-card-subtitle text-muted mb-2" style={{ fontSize: '1rem' }}>
                  <span>{date}</span>
                  <span>{description}</span>
                </CardSubtitle>
                <CardText className="blog-card-description mb-2" style={{ fontSize: '1rem' }}>{body}</CardText>
              </div>
            </CardBody>
          </Card>
        </Link>
      </Col>
    </Row>
  );
}

export default Post;
