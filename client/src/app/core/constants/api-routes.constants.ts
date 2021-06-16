import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

export const apiRoutes = {
	relatedVideo: `${apiUrl}/video`
};