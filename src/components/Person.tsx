import { Person } from '../types';
import cn from 'classnames';
import { Link, Route, Routes } from 'react-router-dom';
type Props = {
  allPeople: Person[];
};

export const PersonData: React.FC<Props> = ({ allPeople }) => {

  return (
    <tbody>
      {allPeople.map(person => {
        const father = allPeople.find(m => m.name === person.fatherName);
        const mother = allPeople.find(f => f.name === person.motherName);

        console.log('father----father', father);

        return (
          <tr data-cy="person" key={person.slug}>
            <td>
              <Link
                to={`#/people/${person.slug}`}
                className={cn({ 'has-text-danger': person.sex === 'f' })}
              >
                {person.name}
              </Link>
            </td>

            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>

            {/* {mather ?
              <td>
                <Link
                  to={`#/people/${mather.slug}`}
                  className={cn({
                    'has-text-danger': allPeople.find(
                      some => some.name === person.motherName,
                    ),
                  })}
                >
                {person.motherName}
              </Link>
              {person.motherName}
            </td>} */}


            {mother ?
              <td>
                <Link to={`#/people/${mother.slug}`} className={cn({ 'has-text-danger': mother.sex === 'f' })}>
                  {person.motherName}
                </Link>
              </td>
              :
              <td>{person.motherName}</td> || <td>'-'</td>
            }


            {father ?
              <td><Link to={`#/people/${father.slug}`}>{person.fatherName}</Link></td>
              :
              <td>{person.fatherName}</td> || '-'
            }









          </tr>
        );
      })}
    </tbody>
  );
};

{
  /*


    <tr data-cy="person">
      <td>
        <a href="#/people/philibert-haverbeke-1907">
          Philibert Haverbeke
        </a>
      </td>

      <td>m</td>
      <td>1907</td>
      <td>1997</td>

      <td>
        <a
          className="has-text-danger"
          href="#/people/emma-de-milliano-1876"
        >
          Emma de Milliano
        </a>
      </td>

      <td>
        <a href="#/people/emile-haverbeke-1877">
          Emile Haverbeke
        </a>
      </td>
    </tr>

    <tr data-cy="person" className="has-background-warning">
      <td>
        <a href="#/people/jan-frans-van-brussel-1761">
          Jan Frans van Brussel
        </a>
      </td>

      <td>m</td>
      <td>1761</td>
      <td>1833</td>
      <td>-</td>

      <td>
        <a href="#/people/jacobus-bernardus-van-brussel-1736">
          Jacobus Bernardus van Brussel
        </a>
      </td>
    </tr>

    <tr data-cy="person">
      <td>
        <a
          className="has-text-danger"
          href="#/people/lievijne-jans-1542"
        >
          Lievijne Jans
        </a>
      </td>

      <td>f</td>
      <td>1542</td>
      <td>1582</td>
      <td>-</td>
      <td>-</td>
    </tr>

    <tr data-cy="person">
      <td>
        <a href="#/people/bernardus-de-causmaecker-1721">
          Bernardus de Causmaecker
        </a>
      </td>

      <td>m</td>
      <td>1721</td>
      <td>1789</td>

      <td>
        <a
          className="has-text-danger"
          href="#/people/livina-haverbeke-1692"
        >
          Livina Haverbeke
        </a>
      </td>

      <td>
        <a href="#/people/lieven-de-causmaecker-1696">
          Lieven de Causmaecker
        </a>
      </td>
    </tr>
  </tbody> */
}

{
  /* )
} */
}
