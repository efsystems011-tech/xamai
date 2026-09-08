import AppRoutes from "./routes/AppRoutes"
import { OrcamentosProvider } from "./context/OrcamentoContext"

function App() {
  return(
    <OrcamentosProvider>
      <AppRoutes />
    </OrcamentosProvider>
  )
}

export default App