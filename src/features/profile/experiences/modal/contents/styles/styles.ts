export const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

export const boxStyles = {
  py: 3,
  marginLeft: {
    xs: 3,
    md: 10,
    lg: 10,
  },
  overflow: 'hidden',
  width: {
    md: '60%',
    lg: '60%',
  },
};

export const titleStyles = {
  fontWeight: '800',
  fontSize: '40px',
  py: 3,
}

export const nameStyles = {
  fontWeight: '800',
  fontSize: '20px',
  py: 3,
}

export const buttonStyle = {
  borderRadius: '10px',
  background: '#007935',
  fontWeight: '500',
  color: 'white',
  textTransform: 'capitalize',
  fontSize: '20px',
}

export const inlineStyles = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '50% 50%',
    md: '50% 50%',
    lg: '50% 50%',
  },
}

export const ubicationDateStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: {
    xs: 'flex-start',
    md: 'flex-end',
    lg: 'flex-end',
  },  
  bgcolor: 'green',
}

export const roleStyles = {
  fontWeight: '700',
  fontSize: '18px',
  color: '#535353',
  textTransform: 'capitalize',
};

export const descriptionStyles = {
  fontSize: '18px',
  color: '#444444',
};
