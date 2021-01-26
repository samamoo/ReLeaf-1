import React from 'react'
import "./SidePanel.scss";

const SidePanel = (props) => {
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="https://placeimg.com/640/640/people"
          alt="Interview Scheduler"
        />
        <p>{props.goal}</p>
        <p> {props.users[0].first_name}</p>
        <nav className="sidebar__menu">

        </nav>
      </section>
      <section className="schedule">

      </section>
    </main>
  )
}

export default SidePanel
