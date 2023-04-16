const { createContext, useState } = require("react");

export const RunVideoContext = createContext({
  videoUrl: '',
  setVideoUrl: () => {alert('Você precisa me configurar primeiro')}
})

export function RunVideoProvider({children, initialVideoUrl}){
  const [videoUrl, setVideoUrl] = useState(initialVideoUrl);

  return (
    <RunVideoContext.Provider value={{
      videoUrl: videoUrl,
      setVideoUrl: setVideoUrl
    }}>
      {children}
    </RunVideoContext.Provider>
  )
}