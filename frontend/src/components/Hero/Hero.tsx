import { useHistory } from 'react-router-dom';
import { HeroSection, Title, Text, Button, HeroImg } from './Hero.style';
import Illustration from "../../utils/images/Shared workspace-pana.svg";

export const Hero = () => {
	
	const history = useHistory();

	return (
		<HeroSection>
			<Title>Your career is our concern</Title>
			<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </Text>
			<Button onClick={() => history.push('/find-a-job')}>Find a job</Button>
			<HeroImg src={Illustration} alt="illustration" />
		</HeroSection>
	);
};