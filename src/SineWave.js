import React, { useRef, useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { Line } from '@react-three/drei';

const SineWave = ({ segments = 100, color }) => {
	const { size } = useThree();
	const curveRef = useRef();

	const points = useMemo(() => {
		return new Array(segments).fill().map((_, i) => {
			const x = (i / (segments - 1)) * 2 - 1;
			const y = Math.sin(-x * Math.PI) / 3;
			return [x, y, 0];
		});
	}, [segments]);

	return (
		<Line
			rotation={[0, 0, 0]}
			ref={curveRef}
			points={points}
			color={color}
			lineWidth={2 + size.height / 80}
			depthTest={false}
		/>
	);
};

export default SineWave;
