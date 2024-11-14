import Header from '../components/Nav/header';
//import Footer from '../components/Nav/footer';
import RegistrationForm from '../components/Registration/registrationForm';
import SideImage from '../components/Registration/sideImage';
import Footer from '../components/Nav/footer';

function RegistrationPage() {
  return (<main className="flex overflow-hidden flex-col pb-20 bg-white" style={{ padding: '0px 0px 0px' }}>

    <Header />
    <div className="mt-10 ml-20 w-full max-w-[1005px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <SideImage />
        <RegistrationForm />
      </div>
    </div>
    <Footer />
  </main>
  );
}

export default RegistrationPage;