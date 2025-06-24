import { Analytics } from '@vercel/analytics/react';
import './App.css';
import CoursesForm from './CoursesForm.jsx';
import ModeButton from './ModeButton';
import { useState } from 'react';

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const [walkthroughStep, setWalkthroughStep] = useState(0);

  const walkthroughSteps = [
    {
      title: "Welcome to Anom's GPA Calculator!",
      content: "Let's take a quick tour to help you get started.",
      position: "center"
    },
    {
      title: "Choose Your Grading System",
      content: "First, select between 4-point (A-E) or 5-point (A-F) grading system based on your institution's requirements.",
      position: "top",
      target: "grading-system"
    },
    {
      title: "Add Your Courses",
      content: "Click the '+' button to add courses. You can add as many courses as you need.",
      position: "top",
      target: "add-course-btn"
    },
    {
      title: "Enter Course Details",
      content: "For each course, enter the course code, number of units, and select your grade from the options",
      position: "center",
      target: "course-form"
    },
    {
      title: "Calculate Your GPA",
      content: "Once you've entered all your courses, click 'Compute' to calculate your GPA.",
      position: "bottom",
      target: "compute-btn"
    },
    {
      title: "Save Your Progress",
      content: "Your course data is automatically saved to your browser. Use the trash button to clear all data if needed.",
      position: "top",
      target: "clear-btn"
    },
    {
      title: "You're All Set!",
      content: "You now know how to use the GPA calculator. Start adding your courses and calculate your GPA!",
      position: "center"
    }
  ];

  const startWalkthrough = () => {
    setShowWalkthrough(true);
    setWalkthroughStep(0);
  };

  const nextStep = () => {
    if (walkthroughStep < walkthroughSteps.length - 1) {
      setWalkthroughStep(walkthroughStep + 1);
    } else {
      setShowWalkthrough(false);
      setWalkthroughStep(0);
    }
  };

  const prevStep = () => {
    if (walkthroughStep > 0) {
      setWalkthroughStep(walkthroughStep - 1);
    }
  };

  const skipWalkthrough = () => {
    setShowWalkthrough(false);
    setWalkthroughStep(0);
  };

  return (
    <div className="cont">
      <Analytics />
      <div className="cont__lgo">
        <div className="cont__lgo__img">
          Anom's GPA Calculator<p className="cont__lgo__img__txt">By <a class="cont__lgo__img__lnk" href='https://www.linkedin.com/in/amarachiuvere'>Amarachi Uvere</a></p>
        </div>
      </div>
      <div className="cont__main">
        <div className="cont__main__dec"> 
          <div className="cont__main__dec__col cont__main__dec__col--col1 cont__main__dec__col--col1--1">
            <ModeButton/>
            <button 
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.6rem', marginLeft: '0rem', color: 'var(--font1-color)'}} 
              aria-label="Help walkthrough"
              onClick={startWalkthrough}
            >
              ❓Help
            </button>
          </div>
          <div className="cont__main__dec__col cont__main__dec__col--col2">
          
          </div>
          <div className="cont__main__dec__col cont__main__dec__col--col1 cont__main__dec__col--col1--one">
            Calculate your GPA
          </div>
        </div>
        <CoursesForm />    
      </div>

      
      {/* Info Modal */}
      {showInfo && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{ background: 'white', padding: '2em', borderRadius: '8px', maxWidth: '90vw', maxHeight: '80vh', boxShadow: '0 2px 16px rgba(0,0,0,0.2)', position: 'relative' }}>
            <button 
              onClick={() => setShowInfo(false)}
              style={{ position: 'absolute', top: '0.5em', right: '0.5em', background: 'none', border: 'none', fontSize: '1.5em', cursor: 'pointer' }}
              aria-label="Close info window"
            >
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

      {/* Walkthrough Overlay */}
      {showWalkthrough && (
        <div className="walkthrough-overlay">
          <div className="walkthrough-backdrop" onClick={skipWalkthrough}></div>
          <div className={`walkthrough-tooltip walkthrough-tooltip--${walkthroughSteps[walkthroughStep].position}`}>
            <div className="walkthrough-content">
              <h3>{walkthroughSteps[walkthroughStep].title}</h3>
              <p>{walkthroughSteps[walkthroughStep].content}</p>
              <div className="walkthrough-navigation">
                <button 
                  onClick={prevStep} 
                  disabled={walkthroughStep === 0}
                  className="walkthrough-btn walkthrough-btn--secondary"
                >
                  Previous
                </button>
                <span className="walkthrough-progress">
                  {walkthroughStep + 1} of {walkthroughSteps.length}
                </span>
                <button 
                  onClick={nextStep}
                  className="walkthrough-btn walkthrough-btn--primary"
                >
                  {walkthroughStep === walkthroughSteps.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
              <button 
                onClick={skipWalkthrough}
                className="walkthrough-skip"
              >
                Skip Tutorial
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
