import Header from '../components/Nav/header';
import Question from '../components/Test/Question';
import ProgressIndicator from '../components/Test/progressIndicator';
import NavigationButtons from '../components/Test/navigationButtons';

function TestPage() {
  const questions = [
    {
      id: 1,
      text: "¿Lorem ipsum dolor sit amet consectetur?",
      options: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur."
      ]
    }
  ];

  return (
    <main className="flex overflow-hidden flex-col pb-20 bg-white" style={{ padding: '0px 0px 0px' }}>

      <Header />
      <section className="flex flex-col items-start px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="gap-2.5 self-stretch p-2.5 text-4xl font-bold text-black">
          English Test
        </h1>
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
        <div className="flex flex-wrap gap-10 items-center mt-24 ml-5 w-full max-md:mt-10 max-md:max-w-full">
          <ProgressIndicator totalQuestions={16} currentQuestion={1} />
          <NavigationButtons />
        </div>
      </section>
    </main>
  );
}

export default TestPage;