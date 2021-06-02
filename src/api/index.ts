export const getRepoByQuery = (query: string) => {
    const baseUrl = 'https://api.github.com/';
    const queryParams = `orgs/${query}/repos`;

    const options = {
        method: 'GET'
    };

    return fetch(baseUrl + queryParams, options).then((res) => res.json());
};
