import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const defaultGood = goods.find(good => good === 'Jam');
  const [value, setGood] = useState(defaultGood);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value ? (
          <>
            {value} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setGood(null)}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === value;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${isSelected ? 'is-info' : ''}`}
                    onClick={() => {
                      setGood(isSelected ? null : good);
                    }}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
