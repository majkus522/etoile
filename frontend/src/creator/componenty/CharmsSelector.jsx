import { useEffect, useState } from "react";
import "./CharmsSelector.css";

const charmOptions1 = [
	{ id: "serce", name: "Serce", icon: "♥" },
	{ id: "gwiazda", name: "Gwiazdka", icon: "★" },
	{ id: "krzyż", name: "Krzyż", icon: "✚" },
	{ id: "słońce", name: "Słońce", icon: "☀" },
	{ id: "koniczyna", name: "Koniczyna", icon: "☘" },
	{ id: "nieskończoność", name: "Nieskończoność", icon: "∞" },
	{ id: "księżyc", name: "Księżyc", icon: "☾" },
];

const charmOptions2 = [...charmOptions1, { id: "none", name: "Brak", icon: "" }];

function CharmsSelector({
	selectedCharm1,
	setSelectedCharm1,
	selectedCharm2,
	setSelectedCharm2,
	isNecklace,
}) {
	useEffect(() => {
		if (isNecklace) {
			setSelectedCharm2("none");
		}
	}, [isNecklace]);
	const [isCharmsOpen, setIsCharmsOpen] = useState(true);

	return (
		<section className="charms-section">
			<div className="charms-header" onClick={() => setIsCharmsOpen((prev) => !prev)}>
				<span className="charms-title">ZAWIESZKI</span>

				<button type="button" className="charms-arrow-button" aria-label="Rozwiń lub zwiń">
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						className={`charms-arrow ${isCharmsOpen ? "" : "charms-arrow-closed"}`}>
						<path
							d="M6 15L12 9L18 15"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>

			{isCharmsOpen && (
				<>
					<div className="charms-group">
						<h3 className="charms-group-title">Zawieszka 1</h3>

						<div className="charms-grid">
							{charmOptions1.map((charm) => (
								<button
									key={charm.id}
									type="button"
									onClick={() => setSelectedCharm1(charm.id)}
									className={`charm-card ${
										selectedCharm1 === charm.id ? "charm-card-active" : ""
									}`}>
									<span className="charm-icon charm-icon-primary">
										{charm.icon}
									</span>
									<span className="charm-name">{charm.name}</span>
								</button>
							))}
						</div>
					</div>

					{!isNecklace && (
						<div className="charms-group">
							<h3 className="charms-group-title">Zawieszka 2</h3>

							<div className="charms-grid">
								{charmOptions2.map((charm) => (
									<button
										key={charm.id}
										type="button"
										onClick={() => setSelectedCharm2(charm.id)}
										className={`charm-card ${
											selectedCharm2 === charm.id ? "charm-card-active" : ""
										}`}>
										<span className="charm-icon charm-icon-secondary">
											{charm.icon}
										</span>
										<span className="charm-name">{charm.name}</span>
									</button>
								))}
							</div>
						</div>
					)}

					<div className="charms-bottom-line" />
				</>
			)}
		</section>
	);
}

export default CharmsSelector;
