import { Dispatch, SetStateAction } from "react";

export type State = {
	value: any;
	set: Dispatch<SetStateAction<any>>;
};
