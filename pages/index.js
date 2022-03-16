import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Head from "next/head";
import Script from 'next/script'
export default function Home() {
  const [user, setUser] = useState("");

  const handleUser = (userData) => {
    setUser(userData);
  };

  return (
    <>
      <Head>
        <title>Task</title>
      

       
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
       </Head>
       <Script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></Script>

        <Script src="like_button.js"></Script>
      <Navbar
        userData={(data) => {
          handleUser(data);
        }}
      />
      <Menu user={user} />
    </>
  );
}
