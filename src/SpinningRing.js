const SpinningRing = ({ position, rotation, color }) => {
	return (
		<mesh position={position} rotation={rotation}>
			<torusGeometry args={[1, 0.088, 16, 100]} />
			<meshBasicMaterial color={color} />
		</mesh>
	);
};

export default SpinningRing;
