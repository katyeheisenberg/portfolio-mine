import React from 'react'
import "./skills.scss"
import Frontend from './Frontend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__container container grid">
        <Frontend />
      </div>

    </section>
  )
}

export default Skills