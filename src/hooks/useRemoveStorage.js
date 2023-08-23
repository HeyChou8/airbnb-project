import { useLocation } from "react-router-dom";

export default function useRemoveStorage(){
    const location = useLocation()
    if(location.pathname ==='/entire'){
        window.localStorage.removeItem('detailInfo')
      }
}