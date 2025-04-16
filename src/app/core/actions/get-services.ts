import { environment } from 'src/environments/environment';

const BASE_URL = environment.baseUrl;
const TOKEN = environment.githubCredential;

export const getServices = async (): Promise<GitHubLabel[]> => {
  try {
    const resp = await fetch(`${BASE_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${TOKEN}`,
      },
    });
    if (!resp.ok) {
      throw new Error(`Error fetching services: ${resp.statusText}`);
    }
    const services = (await resp.json()) as GitHubLabel[];
    console.log(services);
    return services;
  } catch (error) {
    throw new Error(`Can't load services: ${error}`);
  }
};
