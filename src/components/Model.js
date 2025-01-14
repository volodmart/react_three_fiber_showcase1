import React from 'react'
import { useGLTFLoader, useAnimations } from 'drei';

function Model({ url }) {
  

  const gltf = useGLTFLoader(url, true);
  return <primitive  object={gltf.scene} dispose={null} />;
}

export default Model
