"use client";

import axios from "axios";
import { useState } from "react";

export const useCallApi = () => {
	const [responseApi, setResponseApi] = useState("");
	const [loading, setLoading] = useState(false);
	const postData = async (payload) => {
		try {
			setLoading(true);
			const response = await axios.post(process.env.NEXT_PUBLIC_URL, payload);
			setResponseApi(response.data);
			console.log(response.data);
		} catch (error) {
			console.log(error);
			return;
		} finally {
			setLoading(false);
		}
	};
	return { postData, responseApi, loading };
};
