import React from 'react';

const Content = ({ title, content }) => {
  return (
    <main className="content">
      <h2>{title}</h2>
      {content}
    </main>
  );
};

export default Content;
