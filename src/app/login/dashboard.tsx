import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login'); 
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard!</h1>
    </div>
  );
};

export default Dashboard;
