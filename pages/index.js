import Head from 'next/head';
import NavBar from '../components/NavBar';
import Todo from '../components/Todo';
import { table, minifyRecords } from './api/utils/Airtable';
import { TodosContext } from '../context/TodosContext';
import { useEffect, useContext } from 'react';

export default function Home({ initialTodos }) {
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  return (
    <div>
      <Head>
        <title>Todo App Auth0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <main>
        <h1>Todo App</h1>
        <ul>
          {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </ul>
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
