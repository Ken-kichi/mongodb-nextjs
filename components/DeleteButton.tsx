"use client"
import { TopicId } from '@/types/types'
import { Button } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const DeleteButton = ({_id}: TopicId) => {
    const router = useRouter()

const deleteTopic = async () => {
    const confirmed = confirm('削除しますか？')
    if(confirmed) {
       const res = await axios(`http://localhost:3000/api/topics/${_id}`, {
            method: 'DELETE'
        })

        if(res.status === 200) {
            router.refresh()
        }

    }
}
  return <Button onClick={deleteTopic} variant="outlined" color="error" size="small">削除</Button>
}

export default DeleteButton
