// React Spring
import React, { Suspense, useRef } from 'react';
// Page State
// R3F
import { Canvas } from 'react-three-fiber';
import './App.scss';
import Content from './components/Content';
import Header from './components/header';
//Components
import Lights from './components/Lights';
import Loader from './components/Loader';
import { servicesAvailable } from './data/services';
const removeSpaces = (string) => {
  let returnString = '';
  returnString = string.split(' ').join('');
  return returnString.replace(/\//g, '');
};
export default function App() {
  const domContent = useRef();

  return (
    <>
      <Header />
      {/* R3F Canvas */}
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        {/* Lights Component */}
        <Lights />
        <Suspense fallback={null}>
          <Content
            domContent={domContent}
            bgColor="#f15946"
            modelPath="/armchairYellow.gltf"
            position={250}
          >
            {servicesAvailable.map((service, id) => (
              <li key={id} className={`services ${removeSpaces(service.title)}`}>
                {service.title}
              </li>
            ))}
          </Content>
          {/* <HTMLContent
            domContent={domContent}
            bgColor="#571ec1"
            modelPath="/armchairGreen.gltf"
            position={0}
          >
            <span>Shit... we even</span>
            <span>got different colors</span>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            bgColor="#636567"
            modelPath="/armchairGray.gltf"
            position={-250}
          >
            <span>And yes</span>
            <span>we even got</span>
            <span>monochrome!</span>
          </HTMLContent> */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}