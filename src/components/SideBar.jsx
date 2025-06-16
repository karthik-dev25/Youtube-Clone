import { Link } from "react-router";
import { sideBarList2, sideBarList1, sideBarList3 } from "../utility/helper";

const SideBar = () => {
  return (
    <div>
      <div className="px-2 pb-4 m-2 text-sm border-b-1">
        <ul>
          {sideBarList1.map((item) => {
            return (
              <li key={item.key} className="p-2 mx-2">
                <Link to={item.value === 'Home' ? '/' : `/${item.value.toLocaleLowerCase()}`}>{item.value}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-2 pb-4 m-2 text-sm border-b-1">
        <ul>
          {sideBarList2.map((item) => {
            return (
              <li key={item.key} className="p-2 mx-2">
                <Link to={`/${item.value.toLocaleLowerCase()}`}>{item.value}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-2 pb-4 m-2 text-sm">
        <ul>
          {sideBarList3.map((item) => {
            return (
              <li key={item.key} className="p-2 mx-2">
                <Link to={`/${item.value.toLocaleLowerCase()}`}>{item.value}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
