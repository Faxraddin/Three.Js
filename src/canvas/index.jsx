import { Canvas } from "@react-three/fiber";
import { Environment,Center } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import BackDrop from "./BackDrop";

const CanvasModel = () => {
  return (
    <Canvas>
        <ambientLight intensity={0.5}/>
        <Environment preset="city"/>

        <Center>
            <Shirt/>
        </Center>
    </Canvas>
  )
}
export default CanvasModel