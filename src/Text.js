import { Text3D } from '@react-three/drei';
import { WATERSHED_BLUE } from './constants';

const Text = ({ children, color = WATERSHED_BLUE, ...props }) => {
	return (
		<Text3D
			height={0.05}
			characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!,’"
			size={0.3}
			{...props}
		>
			{children}
			<meshBasicMaterial color={color} />
		</Text3D>
	);
};

export default Text;
