import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from "axios"
import { Url } from '../Url'

const Welcome = () => {
    const [num, setNum] = useState(0)
    const [alldata, setAlldata] = useState({})
    const [welcome, setWelcome] = useState(true)
    const [rangeValue, setRangeValue] = useState("0")

    let data = [{question : "How satisfied are you with our products ?", question_no: "question1"},
     {question : "How fair are the prices compared to similar retailers ?", question_no: "question2"},
     {question : "How satisfied are you with the value for money of your purchase ?", question_no: "question3"},
     {question : "On a scale of 1-10 how would you recommend us to your friends and family ?", question_no: "question4"},
     {question : "What could we do to improve our service ?", question_no: "question5"},
    ]

    const formhande = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setAlldata({...alldata, [name]:value}) 
    } 
    const next = ()=>{
        if(num < (data.length - 1)){
            setNum(num + 1)
        } 
    }
    const prev = ()=>{
        if(num > 0){
            setNum(num - 1)
        } 
    } 
    const start = ()=>{
        setWelcome(false)
    }
    const submit = async ()=>{
        console.log(alldata)

        await axios.post(`${Url}`, alldata).then(()=>{ 
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Category Create Success',
                showConfirmButton: false,
                timer: 1500
              }) 
            })
         
        setTimeout(()=>{
            setWelcome(true)
            setAlldata({})
            setRangeValue(0)
            setNum(0)
        }, 5000)
    }
  return (
    <>
    <section>
        <div className="conatiner">
            <div className="d-flex align-items-center justify-content-center min-vh-100 ">
                <div className="card p-3 w-50  bg-blue-light">
                    <div className='mt-3 mb-4'>
                        <h4 className="text-center">Survey</h4>
                    </div>
                    
                    

                {!welcome ? <>
                    <div className="d-flex justify-content-end my-4">
                        <h5>{num + 1}/{data.length}</h5>
                    </div>
                    <h5><span>{num + 1}.</span> {data[num].question}</h5> 
                {
                    (()=>{
                        if((num + 1) === 1){
                            return(
                                <>
                                <div>
                                    <div className="mb-5 mt-3">
                                        <div className="selector">
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques11" name="question1" className="selector-item_radio" value="1" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques11" className="selector-item_label"> 1</label>
                                            </div>
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques12" name="question1" className="selector-item_radio" value="2" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques12" className="selector-item_label"> 2</label>
                                            </div>
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques13" name="question1" className="selector-item_radio" value="3" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques13" className="selector-item_label"> 3</label>
                                            </div>
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques14" name="question1" className="selector-item_radio" value="4" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques14" className="selector-item_label"> 4</label>
                                            </div>
                                            <div className="selecotr-item">
                                                <input type="radio" id="ques15" name="question1" className="selector-item_radio" value="5" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques15" className="selector-item_label"> 5</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        if((num + 1) === 2){
                            return(
                                <>
                                <div>
                                    <div className="mb-5 mt-3">
                                        <div className="selector">
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques21" name="question2" className="selector-item_radio" value="1" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques21" className="selector-item_label"> 1</label>
                                            </div>
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques22" name="question2" className="selector-item_radio" value="2" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques22" className="selector-item_label" > 2</label>
                                            </div>
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques23" name="question2" className="selector-item_radio" value="3" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques23" className="selector-item_label"> 3</label>
                                            </div>
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques24" name="question2" className="selector-item_radio" value="4" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques24" className="selector-item_label"> 4</label>
                                            </div>
                                            <div className="selecotr-item">
                                                <input type="radio" id="ques25" name="question2" className="selector-item_radio" value="5" onClick={e=>formhande(e)} />
                                                <label htmlFor="ques25" className="selector-item_label"> 5</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        if((num + 1) === 3){
                            return(
                                <>
                                <div>
                                    <div className="mb-5 mt-3">
                                        <div className="selector">
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques31" name="question3" className="selector-item_radio" value="1" onChange={e=>formhande(e)} />
                                                <label htmlFor="ques31" className="selector-item_label"> 1</label>
                                            </div>
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques32" name="question3" className="selector-item_radio" value="2" onChange={e=>formhande(e)} />
                                                <label htmlFor="ques32" className="selector-item_label" > 2</label>
                                            </div>
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques33" name="question3" className="selector-item_radio" value="3" onChange={e=>formhande(e)} />
                                                <label htmlFor="ques33" className="selector-item_label"> 3</label>
                                            </div>
                                            <div className="selecotr-item me-2">
                                                <input type="radio" id="ques34" name="question3" className="selector-item_radio" value="4" onChange={e=>formhande(e)} />
                                                <label htmlFor="ques34" className="selector-item_label"> 4</label>
                                            </div>
                                            <div className="selecotr-item">
                                                <input type="radio" id="ques35" name="question3" className="selector-item_radio" value="5" onChange={e=>formhande(e)} />
                                                <label htmlFor="ques35" className="selector-item_label"> 5</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        if((num + 1) === 4){
                            return(
                                <>
                                <div>
                                    <div className="mb-5 mt-3"> 
                                    <label htmlFor="">{rangeValue}</label>
                                    <div className="form-group">
                                    <input type="range" name="question4" min="0" max="10" onChange={(e)=>{setRangeValue(e.target.value); formhande(e)}} value={rangeValue} id="" className='form-range px-5' />
                                    </div>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        if((num + 1) === 5){
                            return(
                                <>
                                <div>
                                    <div className="mb-5 mt-3"> 
                                    <div className="form-group px-5">  
                                    <textarea name="question5" id="" value={alldata.question5} className='w-100 px-1 rounded' onChange={e=>formhande(e)} rows="2"></textarea>
                                    </div>
                                    </div>
                                </div>
                                </>
                            )
                        }
                    })()
                }
                <div >
                    {(num>0)? <button className='btn btn-primary float-start' onClick={prev}>Prev</button> : null} 
                    {(num < (data.length-1))? <button className='btn btn-primary float-end' onClick={next}>Next</button> : <button className='btn btn-success float-end'  onClick={submit}>Submit</button>} 
                </div>
                </> : <>
                <div className="text-center">
                    <h1>Welcome</h1>
                    <button className='btn btn-primary' onClick={start}>Start</button>
                </div>

                </>}

                    
 
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Welcome