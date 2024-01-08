import { useContext } from "react";
import PortfolioModalContext from "../../../modal-context";
import { Portfolio } from "core/profiles/types";

import ProjectItem from "./item";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { PortfolioContent } from "../../../modal-context/types";

const ProjectsList = () => {
  const { setContent, setAPortfolio, portfolio } = useContext(
    PortfolioModalContext
  );
  return (
    <>
      {portfolio.map((item: Portfolio) => {
        return (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ProjectItem item={item} />
            <Box
              sx={{
                mt: "6px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  setContent(PortfolioContent.Edit);
                  setAPortfolio(item);
                }}
              >
                <EditIcon sx={{ color: "#007935" }} />
              </IconButton>
              <IconButton
                onClick={() => {
                  setContent(PortfolioContent.Delete);
                  setAPortfolio(item);
                }}
              >
                <DeleteIcon sx={{ color: "#007935" }} />
              </IconButton>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default ProjectsList;
