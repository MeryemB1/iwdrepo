
import './App.css';
import back from './assets/background.jpg';
import logo from './assets/vita.png';
import avatar from './assets/avatar.png';
import tiret from './assets/tiret.png';
import mockup from './assets/mockup.png';
import easy from './assets/easy.png';
import moc from './assets/mockup2.png';
import secure from './assets/secure.png';
function App() {
  return (
    <div className="App">
      <img src={back} id="back"/>
     <div className="Nav">
      <div className="imglogo">
      <img src={logo} alt="logo" id="logo"/>
      
      </div>
      
      <a>Help</a>
      <a>About Us </a>
      <div>
      <button id="sign">Sign In</button>
      </div>
      
     </div>
     <div className="hero">
     <div className="text-field">
       <h1>We take <span style={{ fontWeight: 'bold' }}>care</span> of your <span style={{ fontWeight: 'bold' }}>health</span> </h1>
         
       <img src={tiret} alt="tiret" id="tiret"/>
       <h3>store your medical file  and restore 
it with just one finger print  </h3>
       <div >
       <button id="start">Start now</button>
       </div>
       
        
    </div>
          <div className="photo">
          <img src={avatar} id="avatar" alt="avatar"/>
          </div>
      </div>
      <div className="About">
        <div >
           <img src={mockup} id="mockup"/>
        </div>
        <div className="description">
           <img src={easy} id="easy"/>
           <h3>
           With our system, you can store and track patients' medical records in a database, making it easy to access their medical history anytime, anywhere. 
           </h3>
        </div>

      </div>
      <div className="About2">
      <div className="description2">
           <img src={secure} id="easy"/>
           <h3>
           Our system also allows for easy updates and additions to each patient's record, ensuring that the information is always current with a fingerprint access.
           </h3>
        </div>
        <div >
           <img src={moc} id="moc"/>
        </div>
       

      </div>
      
    </div>
  );
}

export default App;
