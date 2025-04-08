'use client'

import { useEffect, useState } from 'react';
import RepoCard from '../Components/RepoCard';
import NavBar from '../Components/NavBar';

type Repo = {
  name: string;
  private: boolean;
  description: string;
  language: string;
  updated_at: string;
};

export default function WorkPage() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch("https://api.github.com/users/sooocil/repos", {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}` // optional
        }
      });
      const data = await res.json();
      setRepos(data);
    };

    fetchRepos();
  }, []);

  return (
    <div className="">
      <NavBar/>
      
      <h1 className="text-3xl mt-10 font-bold mb-6">🛠️ My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <RepoCard
            key={repo.name}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            updatedAt={new Date(repo.updated_at).toLocaleDateString()}
            isPrivate={repo.private}
          />
        ))}
      </div>
    </div>
  );
}
