import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
// import { useMask } from '@react-three/drei';
import { X, Y } from './constants';

const SineWave = ({ segments = 100, color }) => {
	// const stencil = useMask(1);
	const curveRef = useRef();

	const points = useMemo(() => {
		return new Array(segments).fill().map((_, i) => {
			const x = ((i / (segments - 1)) * 2 - 1) * 0.95;
			const y = Math.sin(-x * Math.PI) / 3;
			return [x, y, 0];
		});
	}, [segments]);

	useFrame(({ clock }) => {
		points.forEach(point => {
			point[Y] = Math.sin((clock.getElapsedTime() / 2 - point[X]) * Math.PI) / 3;
		});
		curveRef.current.geometry.setPositions(points.flat());
	});

	return <Line ref={curveRef} points={points} color={color} lineWidth={17} depthTest={false} />;
};

export default SineWave;
