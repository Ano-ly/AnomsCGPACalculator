import './App.css';
import CoursesForm from './CoursesForm.jsx';

function App() {
  
  return (
    <div className="cont">
      <div className="cont__main">
        <div className="cont__main__dec"> 
          <div className="cont__main__dec__col cont__main__dec__col--col1">
            
          </div>
          <div className="cont__main__dec__col cont__main__dec__col--col2">
            
          </div>
          <div className="cont__main__dec__col cont__main__dec__col--col1 cont__main__dec__col--col1--one">
            Calculate
          </div>
          <div className="cont__main__dec__col cont__main__dec__col--col2 cont__main__dec__col--col1--two">
            your GPA
          </div>
        </div>
        <CoursesForm />    
      </div>
      <div className="cont__lgo">
        <div className="cont__lgo__img">
          Anom's<br/>GPA Calculator
        </div>
      </div>
    </div>
  );
}

export default App;
