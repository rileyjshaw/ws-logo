import { useMemo } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import SpinningRing from './SpinningRing';
import SineWave from './SineWave';
import TextCircle from './TextCircle';
import AlwaysFacing from './AlwaysFacing';
import Mask from './Mask';
import Text from './Text';
import useCountdown from './hooks';
import { WATERSHED_BLUE } from './constants';

const N_RINGS = 5;

const rings = Array.from({ length: N_RINGS }, (_, index) => ({
	position: [0, 0, 0],
	rotation: [0, (Math.PI / N_RINGS) * index, 0],
	color: WATERSHED_BLUE,
}));

function Rig() {
	const { camera } = useThree();
	const positionVec = useMemo(() => ({ x: 0, y: 0 }), []);
	const rotationVec = useMemo(() => ({ x: 0, y: 0 }), []);
	return useFrame(({ mouse }) => {
		positionVec.x = mouse.x * 2;
		positionVec.y = mouse.y * 2;
		positionVec.z = camera.position.z;
		camera.position.lerp(positionVec, 0.02);

		rotationVec.x = -mouse.y * Math.PI;
		rotationVec.y = -mouse.x * Math.PI;
		camera.rotation.setFromVector3(rotationVec);

		camera.lookAt(0, 0, 0);
	});
}

const App = () => {
	const daysLeft = useCountdown(2024, 6, 18);

	return (
		<Canvas flat camera={{ position: [0, 0, 8] }} gl={{ antialias: true }}>
			<color attach="background" args={['#fff']} />
			<Center position={[0, 0, 0]}>
				<Center position={[0, 2.5, 0.5]}>
					<Text size={0.6} font={`${process.env.PUBLIC_URL}/easy_grotesk.json`}>
						Hi team,
					</Text>
				</Center>
				<TextCircle
					text="I’m so excited to work together!  "
					radius={1.2}
					font={`${process.env.PUBLIC_URL}/cartograph.json`}
				/>
				<AlwaysFacing>
					<Mask color={WATERSHED_BLUE} />
				</AlwaysFacing>
				<SineWave color={WATERSHED_BLUE} />
				{rings.map((props, index) => (
					<SpinningRing key={index} {...props} />
				))}
				<Center position={[0, -2.5, 0.5]}>
					<Text size={0.6} font={`${process.env.PUBLIC_URL}/easy_grotesk.json`}>
						{daysLeft > 0 ? 'See you in' : 'Let’s decarbonize'}
					</Text>
				</Center>
				<Center position={[0, -3.5, 0.5]}>
					<Text size={0.6} font={`${process.env.PUBLIC_URL}/easy_grotesk.json`}>
						{daysLeft > 0 ? `${daysLeft} days!` : 'the economy!'}
					</Text>
				</Center>
			</Center>
			<Rig />
		</Canvas>
	);
};

export default App;
