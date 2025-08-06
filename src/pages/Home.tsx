import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to the AI and Future website</h1>
        <p className="mt-4 text-lg">Explore the amazing world of Artificial Intelligence and what the future holds for us.</p>
      </main>
    </div>
  );
};

export default Home;