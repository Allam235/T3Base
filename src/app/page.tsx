import Link from "next/link";

const mockUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/7/73/2023_Toyota_Supra_%282%29.jpg"
];


const mockImages = mockUrls.map((url, index) => ({
	id: index + 1,
	url,
}));

export default function HomePage() {
	return (
		<main className="">
			<div className="flex flex-wrap" >{
				mockImages.map((image) => (
					<div key = {image.id} className="w-48">
						<img src={image.url}/>
					</div>
				))
			}

			</div>
			Hello Gallary in progress
		</main>
	);
}
