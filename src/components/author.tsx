import React from 'react';
import { Link } from 'gatsby';
import { Card, CardBody, CardTitle } from 'reactstrap'; // Import Card components from reactstrap
import { Badge } from 'reactstrap';
import slugify from 'slugify';

interface AuthorData {
    tag: string
}

const Author: React.FC<AuthorData> = ({ tag }) => {
  return (
    <Link to={`/authors/${slugify(tag, { lower: true })}`} className="text-decoration-none">    
          <Badge color="secondary">{tag}</Badge>
    </Link>
  );
}

export default Author;
