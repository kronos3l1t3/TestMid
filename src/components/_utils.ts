import { SyntheticEvent, Dispatch, SetStateAction } from "react";

export const handleInputWriting = (
	e: SyntheticEvent,
	set: Dispatch<SetStateAction<string>>
) => {
	const { value } = e.target as HTMLInputElement;
	set(value);
};
