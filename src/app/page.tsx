import LandingPage from "./components/intro";
import MainLayout from "./components/layout/main";

export default function Home() {
  return (
    <> 
    <MainLayout>
      <LandingPage title={"Financial infrastructure for the internet"} text={"Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue."}/>
    </MainLayout>
    </>
  );
};
