import { createStyles, TextInput } from '@mantine/core'
// import ButtonGroup from './SmallComponents/ButtonGroup'

import { SetStateAction, useState } from 'react'
// import { isNotEmpty, useForm } from '@mantine/form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Heading from '../reusable-components/Heading'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
    minHeight: `100vh`,
    boxSizing: 'border-box',
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    background: `grey`,
  },
  titlebox: {
    // marginBottom:`20px`,
    display: `flex`,
    justifyContent: `center`,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 500,
    margin: `0.8rem`,
    //   paddingBottom:`5px`,
    //   marginBottom:`10px`
  },
  titlebold: {
    fontFamily: 'Montserrat',
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `20px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    paddingBottom: `20px`,
  },

  description: {
    color: `#737373`,
    fontSize: `1rem`,
    padding: `0.5rem`,
    textAlign: `center`,
    marginTop: `10px`,
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    // paddingBottom: '5px',
    width: `600px`,
    color: `#0052B3`,
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #eee`,
  },
  button1: {
    background: '#0062D6',
    borderRadius: '30px',
    width: '150px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '1.25rem',
    padding: '5px 15px',
    textAlign: 'center',
    fontWeight: 400,
    // cursor: 'no-drop',
    '&:hover': {
      background: '#558ac9',
    },
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    // pointerEvents: 'none',

    marginTop: `3rem`,
  },
  inputLabel: {
    color: theme.black,
    position: `absolute`,
    top: `1.5rem`,
    transition: `0.25s ease`,
  },
  inputcontainer: {
    position: `relative`,
    paddingTop: `0.75rem`,
    marginTop: `0 !important`,
  },

  control: {
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
  },
  forminside: {
    maxWidth: `90%`,
    width: `500px`,
    padding: theme.spacing.xl,
    margin: `auto`,
  },

  buttoncontainer: {
    display: `flex`,
    justifyContent: `space-between   `,
    // margin:`1rem`,
    marginTop: `2rem`,
  },
  button: {
    width: `150px`,
    backgroundColor: `#0062D6`,
    borderRadius: `20px`,
  },
  topheading: {
    width: `100%`,
    background: `#DDEDFF`,
    display: `flex`,
    justifyContent: `center`,
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    alignItems: `center`,
  },

  // button1: {
  //   background: '#0062D6',
  //   borderRadius: '30px',
  //   width: '150px',
  //   fontFamily: 'Montserrat',
  //   color: 'white',
  //   fontSize: '1.25rem',
  //   padding: '5px 15px',
  //   textAlign: 'center',
  //   cursor: 'pointer',
  //   fontWeight: 400,
  //   '&:hover': {
  //     background: '#558ac9',
  //   },
  // },

  resndotp: {
    textAlign: `end`,
    cursor: 'pointer',
    color: `#0052B3`,
    ':hover': {
      color: `#68a7f3`,
    },
    ':active': {
      color: `#0052B3`,
    },
  },
}))

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function EnterOTP() {
  const { classes } = useStyles()
  const [otp, setOtp] = useState('')
  const router = useRouter()
  const data = router.query
  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setOtp(event.target.value)
  }
  // const icons = social.map((Icon, index) => (
  //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
  //     <Icon size="1.4rem" stroke={1.5} />
  //   </ActionIcon>
  // ));

  // const router = useRouter()

  // const form = useForm({
  //   initialValues: {
  //     otp: '',
  //   },

  //   validate: {
  //     otp: isNotEmpty('Enter OTP'),
  //   },
  // })

  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <Heading title="Bank Transfer" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Enter OTP</span>
            </div>
          </div>
          <div className={classes.description}>
            We have sent an OTP to your mobile number XXXXXX5728 registered with
            your bank account. Please enter OTP and proceed
          </div>

          <TextInput
            placeholder="OTP"
            type={'number'}
            value={otp}
            onChange={handleChange}
            required
            mt="md"
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              root: classes.inputcontainer,
            }}
          />
          <div className={classes.resndotp}>Resend OTP</div>

          {/* <ButtonGroup
            href1="/BankTransfer/Review"
            href2="/BankTransfer/Success"
          /> */}
          <div className={classes.buttonContainer}>
            <Link href="/bank-transfer/review-payment-details">
              <div className={classes.button1}>Back</div>
            </Link>

            {otp !== '' ? (
              <Link
                href={{
                  pathname: '/bank-transfer/payment-success',
                  query: data,
                }}
              >
                <div className={classes.button1}>Continue</div>
              </Link>
            ) : (
              <div className={classes.button1} style={{ cursor: 'no-drop' }}>
                Continue
              </div>
            )}
          </div>

          {/* <ButtonGroup
            href1="/bank-transfer/review-payment-details"
            href2="/bank-transfer/payment-success"
          /> */}
        </div>
      </div>
    </div>
  )
}