import Course from './Course';
import { useState, useEffect } from 'react';
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
    // Load initial data from localStorage or use default
    const loadCoursesFromStorage = () => {
        try {
            const savedCourses = localStorage.getItem('gpaCalculatorCourses');
            if (savedCourses) {
                return JSON.parse(savedCourses);
            }
        } catch (error) {
            console.error('Error loading courses from localStorage:', error);
        }
        return [{code: "", units: "", grade: ""}];
    };

    const [myCourses, changeMyCourses] = useState(loadCoursesFromStorage);
    const [isSaving, setIsSaving] = useState(false);
    const [gradingSystem, setGradingSystem] = useState('5'); // '5' for 5-point, '4' for 4-point

    // Save courses to localStorage whenever they change
    useEffect(() => {
        setIsSaving(true);
        try {
            localStorage.setItem('gpaCalculatorCourses', JSON.stringify(myCourses));
        } catch (error) {
            console.error('Error saving courses to localStorage:', error);
        }
        // Hide the saving indicator after a short delay
        setTimeout(() => setIsSaving(false), 1000);
    }, [myCourses]);

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

    // Clear all saved data
    const clearData = () => {
        try {
            localStorage.removeItem('gpaCalculatorCourses');
            changeMyCourses([{code: "", units: "", grade: ""}]);
        } catch (error) {
            console.error('Error clearing localStorage:', error);
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
            <div className="cont__main__cmb__grd" style={{display:'flex', alignItems:'center', gap:'1em', marginBottom:'0.5em', color:'var(--font1-color)', fontSize: '0.7rem', marginLeft: '5rem'}}>
                <label style={{}}>Grading System:</label>
                <label className="cont__main__cmb__grd__lbl" style={{display:'flex', alignItems:'center', gap:'0.3em', paddingRight: '0.6rem'}}>
                    <input style={{marginTop: '0rem', appearance: 'none'}} type="radio" name="gradingSystem" value="5" checked={gradingSystem==='5'} onChange={()=>setGradingSystem('5')} /> 5-point
                </label>
                <label className="cont__main__cmb__grd__lbl" style={{display:'flex', alignItems:'center', gap:'0.3em', paddingRight: '0.6rem'}}>
                    <input style={{marginTop: '0rem', appearance: 'none'}} type="radio" name="gradingSystem" value="4" checked={gradingSystem==='4'} onChange={()=>setGradingSystem('4')} /> 4-point
                </label>
            </div>
            <div className="cont__main__cmb__maj">
                <div className="cont__main__cmb__maj__sbar">
                    <AddCourse onAddCourse={addCourse}/>
                    <RemCourse onRemCourse={remCourse}/>
                    <div className="cont__main__cmb__maj__sbar__cnt">
                        {myCourses.length}
                    </div>
                    <div className="cont__main__cmb__maj__sbar__btn cont__main__cmb__maj__sbar__btn--bin" onClick={clearData} title="Clear all data">
                        🗑️
                    </div>
                    {isSaving && (
                        <div className="cont__main__cmb__maj__sbar__saving" title="Saving...">
                            ...
                        </div>
                    )}
                </div>
                <form className="cont__main__cmb__maj__crs">
                    <div className="cont__main__cmb__maj__crsdiv">
                        {myCourses.map((c, i) => {return <Course key={i} num={i + 1} func={changeCourseInfo} initialCode={c.code} initialGrade={c.grade} initialUnits={c.units} gradingSystem={gradingSystem}/>})}
                    </div>
                </form>
            </div>
            <CalcButton courses={myCourses} gradingSystem={gradingSystem}/>
        </div>
    );
}

export default CoursesForm;
