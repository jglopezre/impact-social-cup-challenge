import { Container } from "reactstrap"
import Footer from "./components/Footer"
import FormsSection from "./components/FormsSection"
import ErrorModal from "./components/ErrorModal"
import SuccessModal from "./components/SuccessModal"

function App() {

  return (
    <Container className="min-vh-100 d-flex flex-column">
      <ErrorModal />
      <SuccessModal />
      <FormsSection />
      <Footer />
    </Container>
  )
}

export default App
