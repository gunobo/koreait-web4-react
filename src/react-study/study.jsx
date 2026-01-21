import UseRef01 from "./04-useRef/UseRef01";
import UseRef02 from "./04-useRef/UseRef02";
import Emtion01 from "./Emotion/Emtion01";
import Emtion02 from "./Emotion/Emtion02";

export default function Study() {
    const stateStudy = {
        1: <UseRef01 />,
        2: <UseRef02 />,
        3: <Emtion01 />,
        4: <Emtion02 />
    };

    return stateStudy[4];
}