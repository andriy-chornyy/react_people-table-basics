import { Person } from '../types';
import { Loader } from './Loader';
import { PersonData } from './Person';

type Props = {
  allPeople: Person[];
}

export const PeoplePage: React.FC<Props> = ({allPeople}) => {

  return (

    <main className="section">
      <div className="container">
        <h1 className="title">Home Page</h1>
        <h1 className="title">People Page</h1>
        <h1 className="title">Page not found</h1>

        <div className="block">
          <div className="box table-container">
            <Loader />

            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>

            <p data-cy="noPeopleMessage">
              There are no people on the server
            </p>

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


              <PersonData allPeople={allPeople}/>

            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
