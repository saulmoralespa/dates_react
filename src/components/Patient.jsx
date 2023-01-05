import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Patient = ({patient, setPatient, deletePatient}) => {
  
  const {name, owner, email, high, symptom, id} = patient;

  const handleDelete = () => {
    MySwal.fire({
      title: '¿ Deseas eliminar este paciente ?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      showCloseButton: true
    }).then(result => {
      if (result.isConfirmed) {
        deletePatient(id);
      }
    })
  }
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{" "}
          <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{" "}
          <span className="font-normal normal-case">{owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{" "}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:{" "}
          <span className="font-normal normal-case">{high}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{" "}
          <span className="font-normal normal-case">{symptom}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => setPatient(patient)}
          >Editar</button>
          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleDelete}
          >Eliminar</button>
        </div>
    </div>
  )
}

export default Patient;