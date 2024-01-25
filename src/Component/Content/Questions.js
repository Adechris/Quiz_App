import React, {useState, useEffect} from 'react'
import questions from './Datas';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from '../Header/MyNavbar';
const Questions = ({firstName, myDate}) => {
    const [index, setIndex] = useState(0)
    const currentquestion = questions[index]
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(true)
 
    const getNumber = (number) => {
        if (number > questions.length - 1) {
            return 0;
        }   
        if (number < 0) {
            return questions.length - 1
        }
        return number;
    }
    const next = () => {
        let nextIndex = index + 1
        if (nextIndex < questions.length) {
            setIndex(getNumber(nextIndex))
        }
        else {
            setShowScore(false)
        }
    }

    const prev = () => {
        let nextIndex = index - 1

        setIndex(getNumber(nextIndex))
    }

    const refresh = () => {
        setScore(0)
        setShowScore(true)
        setIndex(0)
    }

    const answerOption = (idx) => {
        if (currentquestion.answer === idx) {
            setScore(score + 1)
        }

    };
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    const timer = () =>{
        if(sec >=0){
            setSec(sec +1)
        }
        if(sec==59){
            setSec(0)
            setMin(min +1)
        }
        
        if(min ==5){
            setShowScore(false)
        }
    }
   


    useEffect(()=>{

        setTimeout(()=>{
                timer()
        }, 1000);


    },[timer])




  return (
    <Container className='question'>
        <MyNavbar/>
        <div className='text-start'>
        <p>Welcome, {firstName}</p>
        <h5>Exam Date: {myDate}</h5>
       <h4>{min} : {sec}</h4> 
        </div>
         {showScore ? <div key={currentquestion.id}>
            <p> Question {index + 1} / {questions.length}</p>
            <p>{currentquestion.question}</p>
            {currentquestion.option.map((quest, i) => <p><button className='btn btn-light w-75 shadow-none' 
            onClick={() => answerOption(i)}>{quest}</button></p>)}
            <button className='btn btn-dark shadow-none' onClick={next}>Next</button>
            <button className='btn btn-primary shadow-none mx-2' onClick={prev}>Previous</button></div>
            : <div className='score'>Your score is {score} / {questions.length}
            <div className='mt-5'>
                <button className='btn btn-success w-100' onClick={refresh}>REFRESH</button>
            </div>
            </div>
        }
    </Container>
  )
}

export default Questions