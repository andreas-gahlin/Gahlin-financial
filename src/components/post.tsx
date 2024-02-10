import React from 'react';
import { Link } from 'gatsby';
import type { PageProps } from "gatsby"
import { Card, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';
  
interface Data {
    title: string
    description: string 
    date: Date
    excerpt: string
    path: string
}
// <Link to={path} className='btn btn-outline-primary float-right'>Read more</Link>
const Post: React.FC<Data> = ({ title, description, date, excerpt }) => {

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardSubtitle>
                    <span className='text-info'>{description}</span>
                    <span className='text-info'>{date.getDate()}</span>
                </CardSubtitle>
                <CardText>
                    {excerpt}
                </CardText>

            </CardBody>
        </Card>
    );
}

export default Post;