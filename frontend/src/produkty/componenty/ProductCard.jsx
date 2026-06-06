import { useState } from "react";

import heartIcon from "../../assets/ulubione.png";
import heartFilledIcon from "../../assets/ulubione-fill.png";
import cartIcon from "../../assets/cart.png";

import "./ProductCard.css";

function ProductCard({ product, isOpen, onToggle }) {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<article className={`product-card ${isOpen ? "product-card-open" : ""}`} onClick={onToggle}>
			<img src={product.image} alt={product.name} className="product-image" />

			<div className="product-info">
				<h2 className="product-name">{product.name}</h2>

				<span className="product-price">{product.price}</span>
			</div>

			<div
				className={`product-actions ${isOpen ? "product-actions-open" : ""}`}
				onClick={(event) => event.stopPropagation()}>
				<button
					type="button"
					className="product-icon-button"
					onClick={() => setIsFavorite((current) => !current)}>
					<img
						src={isFavorite ? heartFilledIcon : heartIcon}
						alt="Ulubione"
						className="product-action-icon"
					/>
				</button>

				<button type="button" className="product-icon-button">
					<img src={cartIcon} alt="Koszyk" className="product-action-icon" />
				</button>
			</div>
		</article>
	);
}

export default ProductCard;
