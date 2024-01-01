import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function useSeedParam() {
  const seed = useParams().seed ?? null;
  if (seed === null) return null;
  if (isNaN(+seed)) return null;
  return +seed;
}

function generateRandomSeed() {
  return Math.floor(Math.random() * 1000);
}

const useSeed = () => {
  const seed = useSeedParam();
  const navigate = useNavigate();

  useEffect(() => {
    if (!seed) {
      navigate(`/catalogue/${generateRandomSeed()}`);
    }
  }, [seed, navigate]);

  return seed;
};

export default useSeed;
