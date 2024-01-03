import { useContext } from "react";
import PortfolioModalContext from "../../../modal-context";
import { Portfolio } from "core/profiles/types";
import Box from "@mui/material/Box";
import ProjectItem from "./item";

const ProjectsList = () => {
  const { portfolio } = useContext(PortfolioModalContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        overflowY: "auto",
        height: "100%",
        maxHeight: "425px",
        backgroundColor: "#F4F4F4",
        py: "40px",
        px: "40px",
        justifyContent: "space-between",
        borderRadius: "6px",
      }}
    >
      {portfolio.map((item: Portfolio) => {
        return (
          <>
            <ProjectItem item={item} /> <ProjectItem item={item} />{" "}
            <ProjectItem item={item} />
          </>
        );
      })}
    </Box>
  );
};

export default ProjectsList;
