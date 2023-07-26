import {styled} from "@mui/material/styles";
import Button, {ButtonProps} from "@mui/material/Button";
import ListItem, {ListItemProps} from "@mui/material/ListItem";
import Paper, {PaperProps} from "@mui/material/Paper";

export const ColorButton = styled(Button)<ButtonProps>(({theme}) => ({
  color: theme.palette.getContrastText("#14213D"),
  backgroundColor: "#14213D !important",
  "&:hover": {
    backgroundColor: "#fff !important",
    color: "#14213D !important",
  },
}));

export const EventListItem = styled(ListItem)<ListItemProps>(({theme}) => ({
  color: "#14213D !important",
  borderRadius: "4px !important",
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); !important",
  "&:hover": {
    backgroundColor: "#fff !important",
  },
  marginBottom: "6px",
  height: "130px",
  width: "600px",
}));

export const EventDateContainer = styled(Paper)<PaperProps>(({theme}) => ({
  boxShadow:
    "0px 3px 1px -2px rgba(252, 163, 17, 0.3), 0px 2px 2px 0px rgba(252, 163, 17, 0.24), 0px 1px 5px 0px rgba(252, 163, 17, 0.22); !important",
}));
