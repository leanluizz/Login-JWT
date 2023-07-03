import { ReactElement, createContext, useState } from "react";
export const Context = createContext({})
export const ContexProvider = ({children, value}:any,) => { //props

    let [title, settitle] = useState<String>("Create account")
    let [legend, setlegend] = useState<String>("or use your email for registration")
    let [show, setShow] = useState(false);
<<<<<<< HEAD
    
=======
    let [Login, setLogin] = useState<Boolean>(false) 
    let [Is, setIs] = useState<Boolean>()
>>>>>>> ae6447750ba41f2355cd6971f777a245cc44609a
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return <Context.Provider value={{
<<<<<<< HEAD
        title, legend, settitle, setlegend, show, setShow, handleClose, handleShow
        }}>
=======
        title, legend, settitle, setlegend, show, setShow, handleClose, handleShow, Login, setLogin
        , Is, setIs}}>
>>>>>>> ae6447750ba41f2355cd6971f777a245cc44609a
        {children}
    </Context.Provider>
}