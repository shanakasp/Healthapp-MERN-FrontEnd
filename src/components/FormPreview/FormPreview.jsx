import React from 'react'
import './FormPreview.css'
import { IoMdFolderOpen } from "react-icons/io";
import { FiSettings, FiStar } from "react-icons/fi";
import { Button, IconButton } from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { AiOutlineEye } from "react-icons/ai";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Centeredtabs from '../Tabs/Tabs';
import { useNavigate } from 'react-router-dom';
import Question from '../Questions/Question';
import { motion } from 'framer-motion';
import { GrUndo } from "react-icons/gr";
import { GrRedo } from 'react-icons/gr';
const FormPreview = () => {
  const navigate = useNavigate();
  return (
    <>
    <div
      className="form_header">
        <div className="form_header_left">
            <img src=".././images/body.jpg" alt="" className="form_header_image" />
            <input type="text" placeholder="Untitled Form" className="form_name" />
        </div>
        <div className="form_header_right">
            <IconButton 
            onClick={()=>{navigate('/preview')}}
            >
                <AiOutlineEye className="form_header_icon"/>
            </IconButton>
            <IconButton>
                <FiSettings className="form_header_icon"/>
            </IconButton>
            <IconButton onClick={()=>navigate(-1)}>
                <GrUndo className="form_header_icon"/>
            </IconButton>
            <IconButton onClick={()=>navigate(+1)}>
                <GrRedo className="form_header_icon"/>
            </IconButton>
            <Button variant="contained" className="form_header_button">Send</Button>
            <IconButton>
                <MoreVertIcon className="form_header_icon"/>
            </IconButton >
            <IconButton>
                <Avatar className="form_header_icon" style={{height:'30px',width:'30px'}} src='.././images/knee.jpeg'/>
            </IconButton>
        </div>
    </div>
    <div>
    <Centeredtabs/>
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="form_bottom">
        
        <Question/>
    </motion.div>
    </div>
    </>
  )
}

export default FormPreview