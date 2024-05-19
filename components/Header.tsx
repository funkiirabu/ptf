// components/Header.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ConnectButton } from '@mysten/dapp-kit';

const Header = () => {
  return (
    <div id='header' className='flex items-center justify-between w-full p-4'>
    <Link href='/'>
      <Image
        className='w-20 sm:w-20'
        width={150}
        height={150}
        src='/logo.png'
        alt=''
      />
    </Link>
    <ConnectButton/>
    </div>
  );
};

export default Header;
