import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const SpinningRing = ({ position, rotation, color }) => {
	const ringRef = useRef();

	useFrame(({ clock }) => {
		if (ringRef.current) {
			ringRef.current.rotation.y = rotation[1] + 0.2 * clock.getElapsedTime();
		}
	});

	return (
		<mesh ref={ringRef} position={position} rotation={rotation}>
			<torusGeometry args={[1, 0.088, 16, 100]} />
			<meshBasicMaterial color={color} />
		</mesh>
	);
};

export default SpinningRing;
