import './App.css';
import Form from './components/form/Form';

function App() {
  return (
    <Form
      inputs={[
        { name: 'login', label: 'Login' },
        { name: 'password', label: 'Password' },
      ]}
    />
  );
}

export default App;
