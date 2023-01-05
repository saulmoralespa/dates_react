import {useState, useEffect} from 'react';
import Error from './Error';


function Form({patients, setPatients, patient, setPatient}) { 
  
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [high, setHigh] = useState("");
  const [symptom, setSymptom] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(patient).length > 0){
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setHigh(patient.high);
      setSymptom(patient.symptom);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36);
    const date = Date.now().toString(36);
    return random + date;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if([name, owner, email, high, symptom].includes("")){
      setError(true);
      return;
    }

    setError(false);

    const patientsObj = {name, owner, email, high, symptom}

    if(patient.id){
      patientsObj.id = patient.id;
      const patientsUpdate = patients.map(patientState => patientState.id === patient.id ? patientsObj : patientState);
      setPatients(patientsUpdate);
      setPatient({});
    }else{
      patientsObj.id = generateId();
      setPatients([...patients, patientsObj]);
    }

  }

  return (
    <div className="w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        {error && <Error msg={"Todos los campos son obligatorios"} /> }
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="pet"
            >
              Nombre mascota
            </label>
          <input
            id="pet"
            type="text" 
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="owner"
            >
              Nombre propietario
            </label>
          <input 
            id="owner"
            type="text" 
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}

          />
        </div>
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
            >
              Email
            </label>
          <input 
            id="email"
            type="text" 
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="high"
            >
              Alta
            </label>
          <input 
            id="high"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={high}
            onChange={(e) => setHigh(e.target.value)}

          />
        </div>
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptom"
            >
              Síntomas
            </label>
            <textarea 
              id="symptom"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los síntomas"
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
            />
        </div>
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={patient.id ? "Editar Paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  )
}

export default Form;
