import TopicContents from "@/components/TopicContents"
import axios from "axios"

const getTopicById = async (id:string) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/topics/${id}`)
    if(res.status === 200){
      const data = res.data
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

const TopicDetail = async ({params}:{params:{id:string}}) => {
  const {id} = params
  const {topic} = await getTopicById(id)

  return (
    <TopicContents topic={topic} />
  )
}

export default TopicDetail
