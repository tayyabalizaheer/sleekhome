import './assets/style.css';
import Header from './components/Header';
import HowWeAre from './components/HowWeAre';
import Main from './components/Main';
import Process from './components/Process';
import KnowMore from './components/KnowMore';
import Tenant from './components/Tenant';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Partner from './components/Partner';
import Footer from './components/Footer';
function Home() {
  return (
    <div>
      <Header />
      <Main />
      <HowWeAre />
      <Process />
      <KnowMore />
      <Tenant />
      <AboutUs />
      <ContactUs />
      <Partner />
      <Footer />
    </div>
  );
}

export default Home;
