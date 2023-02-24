import style from "./Logo.module.css";
let url = 'https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png'
function Logo() {
  return <img className={style.logo} src={url}></img>;
}
export default Logo;
