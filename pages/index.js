import Head from 'next/head';
import NavBar from '../components/NavBar';
import { table, minifyRecords } from './api/utils/Airtable';

export default function Home(initialTodos) {
  console.log(initialTodos);
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

export async function getServerSideProps(context) {
  try {
    const todos = await table.select({}).firstPage();
    return {
      props: {
        initialTodos: minifyRecords(todos),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        err: 'Something went wrong',
      },
    };
  }
}
