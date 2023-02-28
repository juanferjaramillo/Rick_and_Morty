import { getDefaultNormalizer } from "@testing-library/react";
import React, {useEffect}  from "react";
import { useNavigate } from "react-router-dom";
import style from './form.module.css'
import validate from './validation.js'

const usr_auth = 'juanfer.jaramillo@gmail.com';
const psw_auth = 'juan123';

function Form() {
  const [access, setAccess] = React.useState(false);

  const navigate = useNavigate();  //se asigna para poder usarla dentro de la funcion login
  
  
  const login = (userData) => {
    //setea el estado de login
    // console.log(userData.username);
    // console.log(userData.password);
    if (
      userData.username === usr_auth &&
      userData.password === psw_auth
      ) {
        console.log('ACCESO OK');
        setAccess(true);
        navigate('/home');
      }
    }
    
    //   useEffect(() => {
    //     !access && navigate('/');
    //  }, [access]);

  //si se permite acceso, vaya a home
  // useEffect(useNavigate('/home'), [access]);

  const [userData, setUserData] = React.useState({ 
    username: '', 
    password: '' });

  const [errors, setErrors] = React.useState({
    username: '', 
    password: '' 
  });

  const handleInputChange = (evento) => {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value
    });
    const validar = validate({...userData,[evento.target.name]:evento.target.value});
    //retorna un objeto de errores {username: errors:}
    setErrors(validar);
  };

  return (
    <div>
      <div className={style.frame}>
        <label className={style.title}>ACCESO RESTRINGIDO</label>
        <hr />
        <form 
        className={style.form}
        onSubmit={()=>login(userData)}
        >
          <input 
          classname={style.inputForm} 
          name='username'
          type='text'
          placeholder='usuario'
          value={userData.username}
          onChange={handleInputChange}>
          </input>
          <p className={style.warning}
          >{errors.username}
          </p>

          <br></br>
          <input 
          classname={style.inputForm}
          name='password'
          type='password'
          placeholder='password'
          value={userData.password}
          onChange={handleInputChange}>  
          </input>
          <p className={style.warning}
          >{errors.password}
          </p>
          <br></br>
          <button 
          type='submit' 
          classname={style.submit}>Log in</button>
        </form>
      </div>
    </div>
  );
}
export default Form;