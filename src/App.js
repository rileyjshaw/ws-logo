import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import SpinningRing from './SpinningRing';
import SineWave from './SineWave';
import AlwaysFacing from './AlwaysFacing';
import Mask from './Mask';
import { WATERSHED_BLUE } from './constants';

const rings = [-30, 0, 30].map((deg, index) => ({
	position: [0, 0, 0],
	rotation: [0, (deg / 180) * Math.PI + Math.PI / 2, 0],
	color: WATERSHED_BLUE,
}));

const App = () => {
	return (
		<Canvas flat dpr={4} camera={{ position: [0, 0, 8] }} gl={{ antialias: true }}>
			<color attach="background" args={['#fff']} />
			<Center position={[0, 0, 0]}>
				<AlwaysFacing>
					<Mask color={WATERSHED_BLUE} />
				</AlwaysFacing>
				<SineWave color={WATERSHED_BLUE} />
				{rings.map((props, index) => (
					<SpinningRing key={index} {...props} />
				))}
			</Center>
		</Canvas>
	);
};

export default App;
