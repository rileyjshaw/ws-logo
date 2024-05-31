import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Text from './Text';

const TextCircle = ({ text, radius = 1.2, ...props }) => {
	const groupRef = useRef();

	useFrame(({ clock }) => {
		if (groupRef.current) {
			groupRef.current.rotation.z = -0.02 * clock.getElapsedTime();
		}
	});

	const segments = text.length;
	const angleStep = (2 * Math.PI) / segments;

	const positions = Array.from({ length: segments }, (_, i) => {
		const angle = i * angleStep;
		return [-Math.cos(angle) * radius, Math.sin(angle) * radius, 1.25];
	});

	return (
		<mesh ref={groupRef}>
			{positions.map((pos, i) => (
				<Text key={i} position={pos} rotation={[0, 0, -i * angleStep + Math.PI / 2]} size={0.3} {...props}>
					{text[i]}
				</Text>
			))}
		</mesh>
	);
};

export default TextCircle;
