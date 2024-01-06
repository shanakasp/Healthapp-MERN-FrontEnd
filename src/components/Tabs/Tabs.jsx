import React from 'react'
import './Tabs.css'
import { Paper, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Centeredtabs = () => {
  const navigate = useNavigate();
  return (
    <Paper className="root">
        <Tabs
            className="tabs"
            label="Questions"
            indicatorColor="primary"
            textColor="primary"
            centered
        >
        <Tab className="tab" label="Questions" onClick={()=>{navigate('/form')}}/>
        <Tab className="tab" label="Preview" onClick={()=>{navigate('/preview')}}/>
      
        </Tabs>
    </Paper>
  )
}

export default Centeredtabs