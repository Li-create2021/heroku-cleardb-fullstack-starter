import { useContext } from 'react';
import { context } from "../../context/APIProvider";
import {nanoid} from "nanoid";
import H2 from "../atoms/H2";
import Section from "../molecules/Section";
import textData from "../../data/textData";

const Home = () => {

	const APIContext = useContext(context);

	return (
		<main>
			<H2>Home</H2>

			<Section
				title={textData.aboutSection1.title}
				text={textData.aboutSection1.text}
			/>

			<Section
				title={textData.aboutSection2.title}
				text={textData.aboutSection2.text}
			/>

			{APIContext.usersLoaded
				? <ol>
					{APIContext.users.map(element => (
						<li key={nanoid()}>
								<span>
									{`NAME: ${element.user_name} | `}
								</span>
							<span>
									{`EMAIL: ${element.user_email}`}
								</span>
						</li>
					))}
				</ol>
				: <p>loading...</p>}

		</main>
	)
};

export default Home;