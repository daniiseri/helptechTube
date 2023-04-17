import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { userForm } from "@/hooks/useForm";

export function RegisterVideo() {
  const [formVisibility, setFormVisibility] = useState(false);
  const {values, handleChange, clearForm} = userForm({
    title: '',
    url: ''
  })

  return (
    <StyledRegisterVideo>
      <button 
        className="add-video"
        onClick={()=>setFormVisibility(true)}
      >
        +
      </button>


      {
        formVisibility
        &&  
      (<form onSubmit={(e) => {
        e.preventDefault();

        setFormVisibility(false);
        clearForm();
      }}>
        <div>
          <button 
            className="close-modal"
            onClick={() => setFormVisibility(false)}
          >
            x
          </button>

          <input name='title' placeholder="Titulo do vídeo" value={values.title} onChange={handleChange}/>
          <input name='url' placeholder="URL" value={values.url} onChange={handleChange}/>
          <button type="submit">
            Cadastrar
          </button>
        </div>
      </form>)
      }
    </StyledRegisterVideo>
  )
}