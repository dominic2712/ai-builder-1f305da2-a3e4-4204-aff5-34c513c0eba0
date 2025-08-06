import React from 'react';
import Header from '../components/Header';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold">About AI & Future</h2>
        <p className="mt-4 text-lg">This website provides insights into the advancements in AI and what the future might look like.</p>
      </main>
    </div>
  );
};

export default About;