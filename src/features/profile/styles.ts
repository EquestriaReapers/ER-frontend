const PRIMARY_DARKER = "#03652e";

export const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    boxShadow: 24,
    p: {
        xs: 2,
        sm: 3,
        md: 4,
    },
    borderRadius: "10px",
};

export const titleStyles = {
    fontWeight: "bold",
    fontSize: "28px",
    margin: "0px 0px 12px",
};

export const buttonStyle = {
    borderRadius: "6px",
    background: "#007935",
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
    fontSize: "16px",
    px: 3,
    my: 1,
    "&:hover": {
        backgroundColor: PRIMARY_DARKER,
    },
};

export const headerStyles = {
    py: 2,
}

export const textFieldStyles = {
    width: '100%',
    display: 'flex',
}

export const boxButtonStyles = {
    display: 'flex',
        
    justifyContent: {
        xs: 'center',
        md: 'flex-start',
    },
}