import React, { useEffect, useState } from 'react';
import { fetchContent } from './api';

const App = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchContent();
        setContent(data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    getData();
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div>
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <div>
        {content.content.json.children.map((block, index) => (
          <p key={index}>{block.children[0].text}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
