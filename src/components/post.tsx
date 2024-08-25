import React from 'react';
import { Link } from 'gatsby';
import { Badge, Card, CardBody, CardSubtitle, Col, Row } from 'reactstrap';
import Image from "gatsby-image";
import slugify from 'slugify';

interface Data {
    title: string
    date: string
    authorimage: any
    author: string
    tags: string[]
    path: string
    fluid: any
}

const Post: React.FC<Data> = ({ title, date, authorimage, author, tags, path, fluid }) => {
  return (
    <Link to={`/blogposts/${path}`} className="text-decoration-none">
      <Card className="blog-card" style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
        <Image fluid={fluid} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div className="card-overlay" style={{ position: 'absolute', bottom: '0', left: '0', right: '0', zIndex: 2 }}>
          <CardBody>
            <CardSubtitle className="mb-2 text-white" style={{ fontSize: '1.25rem', fontWeight: 'bold', paddingBottom: '30%' }}>{title}</CardSubtitle>
          </CardBody>
        </div>
        <CardBody>
          <Row>
            <Col xs="12" sm="1"> {/* Adjust the width to control the position */}
              <div style={{ width: '50px', height: '50px', overflow: 'hidden', borderRadius: '50%', margin: '0 auto' }}>
                <Image fluid={authorimage} alt={author} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '50%' }} />
              </div>
            </Col>
            <Col xs="12" sm="11">
              <CardSubtitle className="blog-card-subtitle text-muted mb-2" style={{ paddingLeft: '20px', paddingTop: '20px' }}>by {author}</CardSubtitle>
            </Col>
          </Row>
          <Row>
            <Col xs='12'>
              <CardSubtitle className="blog-card-subtitle text-muted mb-2">{date}</CardSubtitle>
            </Col>
            <Col xs="12">
              {(tags || []).map(tag => (
                <Link to={slugify(tag, { lower: true })}>
                  <Badge>{tag}</Badge>
                </Link>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Link>
  );
}

export default Post;
