import React,{useState} from 'react'
import './Question.css'
import { Accordion, FormControlLabel, Typography,AccordionSummary, Button } from '@mui/material'
import ShortTextIcon from '@mui/icons-material/ShortText';
import axios from 'axios';

const Question = () => {
    const [questions, setQuestions] = useState([
        {
        questionText:'What is the best country in the world?',
        questionType:'radio',
        options:[
            {optionText:'Sri Lanka'},
            {optionText:'India'},
            {optionText:'America'},
            {optionText:'England'}
        ],
        answer:false,
        answerKey:'',
        point:0,
        open:true,
        required:false
        },
        {
        questionText:'How many countries are there in the world?',
        questionType:'checkbox',
        options:[
            {optionText:'195'},
            {optionText:'196'},
        ],
        answer:false,
        answerKey:'',
        point:0,
        open:true,
        required:true
        },
        {
        questionText:'How many countries are there in the world?',
        questionType:'text',
        options:[
            {optionText:''},
            
        ],
        answer:false,
        answerKey:'',
        point:0,
        open:true,
        required:true
        }
])

    const [documentName, setDocumentName] = useState('Untitled document');
    const [documentDesc, setDocumentDesc] = useState('Form Description');
    const onDragEnd = (result) =>{
        if(!result.destination) {return;}
        var items = [...questions];
        const itemF = reorder(
            items,
            result.source.index,
            result.destination.index
        )
        setQuestions(itemF);
    }

    // const handleExpand = (i) =>{
    //     var expandQuestions = [...questions];
    //     expandQuestions[i].open = !expandQuestions[i].open;
    //     setQuestions(expandQuestions);
    // }

    const reorder = (list,startIndex,endIndex) =>{
        const result = Array.from(list);
        const [removed] = result.splice(startIndex,1);
        result.splice(endIndex,0,removed);
        return result;
    }

    const saveQuestions = (id) =>{
        var saveQuestions = [...questions];
        console.log(saveQuestions);

        axios.post(`http://localhost:5000/api/saveQuestions/${id}`,{
            "documentName":documentName,
            "documentDesc":documentDesc,
            "questions":saveQuestions
        })
    
        console.log("saved");
    }

function questionUI(){
    return questions.map((ques,i) =>(
                <Accordion expanded={questions[i].open}  className={questions[i].open ? 'add_border' : ""}>
                <div className="add_question_top">
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header"  elevation={1} style={{with:'100%'}}>
                        {questions[i].open && (
                        <div className="saved_questions">
                            <Typography style={{fontSize:'15px',fontWeight:'400',letterSpacing:'.1px',lineHeight:'24px',paddingBottom:'8px'}}>
                                {i+1} . {questions[i].questionText}
                                {questions[i].required && (<span style={{color:'red'}}> * </span>)}
                                </Typography>
                            {ques.options.map((op,j) =>(
                                <div key={j}>
                                    <div style={{display:'flex'}}>
                                    {(ques.questionType !== 'text') ? (
                                        <FormControlLabel style={{marginLeft:'5px',marginBottom:'5px'}} value={op.optionText}  control={<input type={ques.questionType} color="primary" style={{marginRight:'3px'}} required={ques.type}/>} label={
                                        <Typography style={{fontFamily:'Roboto,Helvetica,Arial,sans-serif',fontSize:'13px',fontWeight:'400',letterSpacing:'.2px',lineHeight:'20px',color:'#202124'}}>
                                            {ques.options[j].optionText}
                                            </Typography>} />
                                            ) : (
                                            <FormControlLabel style={{marginLeft:'5px',marginBottom:'5px'}} value={op.optionText}  control={<ShortTextIcon style={{marginRight:'3px'}} />} label={
                                        <input type={ques.questionType} color='primary' className='answer_input' inputProps={{ 'aria-label' :'secondary checkbox'}} 
                                        style={{marginLeft:'10px',marginRight:'10px'}}/>}/>)}
                                    </div>
                                </div>
                                ))}
                            </div>
                        )}
                        
                    </AccordionSummary>
                    </div>
                </Accordion>
            ))
        }

return (
    <div>
        <div className="question_form">
            <br /><br />
            <div className="section">
                <div className="question_title_section">
                    <div className="question_form_top">
                        <input type="text" className="question_form_top_name" placeholder='Untitled document' style={{color:"black"}} value={documentName} onClick={(e)=>{setDocumentName(e.target.value)}}/>
                        <input type="text" className="question_form_top_desc" placeholder='Form Description' value={documentDesc} onClick={(e)=>{setDocumentDesc(e.target.value)}}/>
                    </div>
                </div>
                {questionUI()}
                <div className="question_form_bottom">
                    <Button variant='contained' style={{textTransform:'none',color:'white',backgroundColor:'#4285f4',fontSize:'13px',fontWeight:'600',marginTop:'20px'}} onClick={()=>{saveQuestions(1)}}>Save</Button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Question