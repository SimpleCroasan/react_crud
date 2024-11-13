import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../Services/APIInvoke";

const Login = () => {


    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        nombreUsuario: '',
        password: ''
    });

    const {nombreUsuario, password} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado
        iniciarSesion();
    }
    

    const iniciarSesion = async () =>{
        const data = {
            nombreUsuario: usuario.nombreUsuario,
            password: usuario.password
        }
        const response = await APIInvoke.invokePOST('/api/usuarios/loginclient',data)

        if(response){
            navigate("/home");
        }
    }

    useEffect(() => {
        document.getElementById("email").focus();
    }, [])

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link ><b>Inicio </b>sesion</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Ingresar credenciales de sesion</p>

                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Email" id="email" name="nombreUsuario" value={nombreUsuario} onChange={onChange} required/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="password" id="password" name="password" value={password} onChange={onChange} required/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                 
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;