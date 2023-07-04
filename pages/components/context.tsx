import { ReactElement, createContext, useState } from "react";
export const Context = createContext({})
export const ContexProvider = ({children, value}:any,) => { //props

    let [title, settitle] = useState<String>("Create account")
    let [legend, setlegend] = useState<String>("or use your email for registration")
    let [show, setShow] = useState(false);
    let [showModalForgot, setshowModalForgot] = useState(false)
    let [Login, setLogin] = useState<Boolean>(false) 
    let [Is, setIs] = useState<Boolean>()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return <Context.Provider value={{
        title, legend, settitle, setlegend, show,showModalForgot,setshowModalForgot, setShow, handleClose, handleShow, Login, setLogin
        , Is, setIs}}>
        {children}
    </Context.Provider>
}