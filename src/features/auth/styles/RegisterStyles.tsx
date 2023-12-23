import Background from "../images/background.jpeg";

const mediaQueryStyles = {
    '@media (minWidth: 600px)': {
      minHeight: '500px',
    },
    '@media (minWidth: 900px)': {
      minHeight: '600px',
    },
  };

export const registerProfileStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '800px',
    minWidth: '350px',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    ...mediaQueryStyles,
};