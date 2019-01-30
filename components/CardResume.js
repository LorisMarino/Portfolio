// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import { CardResumeStyled } from './styles/Cards'

export const CardSkills = ({ title, job, date }) => (
  <CardResumeStyled>
    <h3>{title}</h3>
    <strong>{job}</strong>
    <p>{date}</p>
  </CardResumeStyled>
)

export const CardEducation = ({ title, school, date }) => (
  <CardResumeStyled>
    <h3>{title}</h3>
    <strong>{school}</strong>
    <p>{date}</p>
  </CardResumeStyled>
)

CardSkills.propTypes = {
  title: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

CardEducation.propTypes = {
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
