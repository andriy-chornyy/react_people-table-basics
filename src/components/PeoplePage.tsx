import { Outlet } from 'react-router-dom';
import { Person } from '../types';
import { Loader } from './Loader';
import { PersonData } from './Person';

type Props = {
  allPeople: Person[];
  hasError: boolean;
  isEmpty: boolean;
  isLoading: boolean;
};

export const PeoplePage: React.FC<Props> = ({
  allPeople,
  hasError,
  isEmpty,
  isLoading,
}) => {
  return (
    <>
      {/* <div className="section"> */}
        <Outlet />
      {/* </div> */}
      {/* <h1 className="title">People Page</h1> */}

      <div className="block">
        <div className="box table-container">
          {hasError && (
            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>
          )}

          {isEmpty && (
            <p data-cy="noPeopleMessage">There are no people on the server</p>
          )}

          {isLoading ? (
            <Loader />
          ) : (
            <table
              data-cy="peopleTable"
              className="table is-striped is-hoverable is-narrow is-fullwidth"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sex</th>
                  <th>Born</th>
                  <th>Died</th>
                  <th>Mother</th>
                  <th>Father</th>
                </tr>
              </thead>

              <PersonData allPeople={allPeople} />
            </table>
          )}
        </div>
      </div>
    </>
  );
};
