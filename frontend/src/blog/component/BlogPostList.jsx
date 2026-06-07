import { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard";

export default function BlogPostList() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [images, setImages] = useState([]);

	const postsPerPage = 5;

	useEffect(() => {
		async function fetchPosts() {
			try {
				setLoading(true);
				setError("");

				const response = await fetch(
					`http://localhost:8000/posts/?page=${currentPage}&limit=${postsPerPage}`,
					{
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "",
							"Access-Control-Allow-Methods": "",
							"Access-Control-Allow-Headers": "*",
						},
					}
				);

				if (!response.ok) {
					const errorText = await response.text();
					throw new Error(
						`Nie udało się pobrać postów. Status: ${response.status}. ${errorText}`
					);
				}

				const data = await response.json();

				if (Array.isArray(data)) {
					setImages(data);
					setPosts(data);
					setTotalPages(Math.ceil(data.length / postsPerPage));
				} else {
					setPosts(data.posts || []);
					setTotalPages(data.pagination?.total_pages || 1);
				}
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchPosts();
	}, [currentPage]);

	if (loading) {
		return <p className="blog-empty-message">Ładowanie postów...</p>;
	}

	if (error) {
		return <p className="blog-empty-message">{error}</p>;
	}

	if (posts.length === 0) {
		return (
			<div className="blog-empty-box">
				<h2>Brak postów</h2>
				<p>W bazie danych nie ma jeszcze żadnych wpisów blogowych.</p>
			</div>
		);
	}

	return (
		<>
			{posts.map((post) => (
				<BlogPostCard key={post.post_id} post={post} />
			))}

			{totalPages > 1 && (
				<div className="blog-pagination">
					<button
						onClick={() => setCurrentPage((prev) => prev - 1)}
						disabled={currentPage === 1}
						className="blog-pagination-button">
						Poprzednia
					</button>

					<span className="blog-pagination-info">
						Strona {currentPage} z {totalPages}
					</span>

					<button
						onClick={() => setCurrentPage((prev) => prev + 1)}
						disabled={currentPage === totalPages}
						className="blog-pagination-button">
						Następna
					</button>
				</div>
			)}
		</>
	);
}
