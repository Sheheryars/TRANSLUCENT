import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import { Asset } from 'expo-asset';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const AuraSpecs3DViewer = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const meshRef = useRef(null);

  useEffect(() => {
    loadModel();
    return () => {
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        meshRef.current.material.dispose();
      }
    };
  }, []);

  const loadModel = async () => {
    try {
      const asset = Asset.fromModule(require('./assets/FYP1.obj'));
      await asset.downloadAsync();
      setIsLoading(false);
    } catch (e) {
      console.error('Error loading asset:', e);
      setError('Failed to load 3D model');
      setIsLoading(false);
    }
  };

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const sceneColor = 0x6ad6f0;

    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor(sceneColor);

    const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
    camera.position.set(0, 0, 5);

    const scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight(0x101010);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 1000, 1);
    pointLight.position.set(0, 200, 200);
    scene.add(pointLight);

    try {
      const asset = Asset.fromModule(require('./assets/FYP1.obj'));
      const loader = new OBJLoader();
      loader.load(asset.uri, (object) => {
        if (object.children.length > 0) {
          console.log('Model loaded successfully:', object);
          object.scale.set(0.1, 0.1, 0.1);
          object.position.set(0, 0, 0);

          const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
          const mesh = new THREE.Mesh(object.children[0].geometry, material);
          meshRef.current = mesh;
          scene.add(mesh);
        } else {
          throw new Error('Loaded object has no children');
        }
      }, undefined, (loaderError) => {
        console.error('Error loading model:', loaderError);
        setError('Error loading 3D model');
      });
    } catch (loadError) {
      console.error('Error loading asset:', loadError);
      setError('Error loading asset');
    }

    const render = () => {
      requestAnimationFrame(render);
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    render();
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading 3D model...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GLView style={styles.glView} onContextCreate={onContextCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glView: {
    width: '100%',
    height: '100%',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default AuraSpecs3DViewer;