
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


    const changeTheGPA = (activeStatus) => {
        if (activeStatus === true) {
            changeGpa(calculate(props.courses));
        }
    };

    if (props.change === true) {
        changeActive(props.status);
    } else {
        return (
            <div class="cont__main__cmb__cpt">
                <div class="cont__main__cmb__cpt__btn" onClick={() => {
                    if (props.status === true) {
                        changeTheGPA(active)
                    }
                    }}>
                    Calculate
                </div>
                <div class="cont__main__cmb__cpt__rst">
                    Your CGPA is <br/> <b class="bold">{gpa}</b>
                    {JSON.stringify(props.courses)}
                </div>
            </div>
        );
    }
}

export default CalcButton;