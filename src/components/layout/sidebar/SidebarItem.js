import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PathContains = (pathname, compare) => {};

const SidebarItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();
  const { name, path, src, alt, classNames } = props;

  useEffect(() => {
    if (pathname.includes(path)) {
      return setIsActive(true);
    }
    if (isActive) setIsActive(false);
  }, [pathname, name]);

  return (
    <Link to={path} className={classNames["sidebar-link"]}>
      <div
        className={`${classNames["sidebar-item"]} ${
          isActive ? classNames.active : ""
        }`}
      >
        <img src={src} alt={alt} />
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
