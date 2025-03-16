import Course from './Course';
import { useState, useRef } from 'react';
import CalcButton from './CalcButton.jsx';
import { useEffect } from 'react';



function CoursesForm() {
    const [myCourses, changeMyCourses] = useState([]);
    const [errorStrs, changeErrorStrs] = useState([]);
    const refToAddVar = useRef(null);
    //const [noOfCourses, changeNoOfCourses] = useState(0);
    function AddCourse() {
        const addCourse = () => {
            if (myCourses.length < 999) {
                changeMyCourses([...myCourses, {code: "", units: "0", grade: "0"}]);
            }
        };
        return (
            <div ref={refToAddVar} className="cont__main__cmb__maj__sbar__btn" onClick={addCourse}>
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
            <div className="cont__main__cmb__maj__sbar__btn" onClick={remCourse}>
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
        <div className="cont__main__cmb">
            <div className="cont__main__cmb__maj">
                <div className="cont__main__cmb__maj__sbar">
                    <AddCourse />
                    <RemCourse />
                    <div className="cont__main__cmb__maj__sbar__cnt">
                        {myCourses.length}
                    </div>
                </div>
                <form className="cont__main__cmb__maj__crs">
                    <div className="cont__main__cmb__maj__crsdiv">
                        {myCourses.map((c, i) => {return <Course num={i + 1} errStrs={errorStrs} func={changeCourseInfo} func2={changeErrorStrsVar} refToAdd={refToAddVar}/>})}
                    </div>
                </form>
            </div>
            <CalcButton courses={myCourses} change={false} status={true}/>
        </div>
    );
}

export default CoursesForm;
