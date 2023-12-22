import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function useSeedParam() {
  const seed = useParams().seed ?? null;
  if (seed === null) return null;
  if (isNaN(+seed)) return null;
  return +seed;
}
const useSeed = () => {
  const seed = useSeedParam();
  const navigate = useNavigate();
  useEffect(() => {
    if (!seed) {
      navigate(`/catalogue/${Math.random()}`);
    }
  }, [seed, navigate]);
  return seed;
};

export default useSeed;
