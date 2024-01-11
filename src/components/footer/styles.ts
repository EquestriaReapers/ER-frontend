import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const FooterStyles = {
    width: "100%", 
    backgroundColor: "#CDCDCD",   
    height: "240px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
};


export const FooterLineStyles = {
    width: "100%",
    height: "3%",
    backgroundColor: "#37B4E3"
}

export const InsideFooterStyles = {
    display: "flex",
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
}

export const useFooterFirstLineStyles = () => {

    const isLargeScreen = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("lg")
    );
    const isSmallScreen = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("sm")
    );

    const FooterFirstLineStyles = {
        marginBottom: "30px",
        width: isLargeScreen ? "270px" : "380px",
        display: "flex",
        flexDirection: isLargeScreen ? "column" : "row",
        alignItems: isSmallScreen ? "center" : "center",
        gap: isSmallScreen ? "0px" : "10px",
        justifyContent: "space-between",
        fontSize: isLargeScreen ? "12px" : "16px",
    };

    return FooterFirstLineStyles;
};

export const FooterTextStyles = {
    color: "#343434",
    textDecoration: "none",
}

export const FooterSecondLine = {
    width: "80px",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
}

export const FooterIconStyles = {
    color: "#343434"
}