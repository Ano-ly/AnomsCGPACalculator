import { Component, useEffect, useState } from 'react';
import CalcButton from './CalcButton.jsx';


function Course(props) {
    const [code, changeCode] = useState("");
    const [grade, changeGrade] = useState("");
    const [units, changeUnits] = useState("");
    const [error, changeError] = useState("");


    /**
    useEffect(() => {
        if (error != "") {
            CalcButton({ change: true, status: false});
        }
    }, [error]);
    **/
    
    const handleOnChangeCode  = (event) => {
        changeCode(event.target.value);
        props.func(props.num, {code: event.target.value, grade: grade, units: units});
    }
    
    const handleOnChangeUnits = (event) => {
        let convUnits = parseInt(event.target.value);
        if (event.target.value === "") {
            changeError("Please input number of units.");
        } else if (isNaN(convUnits)) {
            changeError("Invalid number.");
        } else {
            changeUnits(convUnits)
            changeError("");
            props.func(props.num, {code: code, grade: grade, units: parseInt(event.target.value)});
        } 
    }
    const handleOnChangeGrade = (event) => {
        const grades = ["A", "B", "C", "D", "E", "F"];
        let captGrade = event.target.value.toUpperCase();
        if (grades.includes(captGrade)) {
            changeGrade(captGrade);
            changeError("");
            props.func(props.num, {code: code, grade: event.target.value.toUpperCase(), units: units});
        } else if (captGrade === "") {
            changeError("Please input a grade.");
        } else {
            changeError("Invalid grade.");
        }
    }
    return (
        <div className="cont__main__cmb__maj__crsdiv__cse">
            <div className="cont__main__cmb__maj__crsdiv__cse__num">
                <div className="cont__main__cmb__maj__crsdiv__cse__num__img">
                    {props.num}
                </div>
            </div>
            <div className="cont__main__cmb__maj__crsdiv__cse__flds">
                <input className="cont__main__cmb__maj__crsdiv__cse__flds__fld staticinfo" type="text" placeholder="Course Code" name="crs_title" onChange={handleOnChangeCode}/>
                <input className="cont__main__cmb__maj__crsdiv__cse__flds__fld staticinfo" type="text" placeholder="No of Units" name="units" onChange={handleOnChangeUnits}/>
                <input className="cont__main__cmb__maj__crsdiv__cse__flds__fld" type="text" placeholder="Grade" name="grade" onChange={handleOnChangeGrade}/>
                <div className="cont__main__cmb__maj__crsdiv__cse__flds__err">{error}</div>
            </div>                   
        </div>
    );
}

export default Course;