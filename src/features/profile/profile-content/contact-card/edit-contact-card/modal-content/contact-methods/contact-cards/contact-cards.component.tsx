import { Box, Typography, IconButton } from "@mui/material";
import { ContactMethod } from "core/profiles/types";
import DeleteIcon from "@mui/icons-material/Delete";
import useDeleteContacthMethods from "./use-delete-contact-method";

const ContactCards = ({ contactMethods }: Props) => {
  const deleteContact = useDeleteContacthMethods();
  return (
    <div>
      {contactMethods.map((mail) => (
        <>
          <Box className={"contact-card-style"}>
            <Typography className={"contact-cardText-style"}>
              {mail.email}
            </Typography>

            <IconButton
              className={"contact-cardDelete-style"}
              onClick={() => {
                deleteContact(mail.id);
              }}
            >
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
