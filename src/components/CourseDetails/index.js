import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import Failure from './Failure';

const CourseDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [courseDetails, setCourseDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${courseDetailsApiUrl}/${id}`)
      .then((response) => {
        setCourseDetails(response.data.course);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

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

  // Render course details here
};

export default CourseDetails