import './App.css';
import CoursesForm from './CoursesForm.jsx';




function App() {
  
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
        <CoursesForm />    
      </div>
      <div class="cont__lgo">
        <div class="cont__lgo__img">
          Anom's<br/>GPA Calculator
        </div>
      </div>
    </div>
  );
}

export default App;
