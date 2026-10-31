import './App.css'
import { useState, useEffect } from "react";
import Users from "./Users";


function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchEmployees = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");

        if (!response.ok) {
          throw new Error("Error al obtener empleados");
        }

        const data = await response.json();

        if (!active) {
          return;
        }

        setEmployees(data.results);
      } catch (error) {
        console.error("Error:", error);

        if (active) {
          setEmployees([]);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchEmployees();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Employee Directory</h1>
        <p>Directorio de empleados</p>
      </header>

      <main>
        {loading ? (
          <p className="loading">Loading employees...</p>
        ) : employees.length === 0 ? (
          <p className="empty-message">
            No employees found.
          </p>
        ) : (
          <div className="employee-grid">
            {employees.map((user) => (
              <Users
                key={user.login.uuid}
                user={user}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;


