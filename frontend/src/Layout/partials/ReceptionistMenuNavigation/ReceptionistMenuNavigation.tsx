import { useState } from "react";
import "./ReceptionistMenuNavigation.css";
import ManageReservations from "../../../Pages/ReceptionistPanel/ManageReservations/ManageReservations";
import { Link } from "react-router-dom";
import CheckPayments from "../../../Pages/ReceptionistPanel/CheckPayments/CheckPayments";

// interface ReceptionistMenuNavigationProps {
//   panel: (component: React.ReactNode) => void;
// }

const ReceptionistMenuNavigation = () => {
  const [activeBtn, setActiveBtn] = useState<number | null>(null);
  const panels = [
    <ManageReservations key="manage-reservations" />,
    <CheckPayments key="check-payments" />,
  ];

  const changeActive = (id: number) => {
    setActiveBtn(id === activeBtn ? null : id);
  };

  const icons = [
    "https://img.icons8.com/?size=100&id=34225&format=png&color=000000",
    "https://img.icons8.com/?size=50&id=24836&format=png&color=000000",
  ];

  return (
    <div className="container-fluid whole-container">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light nav_container">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 nav_content">
            <Link
              to="#"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none nav_title"
            >
              <span className="fs-5 d-none d-sm-inline text-dark nav_title_text">
                Opcje panelu
              </span>
            </Link>
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
                <span style={{ flexGrow: 1 }}>Zarządzaj rezerwacjami</span>
              </button>
              <button
                className={`align-middle px-3 d-flex justify-content-between ${
                  activeBtn === 1
                    ? "active btn btn-dark w-100"
                    : "btn btn-light w-100"
                }`}
                onClick={() => changeActive(1)}
                style={{ textAlign: "left" }}
              >
                <img src={icons[1]} alt="icon" className="icon-img" />
                <span style={{ flexGrow: 1 }}>Sprawdź płatności</span>
              </button>
            </nav>
          </div>
        </div>
        <div className="col py-3 panel_content">
          <div className="text-center">
            {activeBtn === null ? (
              <h3>Panel recepcjonisty</h3>
            ) : (
              panels[activeBtn]
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceptionistMenuNavigation;
