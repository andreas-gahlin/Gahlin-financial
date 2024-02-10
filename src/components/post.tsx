import React from 'react';
import { Link } from 'gatsby';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
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
    <Card className="blog-card bg-light text-dark border-0 shadow mb-4">
      <Image fluid={fluid} />
      <CardBody>
        <CardTitle className="blog-card-title mb-3">{title}</CardTitle>
        <CardSubtitle className="blog-card-subtitle text-muted mb-3">
          <span className='text-dark'>{date}</span>
          <span className='text-dark'>{description}</span>
        </CardSubtitle>
        <CardText className="blog-card-description mb-3">{body}</CardText>
        <Link to={path} className="btn btn-primary btn-sm">Read more</Link>
      </CardBody>
    </Card>
  );
}

export default Post;
