import React, { Context } from 'react';
import { graphql } from 'gatsby';
import type { Page, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { ImageData } from '../types/types';

interface Data {
  
}

const BlogPostTemplate: React.FC = ({ data }) => {

  return (
    <div>
        I was here :D {JSON.stringify(data, null, 2)}
    </div>
  );
};
 

export default BlogPostTemplate;
