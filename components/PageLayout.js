import React from 'react';
import BlogNavbar from './Navbar';
import { Container } from 'react-bootstrap';

export default function PageLayout({ children, className }) {
  return (
    <div>
      <Container>
        <BlogNavbar />

        <div className={`page-wrapper ${className}`}>{children}</div>

        <footer className='page-footer'>
          <div>
            <a href='#'>courses</a>
            {' | '}
            <a href='#'>github</a>
            {' | '}
            <a href='#'>facebook</a>
          </div>
        </footer>
      </Container>
    </div>
  );
}
