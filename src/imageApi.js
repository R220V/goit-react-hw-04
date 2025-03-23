import axios from "axios";


export const fetchImages = async (text, page) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
	  params: {
		query: text,
		per_page: 12,
		page: page,
		orientation: "portrait",
		client_id: "rawjN_ZNQdSIqbFTMgDy3n6YWJrrJvSM9f2yHAn2DOY",
	  },
	});
  
	return response.data.results;
  };
  
   
