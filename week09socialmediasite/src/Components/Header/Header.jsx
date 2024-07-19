import Link from "next/link";
import Image from 'next/image'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


import styles from "./styles.module.css";

const Header = () => {
  return (
    <ClerkProvider>
    <header className={`${styles.header}`}>
      <div>
        <h1 className="title">Chatter</h1>
      </div>
      <nav>
        <ul className={`${styles.ul}`}>
          <li>
            <button className={`${styles.button}`}>
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button className={`${styles.button}`}>
              <Link href="/Posts">Posts</Link>
            </button>
          </li>
          <li>
          <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </nav>
    </header>
    </ClerkProvider>
  );
};

export default Header;
