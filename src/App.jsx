import './App.css';
import './styles.css'
import logo from './logo.svg'
import StyledButton, { AnimatedLogo, FancyButton, SubmitButton } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className='App-logo' alt="logo" /> */}
      <AnimatedLogo src={logo} />
      <div>
        <br />
      </div>
      <StyledButton type='submit'>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant='outline'>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as='a'>Fancy Button</FancyButton>
      <div>
        <br />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}

export default App;
