import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Text,
    HStack,
    Button,
  } from '@chakra-ui/react';
  import { BsHeart, BsTriangleFill } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
  
  function ProductCard() {
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
            <Box
              size="10px"
              position="absolute"
              top={3}
              right={3}
            > 
            <BsHeart size={20} color='white' />    
             </Box>
          <Image
            src={'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000197.jpg?ver=21.88'}
            alt={`trial`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box align={'left'}><Text as="b">Wednesday Chicken Bucket</Text></Box>
            
            <HStack >
                <Badge align="left" variant='outline' colorScheme='red' p={1}>
                <BsTriangleFill/>
              </Badge>
              <Text fontSize={'sm'}>Non-veg</Text>
            </HStack>
            <Box align={'left'}><Text as="b">₹628.57</Text></Box>
           <Button variant="solid" colorScheme="red" >Add to Cart <FiShoppingCart/> </Button> 
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductCard;