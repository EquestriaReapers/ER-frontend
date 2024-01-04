import { Box, Typography, IconButton } from "@mui/material";
import { ContactMethod } from "core/profiles/types";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactCards = ({ contactMethods }: Props) => {
  return (
    <div>
      {contactMethods.map((mail) => (
        <>
          <Box className={"contact-card-style"}>
            <Typography className={"contact-cardText-style"}>
              {mail.email}
            </Typography>

            <IconButton className={"contact-cardDelete-style"}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </>
      ))}
    </div>
  );
};

export default ContactCards;

interface Props {
  contactMethods: ContactMethod[];
}
