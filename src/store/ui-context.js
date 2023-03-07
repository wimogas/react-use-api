import React, { createContext, useEffect, useState } from "react";

import Modal from '../ui/modal/Modal'
import Alert from '../ui/alert/Alert'

const uid = (() => {
  let i = 0;
  return () => `${i++}`;
})();

const UIContext = createContext({
  colors: {},
  modals: [],
  alerts: [],
  pushModal: (node, title) => {},
  pushAlert: (message, variant, type) => {},
  closeAllModals: () => {},
});

export const UIContextProvider = (props) => {

  const COLORS = {
    'primary': 'var(--color-primary)',
    'secondary': 'var(--color-secondary)',
    'white': 'white',
    'success': 'var(--color-success)',
    'error': 'var(--color-error)',
  }

  const [modals, setModals] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const handleCloseAllModals = () => {
    setModals([]);
  };

  const handlePushModal = (node, title) => {
    const key = uid();
    const close = () => setModals((modals) => {
      return modals.filter((modal) => modal.key !== key);
    });
    const modal = (
      <Modal key={key} close={close} title={title}>
        {node}
      </Modal>
    );
    setModals((modals) => [...modals, modal]);
  }

  const handlePushAlert = (message, variant, type) => {
    setAlerts([]);
    const key = uid();
    const close = () => setAlerts((alerts) => {
      return alerts.filter((alert) => alert.key !== key);
    });
    const alert = (
      <Alert key={key} 
        close={close} 
        message={message} 
        variant={variant} 
        type={type}
      />
    );
    setAlerts((alerts) => [...alerts, alert]);
  }

  useEffect(() => {
    const cleanAlerts = setTimeout(()=> {
      if(alerts.length > 0) {
        setAlerts([])
      }
    }, 3000)
    return () => clearTimeout(cleanAlerts);
  }, [alerts])

  const context = {
    colors: COLORS,
    modals,
    alerts,
    pushModal: handlePushModal,
    pushAlert: handlePushAlert,
    closeAllModals: handleCloseAllModals,
  };

  return (
    <UIContext.Provider value={context}>
      {modals}
      {alerts}
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
