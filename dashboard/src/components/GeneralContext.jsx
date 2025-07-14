import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
<<<<<<< HEAD
=======
import SellActionWindow from "./SellActionWindow";
>>>>>>> 23fa13c (fixing sell)

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
<<<<<<< HEAD
=======
   const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); 
>>>>>>> 23fa13c (fixing sell)
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

<<<<<<< HEAD
=======
// --- Sell Handlers ---
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

>>>>>>> 23fa13c (fixing sell)
  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
<<<<<<< HEAD
=======
        openSellWindow: handleOpenSellWindow,  
        closeSellWindow: handleCloseSellWindow,
>>>>>>> 23fa13c (fixing sell)
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
<<<<<<< HEAD
=======
       {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
>>>>>>> 23fa13c (fixing sell)
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
