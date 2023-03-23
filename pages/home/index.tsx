import type { NextPage,GetServerSideProps } from 'next'
import BankAccount from '../../components/home/add-bank-account/bank_account'
import Payment from '../../components/home/make-payment-section'
import Navbar from '../../components/home/navbar/navbar'
import OfferCardsRow from '../../components/home/offers-referal-section/OfferCardsRow'
import SeeYourAnalysis from '../../components/home/see-your-analysis-section/SeeYourAnalysis'
import { useEffect, useState } from 'react'
import { AddAccountFormPopup } from '../../components/home/add-bank-account/AddAccountFormPopup'
import axios from 'axios'

const Home: NextPage = () => {
  const [bankAccountList, setBankAccountList] = useState<any[]>([
    { account_no: 1297 },
  ])
  const [isAddAccountPopupOpen, setIsAddAccountPopupOpen] =
    useState<boolean>(false)

  const getAccounts = ()=>{
    const accessToken = sessionStorage.getItem('access_token')
    console.log(accessToken);
    
    const response = axios.get('http://localhost:8000/user/getaccounts/', {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          'Content-Type':'application/json'
        }
      }).then((response)=>{
        console.log(response.data.accounts);
        const responseArray = response.data.accounts
        responseArray.map((acc:any)=>{
            let temp = bankAccountList
            temp.push(acc)
            setBankAccountList(temp)
        })
        console.log(bankAccountList);
        
        // sessionStorage.setItem('accounts',response.request.responseText)
        return response
      })

  }

  const getServerSideProps = () =>{
    const accessToken = sessionStorage.getItem('access_token')
    console.log(accessToken);
    
    const response = axios.get('http://localhost:8000/user/getaccounts/', {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          'Content-Type':'application/json'
        }
      }).then((response)=>{
        console.log(response.data.accounts);
        const responseArray = response.data.accounts
        responseArray.map((acc:any)=>{
            let temp = bankAccountList
            temp.push(acc)
            setBankAccountList(temp)
        })
        console.log(bankAccountList);
        
        // sessionStorage.setItem('accounts',response.request.responseText)
        return response
      })
  }
  useEffect(()=>{
    // if(!sessionStorage.getItem('accounts')){
        getAccounts()
    // }
  },[])
  return (
    <>
      <Navbar />
      <SeeYourAnalysis />
      <Payment />
      <BankAccount
        bankAccountList={bankAccountList}
        setIsAddAccountPopupOpen={setIsAddAccountPopupOpen}
      />
      <OfferCardsRow />
      {isAddAccountPopupOpen ? (
        <AddAccountFormPopup
          bankAccountList={bankAccountList}
          isAddAccountPopupOpen={isAddAccountPopupOpen}
          setIsAddAccountPopupOpen={setIsAddAccountPopupOpen}
          setBankAccountList={setBankAccountList}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default Home
