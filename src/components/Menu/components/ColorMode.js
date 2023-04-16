const { createContext, useState } = require("react");

export const ColorModeContext = createContext({
  mode: '',
  setMode: () => alert('Você precisa me configurar primeiro'),
  tougleMode: () => alert('Você precisa me configurar primeiro'),
});

export function ColorModeProvider({children, initialMode}){
  const [mode, setMode] = useState(initialMode)

  function tougleMode(){
    setMode(mode === 'dark' ? 'light' : 'dark');
  }

  return <ColorModeContext.Provider value={{
    mode,
    setMode: setMode,
    tougleMode: tougleMode
  }}>{children}</ColorModeContext.Provider>
}