import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo App Auth0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <main>
        <h1>Todo App</h1>
      </main>
    </div>
  );
}
