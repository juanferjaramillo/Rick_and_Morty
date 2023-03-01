import style from './e404.module.css'

function E404() {
  return (
    <div className={style.divError}>
      <h1>La página que buscas no existe por aqui. 😳</h1>
      <img className={style.img404}></img>
      <br></br>
      <h3>presiona Home para regresar</h3>
    </div>
  );
}
export default E404;
