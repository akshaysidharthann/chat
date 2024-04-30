import React from 'react'
import { Box,Typography,Card,Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import DescriptionRounded from '@mui/icons-material/DescriptionRounded'
import FormatAlignLeftOutlined from '@mui/icons-material/FormatAlignLeftOutlined';
import ChatRounded from '@mui/icons-material/ChatRounded';
const Homepage = () => {
  const navigate = useNavigate() 
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'row'}}>
   <Box p={2}>
<Typography varient="h4" mb={2} fontWeight="bold"> 
  TEXT generation

</Typography>
<Card onClick={()=> navigate('/summary')}
sx={{boxShadow:2, borderRadius:5,height:190,width:200, '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",cursor:'pointer'}}}
>
<DescriptionRounded sx={{fontSize:'80',color:'primary.main',mt:2,ml:2}}/>
<Stack p={3} pt={0}>
  <Typography fontWeight="bold" variant='h5'>TEXT SUMMARY</Typography>
  <Typography  variant='h6'>Summarize long text into short sentences </Typography>


</Stack>
</Card>
   </Box>


   <Box p={2}>
<Typography varient="h4" mb={2} fontWeight="bold">
  paragraph generation

</Typography>
<Card onClick={()=> navigate('/paragraph')}
sx={{boxShadow:2, borderRadius:5,height:190,width:200, '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",cursor:'pointer'}}}
>
<FormatAlignLeftOutlined sx={{fontSize:'80',color:'primary.main',mt:2,ml:2}}/>
<Stack p={3} pt={0}>
  <Typography fontWeight="bold" variant='h5'>paragraph</Typography>
  <Typography  variant='h6'>Generate paragraph with words</Typography>


</Stack>
</Card>
   </Box>

   <Box p={2}>
<Typography varient="h4" mb={2} fontWeight="bold">
  AI chatBot

</Typography>
<Card onClick={()=> navigate('/chatbot')}
sx={{boxShadow:2, borderRadius:5,height:190,width:200, '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",cursor:'pointer'}}}
>
<ChatRounded   sx={{fontSize:'80',color:'primary.main',mt:2,ml:2}}/>
<Stack p={3} pt={0}>
  <Typography fontWeight="bold" variant='h5'>paragraph</Typography>
  <Typography  variant='h6'>Generate paragraph with words</Typography>


</Stack>
</Card>
   </Box>

   <Box p={2}>
<Typography varient="h4" mb={2} fontWeight="bold">
  javascript converter

</Typography>
<Card onClick={()=> navigate('/js-converter')}
sx={{boxShadow:2, borderRadius:5,height:190,width:200, '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",cursor:'pointer'}}}
>
<ChatRounded   sx={{fontSize:'80',color:'primary.main',mt:2,ml:2}}/>
<Stack p={3} pt={0}>
  <Typography fontWeight="bold" variant='h5'>JS Converter</Typography>
  <Typography  variant='h6'>Translate English to javascript Code</Typography>


</Stack>
</Card>
   </Box>



   <Box p={2}>
<Typography varient="h4" mb={2} fontWeight="bold">
  AI SCIFI Image.

</Typography>
<Card onClick={()=> navigate('/scifi-image')}
sx={{boxShadow:2, borderRadius:5,height:190,width:200, '&:hover':{border:2,boxShadow:0,borderColor:"primary.dark",cursor:'pointer'}}}
>
<ChatRounded   sx={{fontSize:'80',color:'primary.main',mt:2,ml:2}}/>
<Stack p={3} pt={0}>
  <Typography fontWeight="bold" variant='h5'>scifi Image</Typography>
  <Typography  variant='h6'>Generate scifi Image</Typography>


</Stack>
</Card>
   </Box>

   </Box>
   </>
  );
}

export default Homepage