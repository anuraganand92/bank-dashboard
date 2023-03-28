
import dayjs from 'dayjs'
import { create } from 'zustand'
import useStorage from '../../hooks/useStorage'
import api from '../api'
import { combine } from 'zustand/middleware'
const { getItem } = useStorage()
const useAccountStore = create(
    combine({
        account_no: '',
        mpin: '',
        startDate: dayjs(new Date()).subtract(1, 'month').toDate(),
        endDate: new Date(),
        Transaction: [{
            description: '',
            date: '',
            credit: 0,
            debit: 0,
            mode: '',
            category: '',
        }]
    },
        (set, get) => ({
            setTransaction: () => {
                api.post("/user/gettrxn/", {
                    "account_no": get().account_no,
                    "mpin": get().mpin,
                    "startDate": get().startDate.getUTCFullYear() + "-" + (get().startDate.getMonth() + 1) + "-" + get().startDate.getDate(),
                    "endDate": get().endDate.getUTCFullYear() + "-" + (get().endDate.getMonth() + 1) + "-" + get().endDate.getDate()

                }, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } }).then((res) => {
                    console.log('res', res)

                    useAccountStore.setState({ Transaction: res.data })

                }).catch(err => console.log('err', err))

            }
        }))

)
useAccountStore.subscribe(console.log)


export default useAccountStore