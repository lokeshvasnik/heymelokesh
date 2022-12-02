import React from 'react'
import Card from '../components/Cards/Card'
import Nav from '../components/Navbar/Nav'

const Project = () => {

  const data = [
    {
      title: 'Country API',
      des: '  HTML | CSS | BOOTSTRAP | JAVASCRIPT | API ',
    },
    {
      title: 'Portfolio Website',
      des: '  HTML | CSS | BOOTSTRAP | JAVASCRIPT | API ',
    },
    {
      title: 'Emoji Changer',
      des: '  HTML | CSS | BOOTSTRAP | JAVASCRIPT | API ',
    },
    {
      title: 'Card Adviser',
      des: '  HTML | CSS | BOOTSTRAP | JAVASCRIPT | API ',
    },
    {
      title: 'Task Keeper',
      des: '  HTML | CSS | BOOTSTRAP | JAVASCRIPT | API ',
    },
    {
      title: 'College Website Clone',
      des: '  HTML | CSS | BOOTSTRAP | JAVASCRIPT | API ',
    }
  ]

  return (
    <>
    <Nav />   
    <Card data={data}/>
    </>
  )
}

export default Project