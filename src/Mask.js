// import { Mask } from '@react-three/drei';

const Frame = ({ color, ...props }) => (
	<mesh {...props}>
		<ringGeometry args={[0.87, 1.04, 64]} />
		<meshBasicMaterial color={color} />
	</mesh>
);

const Blocker = ({ color, ...props }) => (
	<mesh {...props}>
		<ringGeometry args={[0, 1, 64]} />
		<meshBasicMaterial color="#fff" />
	</mesh>
);

const CircularMask = ({ color, ...props }) => (
	<group {...props}>
		<Frame position={[0, 0, 0.5]} color={color} />
		<Blocker position={[0, 0, 0]} />
		{/* <Mask id={1} position={[0, 0, 0]}>
			<circleGeometry args={[1, 64]} />
		</Mask> */}
	</group>
);

export default CircularMask;
