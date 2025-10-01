/**
 * There are some ways to get the form data :
 * 
 * 1. e.target.[name of the input field].value; 
 * 
 * 2. use form action and e in the action handler. e.get('name of the input field')
 * 
 * 3. controlled component. one per each field. use state on change of the field. usefull for dynamically hanlde error.
 * 
 * 3.1: handle all controlled field on one stage object
 *      const [formData, setFormData] = useState({
 *              name: '',
 *              email: '',
 *              password: '',
 *              phone: ''
 *          }) 
 * 
 * 4. uncontrolled using useRef(); (to get data after submit)
 * 
 */