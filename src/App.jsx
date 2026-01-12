// default로 export 하면 값이 하나로 결정되어 있어서
// import하는 쪽에서 사용하기 편한 이름으로 지정 가능
import 첫번째 from "./react-study/01-jsx-and-component/App01"
import 두번째 from "./react-study/01-jsx-and-component/App02"
import 세번째 from "./react-study/01-jsx-and-component/App03"

function App() {
    return (
      <>
      {/* App01 호출 */}
        <첫번째 />
        <두번째 />
        <세번째 />
      </>
  )
}

export default App
