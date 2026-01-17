// default로 export 하면 값이 하나로 결정되어 있어서
// import하는 쪽에서 사용하기 편한 이름으로 지정 가능
import Modal from "./react-study/02-useState/Modal/Modal"
import ModalContainer from "./react-study/02-useState/Modal/ModalContainer"
import NavBar from "./react-study/02-useState/NavBar/NavBar"
import Study from "./react-study/study"

function App() {
    return (
      <>
        <Study />
      </>
  )
}

export default App
