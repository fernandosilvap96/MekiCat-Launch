import React, { Fragment } from 'react';
import styles from './Countdown.module.scss';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className={styles.timer_container}>
        <section className="timer">
          <div className={styles.clock}>
            <section>
              <p>
                {timerDays.toString().length > 1 ? timerDays : `0${timerDays}`}
              </p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>
                {timerHours.toString().length > 1
                  ? timerHours
                  : `0${timerHours}`}
              </p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p>
                {timerMinutes.toString().length > 1
                  ? timerMinutes
                  : `0${timerMinutes}`}
              </p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p>
                {timerSeconds.toString().length > 1
                  ? timerSeconds
                  : `0${timerSeconds}`}
              </p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0,
};

export default Clock;
