import { useState } from 'react';

function CalcButton(props) {
    const [gpa, changeGpa] = useState(0);
    const [active, changeActive] = useState(true);

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
        if (cObj.code !== "" && !(isNaN(Number(cObj.units))) && grades.includes(cObj.grade)) {
            return true;
        } else {
            return false;
        }
    }

    const changeTheGPA = () => {
        let allAreValid = true;
        for (let item of props.courses) {
            if (checkCourse(item) === false) { 
                changeGpa(props.courses);  
                allAreValid = false;
            }
        }
        if (allAreValid === true) {
            changeGpa(calculate(props.courses));
        } else {
            changeGpa("ERR");    
        }
    };

    if (props.change === true) {
        changeActive(props.status);
    } else {
        return (
            <div class="cont__main__cmb__cpt">
                <div class="cont__main__cmb__cpt__btn" onClick={() => {
                        changeTheGPA();
                    }}>
                    Calculate
                </div>
                <div class="cont__main__cmb__cpt__rst">
                    Your CGPA is <br/> <b class="bold">{gpa}</b>
                </div>
            </div>
        );
    }
}

export default CalcButton;