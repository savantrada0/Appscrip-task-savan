import styles from "./page.module.css";
import MainSection from "./components/mainsection/MainSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection />
    </main>
  );
}
