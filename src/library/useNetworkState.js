
import { useRecoilState } from "recoil";
import { appStatus } from "../settings/atoms"
import { useEffect } from 'react'

const useNetworkState = () => {
  const [appState, setAppState] = useRecoilState(appStatus);

  useEffect(() => {
    const updateNetState = () => {
      const connection = navigator.connection;
      if (connection && 
        appState.network &&
        (navigator.onLine !== appState.network.isOnline)) {
        setAppState({
            ...appState,
            network: {
                isOnline: navigator.onLine,
                effectiveType: connection.effectiveType,
                downlink: connection.downlink,
                rtt: connection.rtt
            }
        });
      }
    };
    window.addEventListener("load", updateNetState);
    window.addEventListener("online", updateNetState);
    window.addEventListener("offline", updateNetState);

    return () => {
      window.removeEventListener("load", updateNetState);
      window.removeEventListener("online", updateNetState);
      window.removeEventListener("offline", updateNetState);
    };
  }, [appState, setAppState]);

  return appState.network
};

export default useNetworkState