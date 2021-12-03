import * as React from "react";
import { useContext, useState } from "react";

export type SetValue = (value: boolean) => void;
export interface AppContextInterface {
  likeActive: boolean;
  setLikeActive: SetValue;
  slideBtnLike: boolean;
  setSlideBtnLike: SetValue;
  showBtn: boolean;
  setShowBtn: SetValue;
}

export const AppContext = React.createContext<AppContextInterface | null>(null);

export const AppProvider: React.FC = ({ children }) => {
  const [likeActive, setLikeActive] = useState<boolean>(false);
  const [slideBtnLike, setSlideBtnLike] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  // const [saveActive, setSaveActive] = useState<boolean>(false);
  // const [slideBtnSave, setSlideBtnSave] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        likeActive,
        setLikeActive,
        slideBtnLike,
        setSlideBtnLike,
        showBtn,
        setShowBtn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
