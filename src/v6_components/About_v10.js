import React, { useState } from 'react'


export default function About1(props) {
    // const [myStyle,setmyStyle]=useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
    //     }
        
    // )
    
    // const [Btntxt,setBtntxt]=useState("enable dark mode1")

    // let dark=()=>{
    //     if(myStyle.color==="black"){
    //         setmyStyle({
    //             color:'white',
    //         backgroundColor:'black',
    //         border:'1px solid white'
    //         })
    //         setBtntxt("enable light mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //         backgroundColor:'white'
    //         })
    //         setBtntxt("enable dark mode")

    //     }
    // }

    let myStyle={
        'color':props.mode==='dark'?'white':'gray',
        'backgroundColor':props.mode==='dark'?'gray':'white'
    }
    return (
        <div classNameName='container' style={myStyle}>
            {/* <div  classNameName="container"> */}
                <h1 classNameName='my-2'>About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze youe text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>TextUtils gives you a way to analye quickly and efficiently.be it word count,character count.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               <strong>TextUtils is free character counter tool that provide instant character count and coumt statistics for a given text.TextUtils reports the number of words and character.Thus it is suitable for writing text with word/ character limlit.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div classNameName="accordion-body">
                               <strong>This word counter words in any bowesers such as Chrome,FireFox,Internet Explorer,Safari,Opera. It suits to count character in facebook,blog,books,excel document,pdf document,essays,etc</strong>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* <div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button classNameName="btn btn-primary my-5" onClick={dark} type="button">Enable dark mode</button>

                </div>

            </div> */}
            </div>
    )
}
