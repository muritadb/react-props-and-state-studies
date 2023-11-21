import { useState } from 'react';

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

export default function App() {
  const posts = [
    {
      id: 10,
      title: 'Primeiro post',
      content: (
        <>
          <p>Hello World!</p>
          <p>Primeiro post ae galera</p>
        </>
      ),
    },
    {
      id: 20,
      title: 'Como adicionar CSS em React',
      content: (
        <>
          <p>
            A row is created for every separate string listed, and a column is
            created for each cell in the string. Multiple cell tokens with the
            same name within and between rows create a single named grid area
            that spans the corresponding grid cells. Unless those cells form a
            rectangle, the declaration is invalid.
          </p>
        </>
      ),
    },
    {
      id: 30,
      title: 'Lidando com estados',
      content: (
        <>
          <p>
            The final color is the result of multiplying the top and bottom
            colors. A black layer leads to a black final layer, and a white
            layer leads to no change. The effect is like two images printed on
            transparent film overlapping.
          </p>
        </>
      ),
    },
  ];

  const [title, setTitle] = useState(posts[0].title);
  const [content, setContent] = useState(posts[0].content);

  const atualizaConteudo = (title, content) => {
    setTitle(title);
    setContent(content);
  };

  return (
    <div className="container">
      <Header />
      <Sidebar posts={posts} atualizaConteudo={atualizaConteudo} />
      <Content title={title} content={content} />
      <Footer />
    </div>
  );
}
