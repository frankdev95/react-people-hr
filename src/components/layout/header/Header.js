import { useSelector } from "react-redux";
import logo from "../../../assets/images/network.png";
import styles from "./Header.module.css";
import Logo from "../../UI/Logo/Logo";

const Header = () => {
  const user = useSelector((state) => state.auth.user.name);
  return (
    <header className={styles.header}>
      <Logo imgSrc={logo} name="HR People" />
      <nav className={styles.nav}>
        <ul>
          <li>{user}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
