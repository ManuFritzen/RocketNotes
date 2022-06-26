import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({ isNew, value, onclick, ...rest }) {
	return (
		<Container isNew={isNew}>
			<input type='text' value={value} readOnly={!isNew} {...rest} />
      <button type="button" onclick={onclick}
			className={isNew ? 'button-add' : 'button-delete'}>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
		</Container>
	)
}
