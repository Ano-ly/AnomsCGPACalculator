import { Analytics } from '@vercel/analytics/react';
import './App.css';
import CoursesForm from './CoursesForm.jsx';
import ModeButton from './ModeButton';
function App() {
  
  return (
    <div className="cont">
      <Analytics />
      <div className="cont__main">
        <div className="cont__main__dec"> 
          <div className="cont__main__dec__col cont__main__dec__col--col1">
            <ModeButton/>
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
          Anom's<br/>GPA Calculator<br/>By <a class="cont__lgo__img__lnk" href='https://www.linkedin.com/in/amarachiuvere'>Amarachi Uvere</a>
        </div>
      </div>
    </div>
  );
}

export default App;
