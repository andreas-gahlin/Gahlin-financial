import React from 'react';
import { Link } from 'gatsby';
import { Badge } from 'reactstrap';
import slugify from 'slugify';

interface SubjectData {
  tag: string;
}

const CustomBadge: React.FC<SubjectData> = ({ tag }) => {
  const customBadgeStyle: React.CSSProperties = {
    backgroundColor: 'white', // Set the background color to white
    color: 'black', // Set the text color to black
    padding: '0.6rem', // Adjust padding as needed
    marginRight: '2px', // Add some spacing between badges
    border: '1px solid black', // Black border
  };

  return (
    
      <Link to={`/${slugify(tag, { lower: true })}`} className="text-decoration-none text-dark">
        <div className='badge' style={{ margin: 0, padding: 0 }}>
        <Badge color="white" style={customBadgeStyle}>{tag}</Badge>
        </div>
      </Link>
    
    
  );
};

export default CustomBadge;