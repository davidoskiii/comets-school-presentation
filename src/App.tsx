import GeneralInfo from './components/GeneralInfo';
import Header from './components/Header';
import Starfield from './components/Starfield';
import { TracingBeam } from './components/TracingBeam';
import './index.css';

function App() {
  return (
    <TracingBeam>
      <div>
        <Starfield
          starCount={1500}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
        />
        <div className="flex items-center justify-center flex-col">
          <Header />
          <GeneralInfo />
        </div>
      </div>
    </TracingBeam>
  );
}

export default App;
