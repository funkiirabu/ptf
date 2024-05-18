// components/Header.tsx
import React from 'react';
import { ConnectButton } from '@mysten/dapp-kit';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl">My Sui dApp</h1>
      <ConnectButton />
    </header>
  );
};

export default Header;
