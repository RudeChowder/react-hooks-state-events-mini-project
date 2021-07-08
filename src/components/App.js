import React, { useState } from "react";

import { CATEGORIES, TASKS } from "../data";

import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.name)
  }

  const handleFormSubmit = formData => {
    setTasks(tasks => [...tasks, formData])
  }
  
  const handleTaskDelete = deletedTaskText => {
    const newTasksArr = tasks.filter( task => task.text !== deletedTaskText)
    setTasks(newTasksArr)
  }

  const filteredTasks = tasks.filter( task => {
    if (selectedCategory === "All") {
      return true
    } else {
      return selectedCategory === task.category
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleFormSubmit}
      />
      <TaskList 
        tasks={filteredTasks} 
        onTaskDelete={handleTaskDelete}
      />
    </div>
  );
}

export default App;
