import { useCallback, useState, useEffect } from 'react';

const useCountdown = (year, month, day) => {
	const calculateDaysLeft = useCallback(() => {
		const targetDate = new Date(year, month - 1, day);
		const currentDate = new Date();
		const timeDifference = targetDate - currentDate;
		const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
		return daysLeft;
	}, [year, month, day]);

	const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

	useEffect(() => {
		setDaysLeft(calculateDaysLeft());
		const intervalId = setInterval(() => {
			setDaysLeft(calculateDaysLeft());
		}, 10000);

		return () => clearInterval(intervalId);
	}, [calculateDaysLeft]);

	return daysLeft;
};

export default useCountdown;
