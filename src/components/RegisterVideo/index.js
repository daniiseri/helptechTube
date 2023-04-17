import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { userForm } from "@/hooks/useForm";
import { formaterUrl, generateThumb } from '../../utils/formatUrl';
import { VideoService } from "@/services/VideoService";

export function RegisterVideo() {
  const [formVisibility, setFormVisibility] = useState(false);
  const { values, handleChange, clearForm } = userForm({
    title: '',
    url: ''
  })

  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => setFormVisibility(true)}
      >
        +
      </button>


      {
        formVisibility
        &&
        (<form onSubmit={(e) => {
          e.preventDefault();

          VideoService()
            .create({
              ...values,
              url: values.url,
              thumb: generateThumb(formaterUrl(values.url)),
              playlist: 'Jogos'
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err))

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

            <input name='title' placeholder="Titulo do vídeo" value={values.title} onChange={handleChange} required />
            <input name='url' placeholder="URL" value={values.url} onChange={handleChange} required />
            <button type="submit">
              Cadastrar
            </button>

            {
              values.url.includes('https://www.youtube.com/watch?v=') && <img className="thumb" src={generateThumb(formaterUrl(values.url))} />
            }
          </div>


        </form>)
      }
    </StyledRegisterVideo>
  )
}