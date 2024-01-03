import React, { useState } from 'react';
import './style.css';

const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

interface Time {
  day: string;
  start: string;
  end: string;
  secondStart: string;
  secondEnd: string;
}

function App() {
  const [times, setTimes] = useState<Time[]>(
    daysOfWeek.map((day) => ({
      day,
      start: '',
      end: '',
      secondStart: '',
      secondEnd: '',
    }))
  );

  const handleInputChange = (day: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setTimes(
      times.map((time) =>
        time.day === day
          ? {
              ...time,
              [event.target.name]: event.target.value,
            }
          : time
      )
    );
  };

  return (
    <div className="container">
      {times.map((time) => (
        <div className="card" key={time.day}>
          <h2>{time.day}</h2>
          <label className="label-text">
            Aberto das:
            <p>
              <input
                type="time"
                name="start"
                value={time.start}
                onChange={(event) => handleInputChange(time.day, event)}
              />{' '}
              até as
              <input type="time" name="end" value={time.end} onChange={(event) => handleInputChange(time.day, event)} />
            </p>
          </label>
          <label className="label-text">
            e também das:
            <p>
              <input
                type="time"
                name="secondStart"
                value={time.secondStart}
                onChange={(event) => handleInputChange(time.day, event)}
              />{' '}
              até as
              <input
                type="time"
                name="secondEnd"
                value={time.secondEnd}
                onChange={(event) => handleInputChange(time.day, event)}
              />
            </p>
          </label>
        </div>
      ))}
      <div className="optional-text">
        <p>*O segundo horário é opcional</p>
      </div>
    </div>
  );
}

export default App;
