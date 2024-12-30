import { API_HOST } from "../utils/constants";

export async function getPokemonsAPI(endPointUrl: string): Promise<any> {
	// console.log('endPointUrl--->', endPointUrl);

	try {
		const url = `${API_HOST}/pokemon?limit=20&offset=0`;
		const response = await fetch(endPointUrl || url);
		const result = await response.json();
		// console.log(result);
		return result;
	} catch (error) {
		throw error;
	}
}

export async function getPokemonDetailsByUrlApi(url: string): Promise<any> {
	try {
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		throw error;
	}
}

export async function getPokemonDetailsApi(id: string): Promise<any> {
	try {
		const url = `${API_HOST}/pokemon/${id}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		throw error;
	}
}