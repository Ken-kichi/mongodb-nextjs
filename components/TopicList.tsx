import DeleteButton from "@/components/DeleteButton"
import { config } from "@/lib/config"
import { Topic } from "@/types/types"
import { Button, Card, CardActions, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'
import axios from "axios"

const getTopics = async () => {
  try {
    const res = await axios.get(`${config.NEXT_URL|| config.NEXT_PUBLIC_URL}/api/topics`)
    if(res.status !== 200){
    throw new Error("トピックスを取得できませんでした")
  }
  return res.data
  } catch (error) {
    console.log("トピックを取得できませんでした: ",error)
    return { topics: [] }
  }
}

const TopicList = async () => {
  const {topics} = await getTopics()
  return (
    <>
    {topics.length === 0 && <p>データがありません</p>}
    {topics.map((topic:Topic) => (
       <Card key={topic._id} sx={{ m: 2}}>
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         {topic.title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
         {topic.description}
         </Typography>
       </CardContent>

       <CardActions>
       <Button href={`/topics/${topic._id}`} variant="contained" color="success" size="small">詳細</Button>
        <DeleteButton _id={topic._id} />
       </CardActions>
     </Card>
    ))}
    </>
  )
}

export default TopicList
