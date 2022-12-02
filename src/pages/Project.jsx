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
      title: 'Country API',
      des: '  HTML | CSS | BOOTSTRAP | JAVASCRIPT | API ',
    },
    {
      title: 'Country API',
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