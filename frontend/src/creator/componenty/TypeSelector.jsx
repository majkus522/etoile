import "./TypeSelector.css";

function JewelryTypeSelector({ selectedType, setSelectedType, setSelectedLength }) {
	const types = [
		{ id: "necklace", label: "Naszyjniki" },
		{ id: "bracelet", label: "Bransoletki" },
	];

	return (
		<div className="jewelry-type-selector">
			{types.map((type) => (
				<button
					key={type.id}
					type="button"
					onClick={() => {
						setSelectedType(type.id);
						if (type.id === "necklace") {
							setSelectedLength("40 cm");
						} else {
							setSelectedLength("16 cm");
						}
					}}
					className={`jewelry-type-button ${
						selectedType === type.id ? "jewelry-type-button-active" : ""
					}`}>
					{type.label}
				</button>
			))}
		</div>
	);
}

export default JewelryTypeSelector;
