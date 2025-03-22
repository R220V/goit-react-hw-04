import axios from "axios";

export const fetchImages = async ()=>{
	const axiosParams = {
params: {
	query: topic,
	client_id: 'rawjN_ZNQdSIqbFTMgDy3n6YWJrrJvSM9f2yHAn2DOY',
	page: currentPage,
	per_page: 12,
	orientation: portrait,
}
	}
console.log(axiosParams);

const response = await axios.get( `https://api.unsplash.com/search/photos`, axiosParams

)
return response.data.resultts
}