import { Container, Links, Content } from "./styles";

import { Header } from '../../components/Header';
import { Section} from '../../components/section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';

export function Details() {
	return (
		<Container>
      <Header/>

			<main>
				<Content>
					<ButtonText title="Excluir nota"/>

					<h1>
						Introdução ao React 
					</h1>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at, ad voluptates reiciendis earum debitis deserunt amet voluptate. Pariatur itaque earum reiciendis placeat ea obcaecati ullam optio consequatur voluptates quidem.
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, magnam omnis molestias vitae cupiditate nesciunt assumenda corporis! Aspernatur officiis ab rerum ipsa alias necessitatibus hic asperiores animi ad, excepturi iure.
					</p>
				
					<Section title="Links úteis">
						<Links>
							<li><a href="#">https://www.rocketseat.com.br</a></li>
							<li><a href="#">https://www.rocketseat.com.br</a></li>
						</Links>
					</Section>
					<Section title="Marcadores">
						<Tag title="express"/>
						<Tag title="nodejs"/>
					</Section>
								<Button title="Voltar"/>
				</Content>
			</main>
		</Container>
	);
}
