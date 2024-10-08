import { useState } from "react";
import "./UserMenuNavigation.css";
import EditUserReservations from "../../../Pages/UserPanel/EditUserReservations/EditUserReservations";

// interface UserMenuNavigationProps {
//   panel: (component: React.ReactNode) => void;
// }

const UserMenuNavigation = () => {
  const [activeBtn, setActiveBtn] = useState<number | null>(null);
  const panels = [<EditUserReservations key="edit-user-reservations" />];

  const changeActive = (id: number) => {
    setActiveBtn(id === activeBtn ? null : id);
    // props.panel(panels[id]);
  };

  const icons = [
    "https://img.icons8.com/?size=100&id=34225&format=png&color=000000",
  ];

  return (
    <div className="container-fluid whole-container">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light nav_container">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 nav_content">
            <a className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none nav_title">
              <span className="fs-5 d-none d-sm-inline text-dark nav_title_text">
                Opcje panelu
              </span>
            </a>
            <nav
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start nav_menu"
              id="menu"
            >
              <button
                className={`align-middle px-3 d-flex justify-content-between ${
                  activeBtn === 0
                    ? "active btn btn-dark w-100"
                    : "btn btn-light w-100"
                }`}
                onClick={() => changeActive(0)}
                style={{ textAlign: "left" }}
              >
                <img src={icons[0]} alt="icon" className="icon-img" />
                <span style={{ flexGrow: 1 }}>
                  Zarządzaj swoimi rezerwacjami
                </span>
              </button>
            </nav>
          </div>
        </div>
        <div className="col py-3 panel_content">
          <div className="text-center">
            {activeBtn === null ? (
              <h3>Panel użytkownika</h3>
            ) : (
              panels[activeBtn]
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenuNavigation;
