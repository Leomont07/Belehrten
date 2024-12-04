import { useEffect, useState } from 'react';
import Header from '../components/Nav/header';
import Footer from '../components/Nav/footer';
import { ENDPOINTS } from '../config/endpoint';




function StudyPlan() {
    const [studyPlans, setStudyPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);

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

      const handleDownload = (id) => {
        window.open(ENDPOINTS.PLAN + '/descargar?id_plan=' + id);
    };
  
    return (
      <div>
        <Header />
        <section className="flex overflow-hidden flex-col items-center px-20 pt-52 pb-28 text-white bg-white max-md:px-5 max-md:py-24">
          <div className="flex flex-col px-5 pt-5 pb-24 w-full bg-gray-50 rounded-3xl max-w-[928px] min-h-[507px] max-md:max-w-full">
            <h1 className="text-3xl font-bold text-black max-md:max-w-full">
              Planes de Estudio
            </h1>
  
            {loading ? (
              <p className="text-black mt-5">Cargando planes de estudio...</p>
            ) : (
                <table className="mt-5 w-full text-left table-auto border-collapse border border-gray-800 text-gray-800">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="border border-gray-800 px-4 py-2">No. Plan</th>
                    <th className="border border-gray-800 px-4 py-2">Fecha de Generación</th>
                    <th className="border border-gray-800 px-4 py-2">Nivel</th>
                    <th className="border border-gray-800 px-4 py-2">Generar Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {studyPlans.length > 0 ? (
                    studyPlans.map((plan, index) => (
                      <tr key={plan.id} className="hover:bg-gray-200">
                        <td className="border border-gray-800 px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-800 px-4 py-2">
                          {new Date(plan.fecha_generacion).toLocaleDateString()}
                        </td>
                        <td className="border border-gray-800 px-4 py-2">{plan.nivel_inicial}</td>
                        <td className="border border-gray-800 px-4 py-2">
                          <button
                            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                            onClick={() => handleDownload(plan.id_plan)}
                          >
                            Descargar
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center border border-gray-800 px-4 py-2"
                      >
                        No hay planes de estudio disponibles.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              
            )}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
  export default StudyPlan;