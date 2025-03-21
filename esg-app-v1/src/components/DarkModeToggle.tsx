import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
