import Course from './Course';
import { useState } from 'react';
import CalcButton from './CalcButton.jsx';



function CoursesForm() {
    const [myCourses, changeMyCourses] = useState([]);
    const [errorStrs, changeErrorStrs] = useState([]);
    //const [noOfCourses, changeNoOfCourses] = useState(0);
    function AddCourse() {
        const addCourse = () => {
            changeMyCourses([...myCourses, {code: "", units: "0", grade: "0"}]);
            //changeNoOfCourses(noOfCourses + 1);
        };
        return (
            <div class="cont__main__cmb__maj__sbar__btn" onClick={addCourse}>
                +
            </div>
        );
    }
    function RemCourse() {
        const remCourse = () => {
            if (myCourses.length > 0) {
                changeMyCourses(myCourses.slice(0, -1));
                //changeNoOfCourses(noOfCourses - 1);
            }
        };
        return (
            <div class="cont__main__cmb__maj__sbar__btn" onClick={remCourse}>
                -
            </div>
        );
    }
    const changeCourseInfo = (num, newCourse) => {
        let updCourses = [...myCourses];
        for (const attr in newCourse) {
            updCourses[num - 1][attr] = newCourse[attr];
        }
        changeMyCourses(updCourses);
    };
    const changeErrorStrsVar = (num, err) => {
        const prevErrorStrs = [...errorStrs];
        prevErrorStrs[num - 1] = err;
        changeErrorStrs(prevErrorStrs);
    };
/*
    if (noOfCourses < 0) {
        noOfCourses = 0;
    }
*/
    return (
        <div class="cont__main__cmb">
            <div class="cont__main__cmb__maj">
                <div class="cont__main__cmb__maj__sbar">
                    <AddCourse />
                    <RemCourse />
                </div>
                <form class="cont__main__cmb__maj__crs">
                    <div class="cont__main__cmb__maj__crsdiv">
                        {myCourses.map((c, i) => {return <Course num={i + 1} errStrs={errorStrs} func={changeCourseInfo} func2={changeErrorStrsVar}/>})}
                    </div>
                </form>
            </div>
            <CalcButton courses={myCourses} change={false} status={true}/>
        </div>
    );
}

export default CoursesForm;
