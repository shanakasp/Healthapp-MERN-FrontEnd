import React,{useState,useEffect} from 'react'
import './QuestionForm.css'
import { Accordion, FormControlLabel, Typography,AccordionSummary, AccordionDetails, MenuItem, IconButton, Button } from '@mui/material'
import { CropOriginal } from '@mui/icons-material'
import Select from '@mui/material/Select';
import SubjectIcon from '@mui/icons-material/Subject';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CloseIcon from '@mui/icons-material/Close';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import FilterNoneIcon from '@mui/icons-material/FilterNone'
import {BsTrash} from 'react-icons/bs'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {FcRightUp} from 'react-icons/fc'
import Switch from '@mui/material/Switch';
import ShortTextIcon from '@mui/icons-material/ShortText';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OndeleteIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import axios from 'axios';

const QuestionForm = () => {
    const [questions, setQuestions] = useState([{
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
    }])

    const [documentName, setDocumentName] = useState('Untitled document');
    const [documentDesc, setDocumentDesc] = useState('Form Description');

    const changeQuestion = (text,i) =>{
        var newQuestions = [...questions];
        newQuestions[i].questionText = text;
        setQuestions(newQuestions);
        console.log(newQuestions);
    }

    const addQuestionType = (i,type) =>{
        var qs = [...questions];
        qs[i].questionType = type;
        setQuestions(qs);
    
    }

    const changeOptionValue = (text,i,j) =>{
        var newQuestions = [...questions];
        newQuestions[i].options[j].optionText = text;
        setQuestions(newQuestions);
        console.log(newQuestions[i].options[j].optionText );
    
    }

    const removeOption = (i,j) =>{
        var removeOptionQuestions = [...questions];
        if(removeOptionQuestions[i].options.length > 1){
            removeOptionQuestions[i].options.splice(j,1);
            setQuestions(removeOptionQuestions);
            console.log("removed option");
        }
    }

    const addOption = (i) =>{
        var addnewQuestions = [...questions];
        if(addnewQuestions[i].options.length < 5){
            addnewQuestions[i].options.push({optionText:'option'+(addnewQuestions[i].options.length+1)});
            
            console.log(addnewQuestions);
        }
        else{
            console.log("max options reached");
        }
        setQuestions(addnewQuestions);
    }

    const copyQuestion = (i) =>{
        var copyQuestions = [...questions];
        copyQuestions.splice(i+1,0,copyQuestions[i]);
        setQuestions([...copyQuestions],copyQuestions);
        // expandCloseAll();
        // var copyQuestions = [...questions];
        // var newQuestions = {...copyQuestions[i]};
        // setQuestions(prevState => [...prevState,newQuestions]);
    }

    const deleteQuestion = (i) =>{
        var deleteQuestions = [...questions];
        if(deleteQuestions.length > 1){
            deleteQuestions.splice(i,1);
            setQuestions(deleteQuestions);
        }
    }

    const requiredQuestion = (i) =>{
        var requiredQuestions = [...questions];
        requiredQuestions[i].required = !requiredQuestions[i].required;
        setQuestions(requiredQuestions);
    
    }

    const addMoreQuestionFeild = (i) =>{
        var addMoreQuestions = [...questions];
        addMoreQuestions.push({
            questionText:'Question '+(addMoreQuestions.length),
            questionType:'Radio',
            options:[
                {optionText:'option1'},
            ],
            open:true,
            required:false
        });
        setQuestions(addMoreQuestions);
    
    }

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

        // axios.post(`http://localhost:5000/api/saveQuestions/${id}`,{
        //     "documentName":documentName,    
        //     "documentDesc":documentDesc,
        //     "questions":saveQuestions
        // })
    
        console.log("saved");
    }

function questionUI(){
    return questions.map((ques,i) =>(
                <Accordion expanded={questions[i].open}  className={questions[i].open ? 'add_border' : ""}>
                <div className="add_question_top">
                    {/* <AccordionSummary aria-controls="panel1a-content" id="panel1a-header"  elevation={1} style={{with:'100%'}}>
                        
                        {questions[i].open && (
                            <div className="saved_questions">
                                <Typography style={{fontSize:'15px',fontWeight:'400',letterSpacing:'.1px',lineHeight:'24px',paddingBottom:'8px'}}>
                                    {i+1} . {questions[i].questionText} {questions[i].required && (<span style={{color:'red'}}>*</span>)}</Typography>
                                
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
                        
                    </AccordionSummary> */}
                </div>
                {questions[i].open && (
                <div className="question_boxes">
                <AccordionDetails className='add_question'>
                    <div className="add_question_top">
                        <input type="text" className='question' placeholder='Question' value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value,i)}}/>
                        <CropOriginal  style={{color:'#5f6368'}} />
                        <Select className='select' style={{color:'#5f6368',fontSize:'13px'}}>
                            <MenuItem className='menuitem' id='text' value='text' onClick={()=>{addQuestionType(i,"text")}}><SubjectIcon style={{marginRight:'10px'}} /> Paragraph</MenuItem>
                            <MenuItem className='menuitem' id='checkbox' value='checkbox' onClick={()=>{addQuestionType(i,"Checkbox")}}><CheckBoxIcon style={{marginRight:'10px',color:'#70757a'}} checked /> Checkboxes</MenuItem>
                            <MenuItem className='menuitem' id='radio' value='radio' onClick={()=>{addQuestionType(i,"Radio")}}><RadioButtonCheckedIcon style={{marginRight:'10px',color:'#70757a'}} /> Multiple Choice</MenuItem>
                        </Select>
                    </div>
                    {ques.options.map((op,j) =>(
                        <div className="add_question_body" key={j}>
                            {
                                (ques.questionType !== 'text' ? 
                                <input type={ques.questionType} color='primary' inputProps={{ 'aria-label' :'secondary checkbox'}} 
                                    style={{marginLeft:'10px',marginRight:'10px'}}  /> : 
                                <ShortTextIcon style={{marginRight:'10px'}} />
                                )
                            }
                            <div>
                                <input type='text' className='text_input' placeholder='Option' value={ques.options[j].optionText} onChange={(e)=>{changeOptionValue(e.target.value,i,j)}}/>
                            </div>
                            {/* <CropOriginalIcon style={{color:'#5f6368'}} /> */}
                            
                            <IconButton aria-label='delete'>
                                <CloseIcon onClick={()=>{removeOption(i,j)}} />
                            </IconButton>
                        </div>
                    ))}
                    {(ques.options.length<5 && ques.questionType !== 'text') ?
                        
                        (<div className='add_question_body'>
                            <FormControlLabel  control={
                                (ques.questionType !== 'text') ? 
                                    <input type={ques.questionType} color='primary' inputProps={{ 'aria-label' :'secondary checkbox'}} 
                                    style={{marginLeft:'20px',marginRight:'10px'}}  /> 
                                    : 
                                    <ShortTextIcon style={{marginLeft:'10px',marginRight:'10px'}} />
                            }label={
                                        <div>
                                            <input type='text' className='text_input' placeholder='Add Other' style={{fontSize:'13px',width:'60px'}} />
                                            <Button size='small' style={{textTransform:'none',color:'#4285f4',fontSize:'13px',fontWeight:'600'}} onClick={()=>{addOption(i)}}>Add Option</Button>
                                        </div>
                                    }/>
                                    
                        </div>) : ""
                        
                    }
                        
                    <div className="add_footer">
                    <div className="add_question_bottom_left">
                    <Button size='small' style={{textTransform:'none',color:'#4285f4',fontSize:'13px',fontWeight:'600'}}>
                            <FcRightUp style={{border:'2px solid #4285f4',padding:'2px',marginRight:'8px'}}/>
                            Answer Key
                        </Button>
                    </div>
                    
                    <div className="add_question_bottom">
                        <IconButton aria-label='copy' onClick={()=>{copyQuestion(i)}}>
                            <FilterNoneIcon/>
                        </IconButton>
                        <IconButton aria-label='delete' onClick={()=>{deleteQuestion(i)}}>
                            <BsTrash/>
                        </IconButton>
                        <span style={{color:'#5f6368',fontSize:'13px'}}>Required</span> 
                        <Switch name='checkedA' color='primary' onClick={()=>{requiredQuestion(i)}}/>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
                    </div>
                </AccordionDetails>
                <div className="question_edit">
                    <AddCircleOutlineIcon className="edit" onClick={()=>{addMoreQuestionFeild(i)}}/>
                    <OndeleteIcon className="edit" onClick={()=>{deleteQuestion(i)}}/>
                </div>
            </div>)}
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
                        <input type="text" className="question_form_top_name" placeholder='Untitled document' style={{color:"black"}} value={documentName} onChange={(e)=>{setDocumentName(e.target.value)}}/>
                        <input type="text" className="question_form_top_desc" placeholder='Form Description' value={documentDesc} onChange={(e)=>{setDocumentDesc(e.target.value)}}/>
                    </div>
                </div>
                <div className="question_form_bottom">
                {questionUI()}
                    <Button variant='contained' style={{textTransform:'none',color:'white',backgroundColor:'#4285f4',fontSize:'13px',fontWeight:'600',marginTop:'20px'}} onClick={()=>{saveQuestions(1)}}>Save</Button>
                </div>
            </div>
        </div>
    </div>
)
}

export default QuestionForm