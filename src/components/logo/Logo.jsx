import style from "./logo.module.css";

function Logo() {
  return (
    <>
      <img className={style.logo} src={style.src} alt='Logo'></img>;
    </>
  );
}
export default Logo;
