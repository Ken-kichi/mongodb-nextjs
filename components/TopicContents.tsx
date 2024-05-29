"use client"

import { Topic } from "@/types/types"
import { Box, Button, FormControlLabel, Switch, TextField } from "@mui/material"
import axios from "axios"
import { format } from 'date-fns'
import { useRouter } from "next/navigation"
import { useState } from "react"

const TopicContents = ({topic}:{topic:Topic}) => {
  const {title,description,createdAt,updatedAt,_id,__v} = topic
  const displayCreatedAt = format(new Date(createdAt),"yyyy-MM-dd HH:mm:ss").toString()
  const displayUpdatedAt = format(new Date(updatedAt),"yyyy-MM-dd HH:mm:ss").toString()
  const [newTitle,setNewTitle] = useState<string>(title)
  const [newDescription,setNewDescription] = useState<string>(description)
  const [isEdit,setIsEdit] = useState<boolean>(true)

const router = useRouter()

const onSubmit = async () => {
  try{
    const res = await axios.put(`http://localhost:3000/api/topics/${_id}`,{
      newTitle,
      newDescription,
      __v:__v + 1
    })

    if(res.status === 200){
      router.refresh()
      router.push(`/`)
    }
  }catch(error){
    console.log(error)
  }
}

return (
<>
  <FormControlLabel
    sx={{m:2}}
    control={
      <Switch
      checked={!isEdit}
      onChange={() => setIsEdit(!isEdit)}
      inputProps={{ 'aria-label': 'controlled' }}
      />
    }
    label="編集"
    />
      <form onSubmit={onSubmit}>
      <Box sx={{display:"flex",flexDirection:"column",gap:2 }}>
        <TextField type="text"  disabled={isEdit} label="タイトル" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <TextField type="text"  disabled={isEdit} label="説明" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
        <Box>作成日：{displayCreatedAt}</Box>
        <Box>更新日：{displayUpdatedAt}</Box>
        <Box>バージョン：{topic.__v}</Box>


        <Box display='flex' justifyContent='center'  sx={{px:4,py:1}}>
          <Button type="submit" variant="contained" color="success">更新</Button>
          <Button href={`/`} variant="outlined" color="inherit" sx={{ml:2}}>戻る</Button>
        </Box>

      </Box>
    </form>
  </>

  )
}

export default TopicContents
