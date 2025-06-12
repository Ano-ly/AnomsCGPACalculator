import Course from './Course';
import { useState} from 'react';
import CalcButton from './CalcButton.jsx';

function AddCourse({ onAddCourse }) {
    return (
        <div className="cont__main__cmb__maj__sbar__btn" onClick={onAddCourse}>
            +
        </div>
    );
}
function RemCourse({ onRemCourse }) {
    return (
        <div className="cont__main__cmb__maj__sbar__btn" onClick={onRemCourse}>
            -
        </div>
    );
}

function CoursesForm() {
    const [myCourses, changeMyCourses] = useState([{code: "", units: "", grade: ""}]);
    // Stores errors of each of the courses
    // const [errorStrs, changeErrorStrs] = useState([]);
    //const [noOfCourses, changeNoOfCourses] = useState(0);
    const addCourse = () => {
        if (myCourses.length < 999) {
            changeMyCourses([...myCourses, {code: "", units: "", grade: ""}]);
        }
    };
    const remCourse = () => {
        if (myCourses.length > 1) {
            changeMyCourses(myCourses.slice(0, -1));
            //changeNoOfCourses(noOfCourses - 1);
        }
    };
    //Function to update attributes of list of courses 'myCourses'
    const changeCourseInfo = (num, newCourse) => {
        changeMyCourses(myCourses => {
            const index = num - 1;
            if (index < 0 || index >= myCourses.length) {
                console.warn("Invalid course index received:", num);
                return myCourses; // Return previous state if index is out of bounds
            }
    
            // Create a new array with the specific course object replaced
            return myCourses.map((course, i) => {
                if (i === index) {
                    // Return a new object for the updated course
                    return { ...course, ...newCourse };
                }
                return course;
            });
        });
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
                    <AddCourse onAddCourse={addCourse}/>
                    <RemCourse onRemCourse={remCourse}/>
                    <div className="cont__main__cmb__maj__sbar__cnt">
                        {myCourses.length}
                    </div>
                </div>
                <form className="cont__main__cmb__maj__crs">
                    <div className="cont__main__cmb__maj__crsdiv">
                        {myCourses.map((c, i) => {return <Course key={i} num={i + 1} func={changeCourseInfo} initialCode={c.code} initialGrade={c.grade} initialUnits={c.units}/>})}
                    </div>
                </form>
            </div>
            <CalcButton courses={myCourses}/>
        </div>
    );
}

export default CoursesForm;
