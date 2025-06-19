import React from 'react'
import { Link } from 'react-router-dom'
import { HStack, Flex, Link as ChakraLink, Button } from "@chakra-ui/react"

const Header = ({isAuthenticated}) => {
  console.log(isAuthenticated)
  return (
    <Flex h="20" justifyContent="space-between" alignItems="center">
      <ChakraLink asChild>
        <Link to="/">
          <h1>Generador de memes</h1>
        </Link>
      </ChakraLink>

      <div>
        {isAuthenticated && (
          <>
            <ChakraLink asChild>
              <Link to="/crear-meme">Crear meme</Link>
            </ChakraLink>
            <Button type="button">Logout</Button>
          </>
        )}

        {!isAuthenticated && (
          <ChakraLink asChild>
            <Link to="/login">Login</Link>
          </ChakraLink>
        )}

      </div>
    </Flex>
  )
}

export default Header