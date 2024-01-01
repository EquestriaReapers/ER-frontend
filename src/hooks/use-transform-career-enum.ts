const careerEnum: Record<string, string> = {
  "ingenieria-industrial": "Ingeniería Industrial",
  "ingenieria-informatica": "Ingeniería Informática",
  "ingenieria-civil": "Ingeniería Civil",
  "ingenieria-telecomunicaciones": "Ingeniería en Telecomunicaciones",
  arquitectura: "Arquitectura",
  derecho: "Derecho",
  psicologia: "Psicología",
  filosofia: "Filosofía",
  teologia: "Teología",
  letras: "Letras",
  educacion: "Educación",
  "comunicacion-social": "Comunicación Social",
  administracion: "Administración",
  contaduria: "Contaduría",
  "relaciones-industriales": "Relaciones Industriales",
  sociologia: "Sociología",
  economia: "Economía",
};
const useTransformCareerEnum = (careerName: string) =>
  careerEnum[careerName] || null;

export default useTransformCareerEnum;
