import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import IllustrationImage from './IllustrationImage';

const LoginPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pb-28 bg-white max-md:pb-24">
      <Header />
      <section className="self-center mt-20 ml-7 w-full max-w-[978px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <LoginForm />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <IllustrationImage />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;