import Course from './Course';
import { useState} from 'react';
import CalcButton from './CalcButton.jsx';



function CoursesForm() {
    const [myCourses, changeMyCourses] = useState([{code: "", units: "0", grade: "0"}]);
    // Stores errors of each of the courses
    // const [errorStrs, changeErrorStrs] = useState([]);
    //const [noOfCourses, changeNoOfCourses] = useState(0);
    function AddCourse() {
        const addCourse = () => {
            if (myCourses.length < 999) {
                changeMyCourses([...myCourses, {code: "", units: "0", grade: "0"}]);
            }
        };
        return (
            <div className="cont__main__cmb__maj__sbar__btn" onClick={addCourse}>
                +
            </div>
        );
    }
    function RemCourse() {
        const remCourse = () => {
            if (myCourses.length > 1) {
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
    //Function to update attributes of list of courses 'myCourses'
    const changeCourseInfo = (num, newCourse) => {
        let updCourses = [...myCourses];
        for (const attr in newCourse) {
            updCourses[num - 1][attr] = newCourse[attr];
        }
        changeMyCourses(updCourses);
    };
    // const changeErrorStrsVar = (num, err) => {
    //     const prevErrorStrs = [...errorStrs];
    //     prevErrorStrs[num - 1] = err;
    //     changeErrorStrs(prevErrorStrs);
    // };

    // if (noOfCourses < 0) {
    //     noOfCourses = 0;
    // }

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
                        {myCourses.map((c, i) => {return <Course num={i + 1} func={changeCourseInfo}/>})}
                    </div>
                </form>
            </div>
            <CalcButton courses={myCourses}/>
        </div>
    );
}

export default CoursesForm;
