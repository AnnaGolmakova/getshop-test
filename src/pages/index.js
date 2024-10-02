import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Balance from "@/components/balance/Balance";
import Partners from "@/components/partners/Partners";
import Benefits from "@/components/benefits/Benefits";
import ContactUs from "@/components/contactUs/ContactUs";

// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Balance />
        <Partners />
        <Benefits />
        <ContactUs />
      </main>
    </>
  );
}
