"use client";
import {styled} from "@mui/material/styles";
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useGlobalContext} from "../context/store";
import {useState, useEffect} from "react";
import {format} from "date-fns";

export const CustomCalendar: any = styled(DateCalendar)(({theme}) => ({
  color: theme.palette.getContrastText("#14213D"),
  ".MuiPickersDay-today:not(.Mui-selected)": {
    backgroundColor: "rgba(20, 33, 61, .2) !important",
    border: "none !important",
  },
  ".MuiButtonBase-root.Mui-selected": {
    backgroundColor: "#14213D !important",
    boxShadow: "0 0 10px 1px #fca311; !important",
  },
  ".MuiPickersCalendarHeader-label": {
    color: "black !important",
    fontWeight: "700",
  },
  ".MuiDayCalendar-weekDayLabel": {
    color: "black !important",
  },
  ".MuiPickersYear-yearButton": {
    color: "black !important",
  },
  ".MuiPickersYear-yearButton.Mui-selected": {
    backgroundColor: "#14213D !important",
    color: "white !important",
  },
}));

export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

const Calender = () => {
  const {setCalendarDay} = useGlobalContext();
  const loaded = useLoaded();
  const [value, setValue]: any = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    setCalendarDay(format(new Date(value.$d.toISOString()), "LL/dd/yyyy"));
  }, [value]);
  return (
    <div>
      {loaded && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CustomCalendar
            value={value}
            onChange={(newValue: any) => setValue(newValue)}
          />
        </LocalizationProvider>
      )}
    </div>
  );
};
export default Calender;
