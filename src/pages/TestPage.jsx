import { useState, useEffect } from 'react';
import Header from '../components/Nav/header';
import Footer from '../components/Nav/footer';
import Question from '../components/Test/Question';
import ProgressIndicator from '../components/Test/progressIndicator';
import { ENDPOINTS } from '../config/endpoint';

function TestPage() {
  const [testId, setTestId] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(16);

  // Recuperar el id_usuario desde el almacenamiento local
  const userId = JSON.parse(localStorage.getItem('session'))?.id_usuario;

  useEffect(() => {
    if (userId) {
      iniciarTest();
    } else {
      console.error('No se encontró el id_usuario. El usuario no ha iniciado sesión.');
    }
  }, [userId]);

  const iniciarTest = async () => {
    try {
      const response = await fetch(ENDPOINTS.TESTS + '/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: userId,
          nivel_inicial: 'A1',
        }),
      });

      if (!response.ok) throw new Error('Error al iniciar el test');

      const data = await response.json();
      setTestId(data.test.id_test);
      fetchQuestion(data.test.id_test);
    } catch (error) {
      console.error('Error al iniciar el test:', error);
    }
  };

  const fetchQuestion = async (testId) => {
    try {
      const response = await fetch(ENDPOINTS.TESTS + '/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_test: testId }),
      });

      if (!response.ok) throw new Error('Error al obtener pregunta adaptativa');

      const data = await response.json();
      console.log(data);
      // Procesar las opciones de respuesta directamente desde la API
      const options = data.question.options;

      // Asumimos que 'question' es el texto de la pregunta y 'correctAnswer' es la respuesta correcta
     setCurrentQuestion({
    id: data.question.id,
    question: data.question.question,
    options: options,
    correctAnswer: data.question.correctAnswer,
    nivel_dificultad: data.nivel_dificultad, // Aquí está el nivel de dificultad
});
    } catch (error) {
      console.error('Error al obtener pregunta:', error);
    }
  };

  const handleAnswer = async (selectedOption) => {
    try {
      const response = await fetch(ENDPOINTS.TESTS + '/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_test: testId,
          nivel_dificultad: currentQuestion.nivel_dificultad ,
          respuesta_usuario: selectedOption,
          correcta: currentQuestion.correctAnswer,
        }),
      });

      if (!response.ok) throw new Error('Error al guardar la respuesta');

      if (currentQuestionIndex + 1 < totalQuestions) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        fetchQuestion(testId);
      } else {
        finalizarTest();
      }
    } catch (error) {
      console.error('Error al guardar la respuesta:', error);
    }
  };

  const finalizarTest = async () => {
    try {
      const response = await fetch(ENDPOINTS.TESTS + '/finish/:id_test', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nivel_final: 'B1',
          puntaje_total: 80,
          duracion_total: 120,
        }),
      });

      if (!response.ok) throw new Error('Error al finalizar el test');

      const data = await response.json();
      console.log('Test finalizado:', data);
      alert('Test completado. ¡Gracias por participar!');
    } catch (error) {
      console.error('Error al finalizar el test:', error);
    }
  };

  return (
    <main className="flex overflow-hidden flex-col pb-20 bg-white" style={{ padding: '0px 0px 0px' }}>
      <Header />
      <section className="flex flex-col items-start px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="gap-2.5 self-stretch p-2.5 text-4xl font-bold text-black">English Test</h1>

        {currentQuestion ? (
          <Question
            id={currentQuestion.id}
            text={currentQuestion.question}
            options={currentQuestion.options}
            onAnswer={handleAnswer}
          />
        ) : (
          <p>Cargando pregunta...</p>
        )}

        <div className="flex flex-wrap gap-10 items-center mt-24 ml-5 w-full max-md:mt-10 max-md:max-w-full">
          <ProgressIndicator totalQuestions={totalQuestions} currentQuestion={currentQuestionIndex + 1} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default TestPage;
