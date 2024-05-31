import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const AlwaysFacing = ({ children }) => {
	const { camera } = useThree();
	const ref = useRef();

	useFrame(() => {
		if (ref.current) {
			ref.current.lookAt(camera.position);
		}
	});

	return <group ref={ref}>{children}</group>;
};

export default AlwaysFacing;
