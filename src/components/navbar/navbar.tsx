import {
  Box,
  AppBar,
  Toolbar,
  useMediaQuery,
  Drawer,
  List,
} from "@mui/material/";

import { useState } from "react";
import { navbarStyles } from "./styles";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { useSelector } from "react-redux";
import { User } from "core/users/types";
import { AuthState } from "core/auth/store/types";

import LinkList from "./link-list";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [isOpen, setIsOpen] = useState(false);
  const user = useCurrentUser();

  const closeDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={navbarStyles}>
          {isMobile ? (
            <Mobile setIsOpen={setIsOpen} />
          ) : (
            <Desktop setIsOpen={setIsOpen} />
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpen} onClose={closeDrawer}>
        <List>
          <LinkList user={user} />
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

function useCurrentUser(): User | null {
  return useSelector<{ auth: AuthState }>((state) => state.auth.user) as User;
}
