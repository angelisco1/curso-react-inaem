import { Link } from "react-router-dom"
import Meme from "./Meme"
import { Link as ChakraLink, Button } from "@chakra-ui/react"
import { HiHeart } from "react-icons/hi"

const MemeItem = ({meme, handleLikes}) => {
  const { id, likes } = meme

  return (
    <div style={{textAlign: 'center'}}>
      <Meme meme={meme} />
      <Button type="button" onClick={() => handleLikes(id, likes)}><HiHeart /> {likes} + 1</Button>
      <ChakraLink asChild>
        <Link to={`/meme/${id}`}>Ver + info</Link>
      </ChakraLink>
    </div>
  )
}

export default MemeItem