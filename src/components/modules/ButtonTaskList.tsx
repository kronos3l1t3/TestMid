import { ReactNode } from "react";

type ButtonTaskListProps = {
	children?: ReactNode;
	className?: string;
	id?: string;
	onClick?: any;
	Ref?: any;
};

const ButtonTaskList = ({
	children,
	className,
	id,
	onClick,
	Ref: reference,
}: ButtonTaskListProps) => {
	const style: string =
		"cursor-pointer flex items-center py-0.5 px-4 border rounded-md m-0.5 h-8 text-sm font-mono bg-[#EAF0F5]";

	return (
		<div
			className={style + " " + className}
			id={id}
			onClick={onClick}
			ref={reference}
		>
			{children}
		</div>
	);
};

export default ButtonTaskList;
