import './App.css';
import Form from './components/form/Form';

function App() {
  return (
    <div className='App-header'>
      <Form
        inputs={[
          { name: 'login', label: 'Login' },
          { name: 'password', label: 'Password', error: 'Required' },
        ]}
      />
    </div>
  );
}

export default App;
