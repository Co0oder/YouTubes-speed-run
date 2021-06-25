import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

export const apiRoutes = {
	relatedVideos: `${apiUrl}/related`,
	videoInfo: `${apiUrl}/info`
};