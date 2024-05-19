// components/Header.tsx
"use client";

import React from 'react';
import WalletButton from './WalletButton';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <h1 className="text-xl">Pugs That Fud</h1>
      <WalletButton />
    </header>
  );
};

export default Header;

