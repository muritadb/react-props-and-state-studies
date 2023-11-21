import React from 'react';

export default function Sidebar({ posts, atualizaConteudo }) {
  const handleClick = (title, content) => {
    atualizaConteudo(title, content);
  };
  return (
    <>
      <aside className="sidebar">
        {posts.map(({ title, content }, index) => (
          <li key={index}>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleClick(title, content);
              }}
              href={title}
            >
              {title}
            </a>
          </li>
        ))}
      </aside>
    </>
  );
}
