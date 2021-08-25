import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // Remove tours
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  // Empty Page
  if (tours.length === 0) {
    return (
      <main>
        <div className="text-center mt-5">
          <h2>No Left Tours</h2>
          <button onClick={fetchTours} className="btn btn-success">
            Refresh The Page
          </button>
        </div>
      </main>
    );
  }
  // Loading
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // Tours Page
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
export default App;
