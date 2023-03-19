import {
    createStyles,
    Text,
    Title,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    rem,
  } from '@mantine/core';
  import { useState } from 'react';
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: `100vh`,
      boxSizing: 'border-box',
      borderRadius: theme.radius.md,
    //   padding: `calc(${theme.spacing.xl} * 2.5)`,
    //   [theme.fn.smallerThan('sm')]: {
    //     padding: `calc(${theme.spacing.xl} * 1.5)`,
    //   },
      display: `flex`,
      justifyContent:`center`,
      alignItems:`center`,
      background:`white`,
    //   padding:`10px`
    },
    titlebox:{
        marginBottom:`20px`
    },
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.white,
      lineHeight: 1,
      fontWeight:400,
      paddingBottom:`5px`,
      fontSize:`2rem`
    },
    titlebold: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: `#1673E1`,
      lineHeight: 1,
      fontWeight:400,
      fontSize:`3rem`,
      textAlign:`center`
    },
  
    description: {
      color: theme.colors[theme.primaryColor][0],
      maxWidth: rem(300),
        fontSize:`0.8rem`,
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    form: {
      backgroundColor: theme.white,
      padding: theme.spacing.xl,
      width:`400px`,
      color:`#0052B3`,
      display:`flex`,
      margin:`auto`
    },
    sideContainer:{
        
        width:`100%`,
        height:`100%`,
        minHeight:`100vh`,
        padding:`2vh`,
        
    },
    social: {
      color: theme.white,
  
      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },
  
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
      border:'0',
      borderRadius:"0",
      background:'transparent',
      borderBottom:`2px solid #eee`,
      marginTop:`1rem`
    },
  
    inputLabel: {
      color: theme.black,
      position:`absolute`,
      top:`1.5rem`,
      transition:`0.25s ease`
    },
    inputcontainer:{
        position:`relative`,
        paddingTop:`0.75rem`,
        marginTop:`0 !important`,
    },
  
    control: {
      backgroundColor: `#006AE4`,
      borderRadius:`20px`,
      margin:`1rem`,
      width:`300px`
    },
    forminside:{
        maxWidth:`80%`,
        width:`300px`,
        margin:`auto`
    },
    grid:{
        display:`grid`,
        gridTemplateColumns:`40% 60%`,
        width:`100%`,
        height:`100%`,
    },
    sidecontainerinside:{
        background:`#006BE5`,
        width:`100%`,
        padding:'50px',
        paddingTop:`100px`,
        height:`96vh`,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
    },
    buttoncontainer:{
        display:`flex`,
        justifyContent:`space-around`
    },
    button:{
        width:`100px`,
        backgroundColor: `black`,
        borderRadius:`20px`,
    }
  }));
  
//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
  export function LoginSIgnupPage() {
    const { classes } = useStyles();
    const [otp, setOtp] = useState(false)
    // const icons = social.map((Icon, index) => (
    //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
    //     <Icon size="1.4rem" stroke={1.5} />
    //   </ActionIcon>
    // ));
  
    return (
      <div className={classes.wrapper}>
        <div className={classes.grid}>
          
          <div className={classes.form}>
          <div className={classes.forminside}>
            <div className={classes.titlebox}>
            <div className={classes.titlebold}>Shiftbank</div>
            </div>
            
            <TextInput
              placeholder="Mobile Number"
              type={"number"}
              required
              classNames={{ input: classes.input, label: classes.inputLabel,root: classes.inputcontainer }}
            />
            <TextInput
              placeholder="Email"
              type={"email"}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel,root: classes.inputcontainer }}
              required

            />
            
            {
                otp?<TextInput
                placeholder="OTP"
              type={"number"}
                required
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel,root: classes.inputcontainer }}
              />:<></>
            }
            
            <Group position="center" mt="md">
              <Button className={classes.control} onClick={()=>{
                setOtp(true)
              }}>{otp?"Confirm":"Get OTP"}</Button>
            </Group>
            <div className={classes.buttoncontainer}>
            <Button className={classes.button} onClick={()=>{
              }}>Sign Up</Button>
              <Button className={classes.button} onClick={()=>{
              }}>Sign In</Button>
            </div>
            </div>
          </div>
          <div className={classes.sideContainer}>
            <div className={classes.sidecontainerinside}>
            <Title className={classes.title}>A Comprehensive Analysis of your Transactions</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>
  
            {/* <ContactIconsList variant="white" /> */}
  
            {/* <Group mt="xl">{icons}</Group> */}
            </div>
          </div>
        </div>
      </div>
    );
  }