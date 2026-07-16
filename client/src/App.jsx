import { useEffect, useState } from "react";
import axios from "axios";

const API =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

useEffect(() => {
  const load = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  load();
}, []);

  // Add Task
  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await axios.post(API, {
        title,
      });

      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  // Toggle Complete
  const toggleTask = async (task) => {
    try {
      await axios.put(`${API}/${task._id}`, {
        completed: !task.completed,
      });

      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>☁️ CloudTask</h1>
<p>Dockerized Cloud Native Task Manager</p>

      <div className="addTask">
        <input
          type="text"
          placeholder="Enter Task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addTask}>➕ Add Task</button>
      </div>

      <div className="tasks">
        {tasks.length === 0 ? (
          <p>No Tasks Found</p>
        ) : (
          tasks.map((task) => (
            <div className="task" key={task._id}>
              <span
                onClick={() => toggleTask(task)}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {task.title}
              </span>

              <button onClick={() => deleteTask(task._id)}>
                🗑 Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;