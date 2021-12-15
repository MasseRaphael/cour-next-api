import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as Yup from "yup";

export default function Home() {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Le titre est requis"),
    firstName: Yup.string().required("Le prénom est obligatoire"),
    lastName: Yup.string().required("Le nom est obligatoire"),
    dateBook: Yup.string()
      .required("La date de la réservation est obligatoire")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Cette date n'est pas valide"
      ),
    email: Yup.string()
      .required("L'email est obligatoire")
      .email("Votre adresse est invalide"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Veuillez accepter les conditions générales"
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    
    return false;
  }

  return (
      <div className="card m-3">
        <h1 className="card-header"> Formulaire de réservation </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group col">
                <label>Titre</label>
                <select
                  name="title"
                  {...register("title")}
                  className={`form-control ${errors.title ? "is-invalid" : ""}`}
                >
                  <option value=""></option>
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                </select>
                <div className="invalid-feedback">{errors.title?.message}</div>
              </div>
              <div className="form-group col-5">
                <label>Prénom</label>
                <input
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              </div>
              <div className="form-group col-5">
                <label>Nom de famille</label>
                <input
                  name="lastName"
                  type="text"
                  {...register("lastName")}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label>Date de la réservation</label>
                  <input
                    name="dateBooked"
                    type="date"
                    {...register("dateBooked")}
                    className={`form-control ${
                      errors.dateBooked ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.dateBooked?.message}
                  </div>
                </div>
                <div className="form-group col">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    {...register("email")}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
                <div className="form-group form-check">
                  <input
                    name="acceptTerms"
                    type="checkbox"
                    {...register("acceptTerms")}
                    id="acceptTerms"
                    className={`form-check-input ${
                      errors.acceptTerms ? "is-invalid" : ""
                    }`}
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    Conditions générales
                  </label>
                  <div className="invalid-feedback">
                    {errors.acceptTerms?.message}
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary me-1">
                    Envoyer
                  </button>
                  <button type="button" onClick={() => reset()}>
                    Remettre à 0
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
}
