import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import React, { Component } from "react";
// import "./App.css";
import Numeron from "./Numeron.js";
// import Timer from "./Timer.js";
// import History from "./History.js";
class App extends Component {
  render() {
    return (
      <div className="body">
        <Numeron />
        
        <Link href="/other/other">
        <a>ほかのページへ</a>
        </Link>
      </div>
    );
  }
}

export default App;
