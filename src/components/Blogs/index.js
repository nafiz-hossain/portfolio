import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, ToggleButtonGroup, ToggleButton, Divider, CardContainer } from './BlogsStyle';
import { blogs } from '../../data/constants';
import BlogCard from '../Cards/BlogCard'; // Assuming you have a BlogCard component

const Blogs = ({ openModal, setOpenModal }) => {
  const [categoryFilter, setCategoryFilter] = useState('all');

  return (
    <Container id="blogs">
      <Wrapper>
        <Title>Blogs</Title>
        <Desc>
          I have worked on a wide range of blogs. From web apps to android apps. Here are some of my blogs.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={categoryFilter === 'all'} onClick={() => setCategoryFilter('all')}>All</ToggleButton>
          <Divider />
          <ToggleButton active={categoryFilter === 'office'} onClick={() => setCategoryFilter('office')}>Industrial Projects</ToggleButton>
          <Divider />
          <ToggleButton active={categoryFilter === 'personal'} onClick={() => setCategoryFilter('personal')}>Personal Projects</ToggleButton>
          {/* Add more ToggleButton for other categories if needed */}
        </ToggleButtonGroup>
        <CardContainer>
          {blogs
            .filter(blog => categoryFilter === 'all' || blog.category === categoryFilter)
            .map(blog => (
              <BlogCard key={blog.id} blog={blog} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Blogs;
