import { useRef, useEffect } from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { sidebarDimensions } from "../../../assets/constants/dimensions";

const Sidebar = (props) => {
  const { sidebar } = props.classNames;
  const sidebarRef = useRef();

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarDimensions.push(sidebarRef.current);
    }
  }, []);

  return (
    <div className={sidebar} ref={sidebarRef}>
      {props.items.map((item) => (
        <SidebarItem
          key={item.name}
          src={item.src}
          name={item.name}
          path={item.path}
          classNames={props.classNames}
          pathIndex={props.pathIndex}
        />
      ))}
    </div>
  );
};

export default Sidebar;
