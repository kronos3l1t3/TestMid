import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
	calendarIcon,
	discIcon,
	loaderIcon,
	maximizeIcon,
	unlockIcon,
} from "../assets/Icons";
import ButtonTaskList from "./modules/ButtonTaskList";

//! TYPOS AND INTERFACES

type State = {
	value: any;
	set: Dispatch<SetStateAction<any>>;
};

type StateObject = {
	value: any;
	set: Dispatch<SetStateAction<object>>;
};

interface TaskMenuProps {
	text: State;
	menu: State;
	rowsState: State
}

//! START COMPONENT
const TaskMenu = ({ text, menu, rowsState }: TaskMenuProps) => {
	//! references

	const todayButtonRef = useRef<HTMLElement>(null);
	const publicButtonRef = useRef<HTMLElement>(null);
	const normalButtonRef = useRef<HTMLElement>(null);
	const estimationButtonRef = useRef<HTMLElement>(null);
	const buttonOkRef = useRef<HTMLElement>(null);

	//! effects

	//* ButtonAllower
	useEffect(() => {
		const Buttons = [
			todayButtonRef,
			publicButtonRef,
			normalButtonRef,
			estimationButtonRef,
		];

		const buttonOk =
			buttonOkRef.current === null ? new HTMLElement() : buttonOkRef.current;

		const buttonState = (buttons: typeof Buttons, state: boolean) => {
			buttons.map((button) =>
				state
					? button.current?.classList.add('disabled-button')
					: button.current?.classList.remove('disabled-button')
			);
		};

		if (text.value === '') {
			buttonOk.innerHTML = 'Ok';
			buttonState(Buttons, true);
		} else {
			buttonOk.innerHTML = 'Add';
			buttonState(Buttons, false);
		}
	}, [text.value]);

	//! handlers

	const handleCancel = () => {
		text.set("");
		menu.set(false);
	};

	const handleOK = () => {
		if (text.value === "") {
			menu.set(false);
		}else{
			rowsState.set([
				...rowsState.value,
				{task: rowsState.value.length+1, text: text.value, photo: '', action: ''}
				]
			);
			text.set(" ");
		}
	};

	return (
		<div className="flex justify-between border-t p-1 shadow-lg overflow-x-scroll">
			<div className="flex">
				<ButtonTaskList className="mr-8 ">
					{maximizeIcon}
					<span className="hidden xl:flex">Open</span>
				</ButtonTaskList>
				<ButtonTaskList Ref={todayButtonRef}>
					{calendarIcon}
					<span className="hidden xl:flex">Today</span>
				</ButtonTaskList>
				<ButtonTaskList Ref={publicButtonRef}>
					{unlockIcon}
					<span className="hidden xl:flex">Public</span>
				</ButtonTaskList>
				<ButtonTaskList Ref={normalButtonRef}>
					{discIcon}
					<span className="hidden xl:flex">Normal</span>
				</ButtonTaskList>
				<ButtonTaskList Ref={estimationButtonRef}>
					{loaderIcon}
					<span className="hidden xl:flex">Estimation</span>
				</ButtonTaskList>
			</div>
			<div className="flex">
				<ButtonTaskList onClick={handleCancel} className="xl:flex hidden">Cancel</ButtonTaskList>
				<ButtonTaskList
					className="text-white !bg-[#0d54ce] !px-4"
					onClick={handleOK}
					Ref={buttonOkRef}
				>
					Ok
				</ButtonTaskList>
			</div>
		</div>
	);
};
//! END COMPONENT

export default TaskMenu;
