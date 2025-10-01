
import './App.css'
import ControlledField from './components/ControlledField/ControlledField'
import FormAction from './components/FormAction/FormAction'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledForm from './components/UnControlledForm/UnControlledForm'

function App() {
 

  return (
    <>
      <h2>Explore React Form</h2>
      <SimpleForm></SimpleForm>
      <h2>Form Action</h2>
      <FormAction></FormAction>
      <h2>Controlled Form</h2>
      <ControlledField></ControlledField>
      <h2>UnControlled Form</h2>
      <UnControlledForm></UnControlledForm>
    </>
  )
}

export default App
