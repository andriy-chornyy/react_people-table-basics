import React, { useEffect, useState, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import { PeoplePage } from './components/PeoplePage';
import { getPeople } from './api';
import { Person } from './types';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './components/HomePage';

export const App = () => {
  const [allPeople, setAllPeople] = useState<Person[]>([]);
  const [hasError, setHasError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPeople()
      .then(data => {
        if (data.length === 0) {
          setIsEmpty(true);
          setHasError(false);
        } else {
          setAllPeople(data);     // сохраняем полученные данные
          setIsEmpty(false);      // сбрасываем флаг пустоты
          setHasError(false);     // сбрасываем ошибку сервера
        }
      })
      .catch(() => {
        setHasError(true);
        setIsEmpty(false);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  console.log('allProple----allProple', allPeople);

  return (
    <>
      <Navigation />
      <div data-cy="app">
        <main className="section">
          <div className="container">
            <Routes>
              <Route path="/home" element={<Navigate to="/" replace />} />

              <Route path="/" element={<HomePage />} />

              <Route
                path="/people"
                element={
                  <PeoplePage
                    allPeople={allPeople}
                    hasError={hasError}
                    isEmpty={isEmpty}
                    isLoading={isLoading}
                  />
                }
              >
                <Route index element={<h1 className="title"> People Page</h1>} />

              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};
