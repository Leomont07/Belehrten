import Header from '../components/Nav/header';
//import LogoutButton from '../components/General/LogoutButton';
//import ProfileButton from '../components/General/ProfileButton';

function TestStartPage() {
  return (
    <main className="flex overflow-hidden flex-col pb-56 text-white bg-white max-md:pb-24">
      <Header />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28956f29a141ce32a6e4c38d989feee136bf5f515848fc6a0a92649e82e8b1f6?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
        alt="Dashboard illustration"
        className="object-contain self-center mt-32 max-w-full aspect-[1.48] w-[561px] max-md:mt-10"
      />
    </main>
  );
}

export default TestStartPage;