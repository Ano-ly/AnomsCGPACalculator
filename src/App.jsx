import './App.css';
import MyButton from './MyButton.jsx';
import Courses from './Courses.jsx';
import CalcButton from './CalcButton.jsx';
import Result from './Result.jsx';
import { useState } from 'react';


function App() {
  let [noOfCourses, changeNoOfCourses] = useState(0);
  if (noOfCourses < 0) {
    noOfCourses = 0;
  }
  function AddCourse() {
    return (
      <div class="cont__main__maj__sbar__btn" onClick={() => changeNoOfCourses(noOfCourses + 1)}>
          +
      </div>
    );
  }
  function RemCourse() {
    return (
      <div class="cont__main__maj__sbar__btn" onClick={() => changeNoOfCourses(noOfCourses - 1)}>
          -
      </div>
    );
  }
  return (
    <div class="cont">
      <div class="cont__main">
        <div class="cont__main__dec"> 
          <div class="cont__main__dec__col cont__main__dec__col--col1">
            .
          </div>
          <div class="cont__main__dec__col cont__main__dec__col--col2">
            
          </div>
          <div class="cont__main__dec__col cont__main__dec__col--col1">
            
          </div>
          <div class="cont__main__dec__col cont__main__dec__col--col2">
            
          </div>
        </div>
        <div class="cont__main__itr">
          Calculate your GPA...
        </div>
        <div class="cont__main__maj">
          <div class="cont__main__maj__sbar">
            <AddCourse />
            <RemCourse />
          </div>
          <Courses num={noOfCourses}/>
        </div>
        <div class="cont__main__cpt">
          <CalcButton />
        </div>
        <Result />
      </div>
      <div class="cont__lgo">
        <div class="cont__lgo__img">
          Anom's<br/>CGPA Calculator
        </div>
      </div>
    </div>
  );
}

export default App;
