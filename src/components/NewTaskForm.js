import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  const handleChange = e => {
    const key = e.target.name
    const value = e.target.value
    setFormData(formData =>  ({
      ...formData,
      [key]:value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(formData)
    setFormData({
      text: "",
      category: "Code"
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {categories.map( category => {
            return category !== "All" && (
              <option key={category} value={category}>
                {category}
              </option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
