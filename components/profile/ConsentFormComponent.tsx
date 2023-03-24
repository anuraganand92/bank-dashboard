import { Button, createStyles, Radio } from '@mantine/core'
import React from 'react'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({
  heading: {
    width: `100%`,
    height: `10%`,
    padding: `10px`,
    paddingTop: `20px`,
    background: `#DDEDFF`,
    fontSize: `1.3rem`,
    textAlign: `center`,
    borderRadius: ' 0px 30px 0px 0px',
    color: ` #0052B3`,
  },
  form: {
    padding: `30px`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-evenly`,
    height: `90%`,
  },
  formtitle: {
    fontSize: `1rem`,
    fontWeight: 600,
  },
  questioncontainer: {
    padding: `5px`,
    marginTop: '1.8rem',
  },
  question: {
    fontSize: '0.9rem',
    color: `#4D4B4B`,
    fontWeight: 500,
    marginBottom: '8px',
  },
  answer: {
    fontFamily: `Montserrat`,
    fontWeight: 600,
    // lineHeight: `2rem`,
  },
  radio: {
    // width: `20px`,
    // height: `20px`,
    // border: `2px solid #aaa`,
    // borderRadius: '5px',
    // WebkitAppearance: `none`,
    // appearance: `none`,
    // backgroundColor: `#fff`,
    // margin: `0 0.8rem`,
    // ':checked': {
    //   '::before': {
    //     content: `" "`,
    //     width: `14px`,
    //     borderRadius: '2.5px',
    //     height: `14px`,
    //     inset: `0`,
    //     margin: `1.2px`,
    //     background: `black`,
    //   },
    // },
  },
  answercontainer: {
    lineHeight: `1.2rem`,
    fontSize: `0.9rem`,
  },
  control: {
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
    display: `block`,
    margin: `auto 1rem`,
    width: `300px`,
    fontFamily: 'Montserrat',
  },
  button: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    marginTop: 'auto',
  },
  icon: {
    display: `none`,
  },
}))

interface Props {
  id?: any
  accountselected?: any
}
const ConsentFormComponent = ({ id, accountselected }: Props) => {
  const { classes } = useStyles()
  const [data, setData] = useState<string>('1')
  const [transaction, setTransaction] = useState<string>('1')
  // console.log('accountselected :', accountselected)

  return (
    <div key={`${accountselected}`} style={{ height: '100%' }}>
      <div className={classes.heading}>Consent Form ${accountselected}</div>
      <div className={classes.form}>
        <div className={classes.formtitle}>This app would like to:</div>
        <div className={classes.questioncontainer}>
          <div className={classes.question}>Data Permissions:</div>
          <Radio
            checked={data === '1'}
            onChange={(e: any) => setData('1')}
            my={16}
            label={
              <span className={classes.answercontainer}>
                <span className={classes.answer}>Unlimited: </span>
                Permission to collect all transaction data for the purpose of
                providing better financial services.
              </span>
            }
          />
          <Radio
            checked={data === '2'}
            onChange={(e: any) => setData('2')}
            my={16}
            label={
              <span className={classes.answercontainer}>
                <span className={classes.answer}>Limited: </span> Asks for
                permission each time to access transaction data.
              </span>
            }
          />

          <Radio
            checked={data === '3'}
            onChange={(e: any) => setData('3')}
            my={16}
            label={
              <span className={classes.answercontainer}>
                <span className={classes.answer}>None: </span> No permission to
                access transaction data.
              </span>
            }
          />
        </div>
        <hr style={{ margin: `5px auto`, width: `70%` }} />
        <div className={classes.questioncontainer}>
          <div className={classes.question}>Transaction Permissions:</div>
          <Radio
            checked={transaction === '1'}
            onChange={(e: any) => setTransaction('1')}
            label={
              <span className={classes.answercontainer}>
                <span className={classes.answer}>Allow</span> transaction from
                this account
              </span>
            }
            my={16}
          />
          <Radio
            checked={transaction === '2'}
            onChange={(e: any) => setTransaction('2')}
            label={
              <span className={classes.answercontainer}>
                <span className={classes.answer}>Do not allow</span> Transaction
                from this account
              </span>
            }
          />
        </div>
        <div className={classes.button}>
          <Button
            size="lg"
            className={classes.control}
            onClick={() => {
              if (data || transaction) {
                console.log({
                  account: accountselected,
                  data: data,
                  transaction: transaction,
                })
              }
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ConsentFormComponent)