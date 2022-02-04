import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  const title = "other"
  return (
    <div>
      <h3>{title}</h3>
      <Link href="/">
        <a>トップページへ</a>
      </Link>
    </div>
  )
}