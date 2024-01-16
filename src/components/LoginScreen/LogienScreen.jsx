import { useContext, useState } from "react";
import "./LoginScreen.scss";
import { UserContext } from "../../context/UserContext";

const LoginScreen = () => {
    const { login, register, googleLogin } = useContext(UserContext);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setValues({
        ...values,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        login(values);
    };

    return (
        <div className="login-container">
        <div className="p-8 rounded bg-white">
            <img className="m-auto" src="data:image/png;base64,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" alt="img login" />
            <h2 className="text-2xl font-semibold w-80 flex place-content-center ">Bienvenido/a</h2>
            <hr />

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
            <input
                className="border p-2"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleInputChange}
                name="email"
            />
            <input
                className="border p-2"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleInputChange}
                name="password"
            />

            <button type="submit" className="bg-teal-600 text-white py-2 w-4/5 place-self-center">
                Ingresar
            </button>
            </form>

            <button
            onClick={() => register(values)}
            className="bg-teal-600 text-white p-2 mt-4 w-4/5 flex justify-center mx-auto"
            >
            Registrar
            </button>

                <br/>

            <button
            onClick={googleLogin}
            className="bg-teal-600 text-white p-2 mt-4 w-4/5 flex justify-center mx-auto"
            >
            <img className="w-6 mr-2.5" src="data:image/png;base64,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" alt="logo google" /> Iniciar sesión con Google
            </button>

        </div>
        </div>
    );
    };

export default LoginScreen;