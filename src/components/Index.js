import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const [name, setTmpName] = useState("");
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault()
        if (name && name.length > 3) {
            localStorage.setItem('name', name);
            navigate("/message")
        }
    }

    return (
        <div className='form-name'>
            <h2>Salut, comment t'appelles tu?</h2>
            <form onSubmit={handleForm}>
                <input className="input-name" type="text" value={name} onChange={(e) => setTmpName(e.target.value)}/>
                <input className="btn" type="submit" value="C'est parti !"/>
            </form>
        </div>
    )

}

export default Index