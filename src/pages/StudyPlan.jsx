import { useEffect, useState } from 'react';
import Header from '../components/Nav/header';
import Footer from '../components/Nav/footer';
import { ENDPOINTS } from '../config/endpoint';

function StudyPlan() {
    const [studyPlans, setStudyPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);
    const [nivelPrueba, setNivelPrueba] = useState('A1');

    useEffect(() => {
        const storedProfileData = JSON.parse(localStorage.getItem('session')) || {};
        setUserId(storedProfileData.id_usuario || null);
      }, []);
  
      useEffect(() => {
        if (userId) {
          // Función para consultar los planes de estudio del usuario
          const fetchStudyPlans = async () => {
            try {
              const response = await fetch(ENDPOINTS.PLAN + '/obtenerplanes?id_usuario=' + userId);
              if (!response.ok) {
                throw new Error('Error al obtener los planes de estudio');
              }
              const data = await response.json();
              setStudyPlans(data);
            } catch (error) {
              console.error('Error al obtener los datos:', error);
              alert('No se pudieron cargar los planes de estudio. Inténtalo más tarde.');
            } finally {
              setLoading(false);
            }
          };
    
          fetchStudyPlans();
        }
      }, [userId]);

      const handleGenerateTestPlan = async () => {
        if (!userId) {
            alert('No se encontró un ID de usuario. Inicia sesión primero.');
            return;
        }
    
        try {
            const response = await fetch(ENDPOINTS.PLAN + '/generarprueba', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nivel: nivelPrueba,
                    id_usuario: userId
                })
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al generar el plan de prueba');
            }
    
            const data = await response.json();
            setStudyPlans([...studyPlans, data.plan]);
            alert('Plan de prueba generado con éxito');
        } catch (error) {
            console.error('Error al generar el plan de prueba:', error);
            alert(`No se pudo generar el plan de prueba: ${error.message}`);
        }
    };

  
    return (
      <div>
          <Header />
          <section className="flex overflow-hidden flex-col items-center px-20 pt-52 pb-28 text-white bg-white max-md:px-5 max-md:py-24">
              <div className="flex flex-col px-5 pt-5 pb-24 w-full bg-gray-50 rounded-3xl max-w-[928px] min-h-[507px] max-md:max-w-full">
                  <h1 className="text-3xl font-bold text-black max-md:max-w-full">
                      Planes de Estudio
                  </h1>

                  {/* Formulario para generar plan de prueba */}
                  <div className="mt-5">
                      <label htmlFor="nivel" className="text-black mr-2">Nivel de prueba:</label>
                      <select
                          id="nivel"
                          value={nivelPrueba}
                          onChange={(e) => setNivelPrueba(e.target.value)}
                          className="border border-gray-300 rounded p-1 text-black"
                      >
                          <option value="A1">A1</option>
                          <option value="A2">A2</option>
                          <option value="B1">B1</option>
                          <option value="B2">B2</option>
                          <option value="C1">C1</option>
                          <option value="C2">C2</option>
                      </select>
                      <button
                          onClick={handleGenerateTestPlan}
                          className="ml-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                      >
                          Generar Plan de Prueba
                      </button>
                  </div>

                  {loading ? (
    <p className="text-black mt-5">Cargando planes de estudio...</p>
) : (
    <div className="mt-5">
        {studyPlans.length > 0 ? (
            studyPlans.map((plan) => (
                <div key={plan.id_plan} className="mb-8 p-4 border border-gray-300 rounded-lg">
                    <h2 className="text-xl font-semibold text-black">
                        Plan para Nivel {plan.nivel_inicial} - Generado el {new Date(plan.fecha_generacion).toLocaleDateString()}
                    </h2>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-800">Videos</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {plan.recursos && plan.recursos.videos ? (
                                plan.recursos.videos.map((video, index) => (
                                    <li key={index}>
                                        <a href={video} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            Video {index + 1}
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <li>No hay videos disponibles</li>
                            )}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-800">Audios</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {plan.recursos && plan.recursos.audios ? (
                                plan.recursos.audios.map((audio, index) => (
                                    <li key={index}>
                                        <a href={audio} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            Audio {index + 1}
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <li>No hay audios disponibles</li>
                            )}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-800">Documentos</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {plan.recursos && plan.recursos.documentos ? (
                                plan.recursos.documentos.map((doc, index) => (
                                    <li key={index}>
                                        <a href={doc} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            Documento {index + 1}
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <li>No hay documentos disponibles</li>
                            )}
                        </ul>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-black">No hay planes de estudio disponibles.</p>
        )}
    </div>
)}
              </div>
          </section>
          <Footer />
      </div>
  );
  }
  
  export default StudyPlan;