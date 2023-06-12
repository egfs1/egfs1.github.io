import { Navbar } from './components/Navbar'
import { Content } from './components/Content'
import { setLanguageToI18n } from './services/i18n.js';

function App() {
  const params = new URL(window.location.href).searchParams;
  setLanguageToI18n(params.get("lang"));

  return (
    <div className="App">
      <Navbar/>
      <Content/>
    </div>
  )
}

export default App
