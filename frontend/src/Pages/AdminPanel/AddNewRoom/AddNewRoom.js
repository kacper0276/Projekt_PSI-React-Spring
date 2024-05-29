import useWebsiteTitle from "../../../hooks/useWebsiteTitle";
import styles from "./AddNewRoom.module.css";

export default function AddNewRoom() {
  useWebsiteTitle("Stwórz nową rezerwację");

  return (
    <form className={`${styles.main_container}`}>
      <h2>Stwórz nową ofertę pokoju</h2>
      <label>Cena</label>
      <input type="number" />
      <textarea placeholder="Opis" />
      <label>Dostępność</label>
      <input type="checkbox" />
      <label>Ile osób</label>
      <input type="number" />
      <label>Typ pokoju</label>
      <input type="text" />
      <button>Dodaj pokój</button>
    </form>
  );
}
