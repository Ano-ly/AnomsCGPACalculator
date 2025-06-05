import { useState} from 'react';

function CalcButton(props) {
    const [gpa, changeGpa] = useState(0);
    const [error, changeErr] = useState(0);
    // Calculate GPA and return to two decimal places
    const calculate = (items) => {
        let unitsTotal = 0;
        let totalPoints = 0;
        let calcGpa = 0;
        const grades = {"A": 5, "B": 4, "C": 3, "D": 2, "E": 1, "F": 0}
        for (let item of items) {
            if (parseInt(item.units) != 0) {
                unitsTotal += parseInt(item.units);
                totalPoints += parseInt(item.units) * grades[item.grade];
            }
        }
        if (unitsTotal !== 0) {
            calcGpa = totalPoints / unitsTotal;     
        }
        return (calcGpa.toFixed(2));
    };

    //Check if all the information supplied is valid for computation
    const checkCourse = (cObj) => {
        const grades = ["A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"];
        if (cObj.code !== "" && !(isNaN(Number(cObj.units))) && cObj.units!== "" && grades.includes(cObj.grade)) {
            return true;
        } else {
            return false;
        }
    }

    // Calculate GPA only if all inputs are Valid
    const changeTheGPA = () => {
        let allAreValid = true;
        for (let item of props.courses) {
            if (checkCourse(item) === false) { 
                allAreValid = false;
                break;
            }
        }
        if (allAreValid === true) {
            changeErr(0);
            changeGpa(calculate(props.courses));
        } else {
            changeGpa("___");    
            changeErr(1);
        }
    };

    return (
        <div className="cont__cpt">
            <div className="cont__cpt__btn" onClick={() => {
                    changeTheGPA();
                }}>
                Compute
            </div>
            <div className="cont__cpt__rst">
            {error ? "Please review information filled." : "Your GPA is"} <br/> <b className="bold">{gpa}</b>
            </div>
        </div>
    );
}

export default CalcButton;
