import React, { useEffect, useState, useRef } from 'react';
import { Navigation } from './components/Navigation'
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import { PeoplePage } from './components/PeoplePage';
import { getPeople } from './api';
import { Person } from './types';

export const App = () => {
  const [allPeople, setAllPeople] = useState<Person[]>([]);

  useEffect(() => {
    getPeople()
      .then(setAllPeople)

      .catch(() => {
        // setIsError('Unable to load ');
      });
  }, []);

  console.log('allProple----allProple', allPeople);

  return (
    <>
      <Navigation />

      <div data-cy="app">
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/people" element={<PeoplePage allPeople={allPeople} />} />
        </Routes>
      </div>
    </>
  );
};
