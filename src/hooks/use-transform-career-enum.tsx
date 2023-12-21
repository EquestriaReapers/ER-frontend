const useTransformCareerEnum = (careerName: string) => {
  switch (careerName) {
    case "ingenieria-industrial":
      return "Ingeniería Industrial";
    case "ingenieria-informatica":
      return "Ingeniería Informática";
    case "ingenieria-civil":
      return "Ingeniería Civil";
    case "ingenieria-telecomunicaciones":
      return "Ingeniería en Telecomunicaciones";
    case "arquitectura":
      return "Arquitectura";
    case "derecho":
      return "Derecho";
    case "psicologia":
      return "Psicología";
    case "filosofia":
      return "Filosofía";
    case "teologia":
      return "Teología";
    case "letras":
      return "Letras";
    case "educacion":
      return "Educación";
    case "comunicacion-social":
      return "Comunicación Social";
    case "administracion":
      return "Administración";
    case "contaduria":
      return "Contaduría";
    case "relaciones-industriales":
      return "Relaciones Industriales";
    case "sociologia":
      return "Sociología";
    case "economia":
      return "Economía";
    default:
      return null;
  }
};

export default useTransformCareerEnum;
