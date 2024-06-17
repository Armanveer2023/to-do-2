"use client";

import { useState } from 'react';
import ToDoList from '././components/ToDoList';

export default function Home() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <div>
      <h1>My To-Do List</h1>
      <ToDoList tasks={tasks} />
    </div>
  );
}
