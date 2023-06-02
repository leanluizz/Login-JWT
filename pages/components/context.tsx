import { ReactElement, createContext, useState } from "react";
export const Context = createContext({})
export const ContexProvider = ({children, value}:any,) => { //props

    let [title, settitle] = useState<String>("Create account")
    let [legend, setlegend] = useState<String>("or use your email for registration")
    let [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return <Context.Provider value={{
        title, legend, settitle, setlegend, show, setShow, handleClose, handleShow
        }}>
        {children}
    </Context.Provider>
}