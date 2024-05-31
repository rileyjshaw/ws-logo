import React, { useRef, useMemo } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
// import { useMask } from '@react-three/drei';
import { Vector3 } from 'three';
import { MeshLineGeometry, MeshLineMaterial, raycast as MeshLineRaycast } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

const SineWave = ({ segments = 100, color }) => {
	// const stencil = useMask(1);
	const { size } = useThree();
	const { width, height } = size;
	const curveRef = useRef();

	const points = useMemo(() => {
		return new Array(segments).fill().map((_, i) => {
			const x = ((i / (segments - 1)) * 2 - 1) * 0.99;
			const y = Math.sin(-x * Math.PI) / 3;
			return new Vector3(x, y, 0);
		});
	}, [segments]);

	useFrame(({ clock }) => {
		points.forEach(point => {
			point.y = Math.sin((clock.getElapsedTime() / 2 - point.x) * Math.PI) / 3;
		});
		curveRef.current.geometry.setPoints(points);
	});

	return (
		<mesh raycast={MeshLineRaycast} ref={curveRef} dispose={null}>
			<meshLineGeometry attach="geometry" points={points} />
			<meshLineMaterial
				attach="material"
				depthTest={false}
				lineWidth={0.25 - Math.max(width, height) / 27500}
				color={color}
				sizeAttenuation={true}
				transparent
				// {...stencil}
			/>
		</mesh>
	);
};

export default SineWave;
