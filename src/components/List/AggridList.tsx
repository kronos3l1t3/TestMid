import { useState } from "react";
import { State } from "../_types";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface AggridListProps {
	rowsState: State;
}

const AggridList = ({ rowsState }: AggridListProps) => {
	const [defaultColDef] = useState({
		flex: 1,
		minWidth: 100,
	});

	const [countRows, setCountRows] = useState(0);

	const [columnDefs] = useState([
		{ field: "task", headerName: "Task #" },
		{ field: "text", headerName: "Text" },
		{ field: "photo", headerName: "Photo" },
		{ field: "action", headerName: "Action" },
	]);

	const readyRows = (params: any) => {
		setCountRows(params.api.getDisplayedRowCount());
	};

	return (
		<div
			className={"ag-theme-alpine my-1 p-10"}
			style={{ height: 600, width: "100%" }}
		>
			<AgGridReact
				onGridReady={readyRows}
				defaultColDef={{ ...defaultColDef }}
				rowData={rowsState.value}
				columnDefs={columnDefs}
			></AgGridReact>
		</div>
	);
};

export default AggridList;
