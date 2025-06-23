import { Analytics } from '@vercel/analytics/react';
import './App.css';
import CoursesForm from './CoursesForm.jsx';
import ModeButton from './ModeButton';
import { useState } from 'react';

function App() {
  const [showInfo, setShowInfo] = useState(false);

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
          <div className="cont__main__dec__col cont__main__dec__col--col1--one">
            Calculate
          </div>
          <div className="cont__main__dec__col cont__main__dec__col--col1--two">
            your GPA
            <button class="cont__main__dec__col__info" aria-label="Info about grading system" onClick={() => setShowInfo(true)}>
              ℹ️
            </button>
          </div>
        </div>
        <CoursesForm />    
      </div>
      <div className="cont__lgo">
        <div className="cont__lgo__img">
          Anom's<br/>GPA Calculator<br/>By <a class="cont__lgo__img__lnk" href='https://www.linkedin.com/in/amarachiuvere'>Amarachi Uvere</a>
        </div>
      </div>
      {showInfo && (
        <div class="moreinfobg">
          <div class="moreinfobg_info" >
            <button class="moreinfobg_info_cls" onClick={() => setShowInfo(false)} aria-label="Close info window">
              ×
            </button>
            <h2>Grading System</h2>
            <div>
              <p><i>5-point grading system</i></p>
              <p>A = 70%- 100% (5)</p>
              <p>B = 60%-69% (4)</p>
              <p>C = 50%-59% (3)</p>
              <p>D = 45%-49% (2)</p>
              <p>E = 40%-44% (1)</p>
              <p>F = 0%-39% (0)</p>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
