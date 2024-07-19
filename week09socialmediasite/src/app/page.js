"use client"

import Image from "next/image";

import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";

import './globals.css'

export default function Home() {
  return (
    <div>
    <main>
      <Header></Header>
      <main></main>
      <Footer></Footer>
      
    </main>
    </div>
  );
}

//get the user ID from Auth
//use conditional to check if userID is True redirect to posts page if not redirect user to sign up page