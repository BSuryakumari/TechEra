import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import Failure from './Failure';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(coursesApiUrl)
      .then((response) => {
        setCourses(response.data.courses);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div data-testid="loader">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <Failure retry={() => window.location.reload()} />;
  }

  // Render courses here
};

export default Home
