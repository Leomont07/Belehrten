import Header from '../components/Nav/header';
import NewPassword from '../components/Restore/newPassword';
import IllustrationImage from '../components/Login/ilustration';
import Footer from '../components/Nav/footer';

const UpdatePassword = () => {
  return (
    <main className="flex overflow-hidden flex-col pb-20 bg-white" style={{ padding: '0px 0px 0px' }}>

      <Header />
      <section className="self-center mt-20 ml-7 w-full max-w-[978px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <NewPassword />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <IllustrationImage />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default UpdatePassword;
