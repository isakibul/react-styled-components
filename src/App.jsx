import './App.css';
import styled from 'styled-components';

const fontSizes = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.2rem',
};

const BaseButton = styled.button`
    border: none;
    outline: none;
    background: ${(props) => (props.dark ? '#dddddd' : '#232323')};
    background: ${(props) => (props.dark ? '#232323' : '#dddddd')};
    color: white;
    font-size: 0.9rem;
    letter-spacing: 1px;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 1rem;
    font-size: ${(props) => fontSizes[props.size] ?? fontSizes.md};
`;

const PrimaryButton = styled(BaseButton)`
  background-color: gray;
  color: while;
`

const App = () => {
  return (
    <div className='container'>
      <BaseButton dark>Base Button</BaseButton>
      <PrimaryButton size="sm">Primary Button</PrimaryButton>
    </div>
  )
}

export default App;