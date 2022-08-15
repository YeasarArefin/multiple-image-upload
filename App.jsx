import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

	const [files, setFiles] = useState([]);
	const [images, setImages] = useState([]);

	useEffect(() => console.log(images), [images]);

	const uploadImage = async () => {

		for (let i = 0; i < files.length; i++) {

			const formData = new FormData();
			const image = files[i];
			formData.append('image', image);

			const { data } = await axios.post('https://api.imgbb.com/1/upload?key=8ed590ff68ddde6cc90c42108dab7385', formData);
			setImages((prevImg) => [...prevImg, data?.data?.url]);

		}

	};

	return (
		<div>
			<input type="file" multiple="multiple" onChange={(e) => setFiles(e.target.files)} />
			<button onClick={uploadImage}>Save</button>
		</div>
	);
}

export default App;
