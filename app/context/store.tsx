"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  firstName: string;
};

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  eventOverviewData: [];
  setEventOverviewData: Dispatch<SetStateAction<[]>>;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  data: [],
  setData: (): DataType[] => [],
  eventOverviewData: [],
  setEventOverviewData: (): DataType[] => [],
});

export const GlobalContextProvider = ({children}: any) => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState<[] | DataType[]>([]);
  const [eventOverviewData, setEventOverviewData] = useState<[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        userId,
        setUserId,
        data,
        setData,
        eventOverviewData,
        setEventOverviewData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
