import { Component, useEffect, useState} from 'react';
// import CalcButton from './CalcButton.jsx';


function Course(props) {
    const [code, changeCode] = useState("");
    const [grade, changeGrade] = useState("");
    const [units, changeUnits] = useState("");
    const [error, changeError] = useState("");

    // Display initial error only when course input field component is mounted
    useEffect (() => {
        changeError("Please input course information");
        // props.func2(props.num, `${code}: Please input course information.`);
        return () => {
            changeError("");
            // props.func2(props.num, "");
        }
    
    }, [])

    const handleErrors = (field) => {
        if (field === "code") {
            if (code === "") {
                changeError("Please input course code.");
                // props.func2(props.num, `${code}: Please input course code.`);
            }
        } else if (field === "grade") {
            const grades = ["A", "B", "C", "D", "E", "F"];
            if (grade === "") {
                changeError("Please input a grade.");
                // props.func2(props.num, `${code}: Please input a grade.`);
            } else if (!(grades.includes(grade))) {
                changeError("Invalid grade.");
                // props.func2(props.num, `${code}: Invalid grade.`)
            }
        } else if (field === "units") {
            if (units === "") {
                changeError("Please input number of units.");
                // props.func2(props.num, `${code}: Please input number of units.`);
            } else if (isNaN(units)) {
                changeError("Invalid number.");
                // props.func2(props.num, `${code}: Invalid number.`);
            }
        }
    } 
    

    const handleOnChangeCode  = (event) => {
        props.func(props.num, {code: event.target.value});
        changeCode(event.target.value.toString());
        if (event.target.value !== "") {
            // props.func2("");
            changeError("");
            handleErrors("grade")
            handleErrors("units")
        } else if (event.target.value === "") {
            changeCode("")
            changeError("Please input course code.");
            // props.func2(props.num, `${code}: Please input course code.`);
        }  
        props.func(props.num, {code: event.target.value});
    }
    
    const handleOnChangeUnits = (event) => {
        props.func(props.num, {units: event.target.value});
        let convUnits = parseInt(event.target.value.toString());
        changeUnits(event.target.value.toString())
        if (event.target.value !== "" && !(isNaN(convUnits))) {
            // props.func2(props.num, "");
            changeError("");
            handleErrors("code")
            handleErrors("grade")
        } else if (event.target.value === "") {
            changeUnits("")
            changeError("Please input number of units.");
            // props.func2(props.num, `${code}: Please input number of units.`);
        } else if (isNaN(convUnits)) {
            changeError("Invalid number.");
            // props.func2(props.num, `${code}: Invalid number.`);
        }
    }
    const handleOnChangeGrade = (event) => {
        props.func(props.num, {code: code, grade: event.target.value.toUpperCase(), units: units});
        const grades = ["A", "B", "C", "D", "E", "F"];
        let captGrade = event.target.value.toUpperCase().toString();
        changeGrade(captGrade);
        if (grades.includes(captGrade)) {
            changeGrade(captGrade);
            // props.func2(props.num, "");
            changeError("");
            handleErrors("code")
            handleErrors("units")
        } else if (captGrade === "") {
            changeGrade("")
            changeError("Please input a grade.");
            // props.func2(props.num, `${code}: Please input a grade.`);
        } else if (!(grades.includes(captGrade))) {
            changeError("Invalid grade.");
            // props.func2(props.num, `${code}: Invalid grade.`)
        }
    }
    return (
        <div className="cont__main__cmb__maj__crsdiv__cse">
            <div className="cont__main__cmb__maj__crsdiv__cse__flds">
                <div className="cont__main__cmb__maj__crsdiv__cse__flds__main">
                    <input className="cont__main__cmb__maj__crsdiv__cse__flds__fld staticinfo" type="text" placeholder="Course Code, e.g, MTH 101" name="crs_title" onChange={handleOnChangeCode}/>
                    <input className="cont__main__cmb__maj__crsdiv__cse__flds__fld staticinfo" type="text" placeholder="No of Units, e.g, 3" name="units" onChange={handleOnChangeUnits}/>
                    <input className="cont__main__cmb__maj__crsdiv__cse__flds__fld" type="text" placeholder="Grade, e.g, B" name="grade" onChange={handleOnChangeGrade}/>
                </div>
                <div className="cont__main__cmb__maj__crsdiv__cse__flds__err">
                    <div className="cont__main__cmb__maj__crsdiv__cse__flds__err__smb">
                        {error ? "!" : ""}
                    </div>
                    <div className="cont__main__cmb__maj__crsdiv__cse__flds__err__msg">
                        {error}
                    </div>
                </div>
            </div>      
            <div className="cont__main__cmb__maj__crsdiv__cse__num">
                <div className="cont__main__cmb__maj__crsdiv__cse__num__img">
                    {props.num}
                </div>
            </div>             
        </div>
    );
}
export default Course;
