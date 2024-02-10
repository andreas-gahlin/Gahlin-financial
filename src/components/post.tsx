import React from 'react';
import { Link } from 'gatsby';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

interface Data {
    title: string
    date: string
    description: string
    body: string
    path: string
}

const Post: React.FC<Data> = ({ title, date, description, body, path }) => {

  return (
    <Card>
      <CardBody>
        <CardTitle>
          {title}
        </CardTitle>
        <CardSubtitle>
          <span>{date}</span>
        </CardSubtitle>
        <CardText>
          {body}
        </CardText>
        <Link to={path}>Read more</Link>
      </CardBody>
    </Card>
  );
}

export default Post;