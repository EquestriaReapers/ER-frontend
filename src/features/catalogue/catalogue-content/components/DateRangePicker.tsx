import { Box } from "@mui/material";
//import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RemoveIcon from "@mui/icons-material/Remove";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const DateRangePicker = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "6px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            openTo="year"
            views={["year"]}
            /*renderInput={(params) => <CalendarTodayIcon {...params} />}*/
          />
        </LocalizationProvider>
      </Box>
      <RemoveIcon />
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "6px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            openTo="year"
            views={["year"]}
            /*renderInput={(params) => <CalendarTodayIcon {...params} />}*/
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default DateRangePicker;
