import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { createStyles, TextInput, Button, Group, rem } from '@mantine/core'
import { UrlObject } from 'url'
const useStyles = createStyles((theme) => ({
  button1: {
    background: '#0062D6',
    borderRadius: '30px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '20px',
    padding: '5px 5px',
    width: '10vw',
    textAlign: 'center',
    fontWeight: 400,
    '&:hover': {
      background: '#558ac9',
    },
    marginRight: '20px',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '35vw',
    marginTop: `3rem`,
  },
}))

export default function ButtonGroup(props: {
  href1: string | UrlObject
  href2: string | UrlObject
}) {
  const { classes } = useStyles()
  return (
    <div className={classes.buttonContainer}>
      <Link href={props.href1}>
        <div className={classes.button1}>Back</div>
      </Link>
      {/* <div className={classes.button1}>Back</div> */}
      <Link href={props.href2}>
        <div className={classes.button1}>Continue</div>
      </Link>
    </div>
  )
}